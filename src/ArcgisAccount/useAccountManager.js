import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  completeAuth,
  loginOAuth2,
  logoutOAuth2,
  getUserThumbnail,
  getOrgThumbnail
} from './utils/arcgisAuthUtils';

import {
  getAccountManagerStorage,
  addAccountStorage,
  removeAccountStorage,
  logoutAccountStorage,
  beginStatusStorage,
  switchActiveStorage,
  completeStatusStorage,
  refreshAccountStorage
} from './utils/localStorageUtils';

const useAccountManager = (options, name = 'arcgis-account-manager') => {
  const [manager] = useState(name);
  const [credentials] = useState(options);

  const { accounts, status, active } = getAccountManagerStorage(manager);
  const [accountManagerState, setAccountManagerState] = useState({
    active,
    accounts,
    status
  });

  /** Complete Login */
  useEffect(
    () => {
      const { loading, authProps } = status || {};
      if (loading !== true) {
        return;
      }
      //complete login
      completeAuth({
        authProps
      }).then(account => {
        const { key, user } = account || {};
        if (key) {
          addAccountStorage(manager, key, user);
        }

        //Update localStorage/ state
        completeStatusStorage(manager);
        const accountManager = getAccountManagerStorage(manager);
        setAccountManagerState(accountManager);
      });
    },
    [manager, status]
  );

  /** Add Account */
  const addAccount = useCallback(
    (options = null) => {
      // saving window.location.href (query params, etc) as originRoute
      const originRoute = window.location.href;

      const { clientId, redirectUri, portalUrl, popup } = options
        ? options || {}
        : credentials || {};

      const portal = buildPortalUrl(portalUrl);

      //set localstorage status
      beginStatusStorage(
        manager,
        {
          clientId,
          redirectUri,
          portalUrl: portal,
          popup
        },
        originRoute
      );
      //begin login
      loginOAuth2({
        clientId,
        redirectUri,
        portalUrl: portal,
        popup,
        manager,
        setAccountManagerState
      });
    },
    [credentials, manager]
  );

  /** Logout Account: Remove token and session from user auth object and attempt revoke token*/
  const logoutAccount = useCallback(
    (account = null) => {
      // const { accounts } = accountManagerState || {};
      const { session, token, key } = account || {};

      if (session && token && key) {
        const portalUrl = session ? session.portal : null;
        const clientId = session ? session.clientId : null;
        const message = logoutOAuth2({
          url: portalUrl,
          clientId: clientId,
          token: token
        });
        console.log(`Revoke token status: ${message}`);

        //Update localStorage/ state
        logoutAccountStorage(manager, key);
        const accountManager = getAccountManagerStorage(manager);
        setAccountManagerState(accountManager);
      } else {
        console.error(
          `Invalid account object given to logoutAccount. Required fields: session/token/key. Fields received: {session: ${session}, token: ${token}, key: ${key}}`
        );
      }
    },
    [accountManagerState, manager]
  );

  /** Remove Account: Remove account from local storage and attempt revoke token*/
  const removeAccount = useCallback(
    (account = null) => {
      const { session, token, key } = account;
      if (session && key) {
        //Revoke token
        if (token) {
          const portalUrl = session?.portal;
          const clientId = session?.clientId;
          //Remove token and session
          logoutOAuth2({
            url: portalUrl,
            clientId: clientId,
            token: token
          });
        }

        //Update localStorage/ state
        removeAccountStorage(manager, key);
        const accountManager = getAccountManagerStorage(manager);
        setAccountManagerState(accountManager);
      } else {
        console.error(
          `Invalid account object given to removeAccount. Required fields: session/key. Fields received: {session: ${session}, key: ${key}}`
        );
      }
    },
    [accountManagerState, manager]
  );

  /** Restore Account: Log in to an existing account that is logged out */
  const restoreAccount = (account = null) => {
    // const select = props ? props : credentials;
    // const { clientId, redirectUri, portalUrl, popup } = select || {};
    //set localstorage status
    // beginStatusStorage(manager, select);
    //begin login
    // loginOAuth2({ clientId, redirectUri, portalUrl, popup });
  };

  /** Refresh Account: UserSession.refreshSession [https://esri.github.io/arcgis-rest-js/api/auth/UserSession/#refreshSession] */
  const refreshAccount = account => {
    const { session, key } = account || {};
    try {
      if (!session) throw Error('Missing account session.');
      if (!key) throw Error('Missing account key.');
      session.refreshSession().then(session => {
        const sSession = session.serialize();
        refreshAccountStorage(manager, key, sSession);
      });
    } catch (e) {
      console.error(
        `Cannot refresh session for account: ${account}. Error: ${e}.`
      );
    }
  };

  //** Set the active account */
  const switchActiveAccount = useCallback(
    (account = null) => {
      if (validAccount(account)) {
        const { key } = account;
        switchActiveStorage(manager, key);
        const accountManager = getAccountManagerStorage(manager);
        setAccountManagerState(accountManager);
      }
    },
    [manager]
  );

  const verifyToken = useCallback((account = null) => {}, []);

  const logoutAllAccounts = useCallback(() => {}, []);

  const removeAllAccounts = useCallback(() => {}, []);

  const validAccount = (account = null) => {
    const { key } = account || {};
    if (key) {
      const valid = accountManagerState?.accounts[key] ? true : false;
      return valid;
    }
    return false;
  };

  return {
    accountManagerState,
    addAccount,
    logoutAccount,
    removeAccount,
    restoreAccount,
    refreshAccount,
    switchActiveAccount,
    getUserThumbnail,
    getOrgThumbnail
  };
};

/**
 * Helper Functions
 */

const buildPortalUrl = url => {
  //https://developers.arcgis.com/rest/users-groups-and-items/root.htm
  //Enterprise ex:http://aero.esri.com/portal/sharing/rest
  //Arcgis Online ex: https://dbsne.maps.arcgis.com/sharing/rest
  if (!url) return null;
  const format =
    'https://<webadaptorhost>.<domain>.com/<webadaptorname>/sharing/rest';
  try {
    let portal = new URL(url);
    const protocol = portal.protocol;
    const host = portal.host;
    let pathname = portal.pathname; // Format '/<webadaptorname>/sharing/rest'
    const defaultPathname = '/portal/sharing/rest';

    const pathArray = pathname?.split('/');
    if (!pathArray) {
      console.warn(
        `No URL path given. Expected format: '/<webadaptorname>/sharing/rest'. Setting path to default: ${defaultPathname}`
      );
      pathname = defaultPathname;
    } else if (pathArray.length < 2) {
      console.warn(
        `No URL path given. Expected format: '/<webadaptorname>/sharing/rest'. Setting path to default: ${defaultPathname}`
      );
      pathname = defaultPathname;
    } else if (pathArray.length < 4) {
      console.warn(
        `URL path ${pathname} may be invalid format. Verify format. Arcgis Online format: '/sharing/rest'. Enterprise format: '/<webadaptorname>/sharing/rest'. Setting path to: ${pathname}`
      );
    } else if (pathArray.length !== 4) {
      console.warn(
        `URL path ${pathname} is invalid format. Expected format: '/<webadaptorname>/sharing/rest'. Setting path to: /${
          pathArray[1]
        }/sharing/rest`
      );
      pathname = `/${pathArray[1]}/sharing/rest`;
    }

    return `${protocol}//${host}${pathname}`;
  } catch (e) {
    console.error(
      `This may be an invalid URL: ${url}. For ArcGIS Online set url to null. For Enterprise use format: ${format}. Full error: ${e}`
    );
    return url;
  }
};

/**
 * Docs
 */

useAccountManager.propTypes = {
  /** Text object name for accountManager in local storage. */
  accountManagerName: PropTypes.string,
  /** Options for starting OAuth to include { clientId, redirectUri, portalUrl, popup }. Can also be set in addAccount function.  */
  options: PropTypes.object
};

useAccountManager.defaultProps = {
  accountManagerName: 'arcgis-account-manager'
};

useAccountManager.displayName = 'useAccountManager';

export default useAccountManager;
