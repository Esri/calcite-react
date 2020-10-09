import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  completeAuth,
  loginOAuth2,
  logoutOAuth2,
  getUserThumbnail,
  getOrgThumbnail
} from './accountManagerUtils';

import {
  getAccountManagerStorage,
  addAccountStorage,
  removeAccountStorage,
  logoutAccountStorage,
  beginStatusStorage,
  switchActiveStorage,
  completeStatusStorage,
  refreshAccountStorage
} from './accountManagerStorageUtils';

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
      completeAuth(authProps).then(account => {
        if (account && account.key) {
          addAccountStorage(manager, account);
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

      //set localstorage status
      beginStatusStorage(
        manager,
        {
          clientId,
          redirectUri,
          portalUrl,
          popup
        },
        originRoute
      );
      //begin login
      loginOAuth2(
        manager,
        {
          clientId,
          redirectUri,
          portalUrl,
          popup
        },
        setAccountManagerState
      );
    },
    [credentials, manager]
  );

  /** Logout Account: Remove token and session from user auth object and attempt revoke token*/
  const logoutAccount = useCallback(
    async (account = null) => {
      const { session, token, key } = account || {};
      const valid = validAccount(account);

      if (session && token && valid) {
        logoutOAuth2(account).then(message => {
          const status = JSON.stringify(message);
          console.log(`Revoke token status: ${status}`);
        });

        //Update localStorage/ state
        logoutAccountStorage(manager, account);
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
      const valid = validAccount(account);
      const { session, token, key } = account || {};
      if (valid) {
        //Revoke token
        if (token) {
          //Remove token and session
          logoutOAuth2(account).then(message => {
            const status = JSON.stringify(message);
            console.log(`Revoke token status: ${status}`);
          });
        }

        //Update localStorage/ state
        removeAccountStorage(manager, account);
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
  const refreshAccount = ({ session, key }) => {
    try {
      if (!session) throw Error('Missing account session.');
      if (!key) throw Error('Missing account key.');
      session
        .refreshSession()
        .then(session => {
          const sSession = session.serialize();
          refreshAccountStorage(manager, { key, session: sSession });
        })
        .catch(e =>
          console.error(`Cannot refresh session for account: ${key}. ${e}`)
        );
    } catch (e) {
      console.error(`Cannot refresh session for account: ${key}. ${e}`);
    }
  };

  /** Set the active account */
  const switchActiveAccount = useCallback(
    (account = null) => {
      if (validAccount(account)) {
        switchActiveStorage(manager, account);
        const accountManager = getAccountManagerStorage(manager);
        setAccountManagerState(accountManager);
      }
    },
    [manager]
  );

  /** Check token status */
  const verifyToken = useCallback(({ session, token, key }) => {
    if (session && token) {
      try {
        const { portal } = session || {};
        session
          .getToken(portal)
          .then(() => {
            return true;
          })
          .catch(e => {
            console.log(`Account ${key} token invalid. ${e}`);
            return false;
          });
      } catch (e) {
        console.error(`Token status verification failed with error.  ${e}`);
        return false;
      }
    } else {
      return false;
    }
  }, []);

  /** Logout all accounts */
  const logoutAllAccounts = useCallback(
    () => {
      Object.entries(accountManagerState.accounts).map(([key, account]) => {
        const { session, token } = account || {};

        if (session && token) {
          logoutOAuth2(account).then(message => {
            const status = JSON.stringify(message);
            console.log(`Revoke token status for account ${key}: ${status}`);
          });

          //Update localStorage/ state
          logoutAccountStorage(manager, account);
        }
        return account;
      });
      const accountManager = getAccountManagerStorage(manager);
      setAccountManagerState(accountManager);
    },
    [accountManagerState]
  );

  /** Remove all accounts */
  const removeAllAccounts = useCallback(
    () => {
      Object.entries(accountManagerState.accounts).map(([key, account]) => {
        const { session, token } = account || {};

        //Revoke token
        if (session && token) {
          logoutOAuth2(account).then(message => {
            const status = JSON.stringify(message);
            console.log(`Revoke token status for account ${key}: ${status}`);
          });
        }
        //Update localStorage/ state
        removeAccountStorage(manager, account);

        return {};
      });
      const accountManager = getAccountManagerStorage(manager);
      setAccountManagerState(accountManager);
    },
    [accountManagerState]
  );

  // Helper Functions
  const validAccount = useCallback(
    (account = null) => {
      const { key } = account || {};
      if (key) {
        const valid = accountManagerState
          ? accountManagerState.accounts[key]
            ? true
            : false
          : false;
        return valid;
      }
      return false;
    },
    [accountManagerState]
  );

  return {
    accountManagerState,
    addAccount,
    logoutAccount,
    logoutAllAccounts,
    removeAccount,
    removeAllAccounts,
    restoreAccount,
    refreshAccount,
    switchActiveAccount,
    verifyToken,
    getUserThumbnail,
    getOrgThumbnail
  };
};

/**
 * Helper Functions
 */

// const buildPortalUrl = url => {
//   //https://developers.arcgis.com/rest/users-groups-and-items/root.htm
//   //Enterprise ex:http://aero.esri.com/portal/sharing/rest
//   //Arcgis Online ex: https://dbsne.maps.arcgis.com/sharing/rest
//   if (!url) return null;
//   const format =
//     'https://<webadaptorhost>.<domain>.com/<webadaptorname>/sharing/rest';
//   try {
//     let portal = new URL(url);
//     const protocol = portal.protocol;
//     const host = portal.host;
//     let pathname = portal.pathname; // Format '/<webadaptorname>/sharing/rest'
//     const defaultPathname = '/portal/sharing/rest';

//     const pathArray = pathname ? pathname.split('/') : null;
//     if (!pathArray) {
//       console.warn(
//         `No URL path given. Expected format: '/<webadaptorname>/sharing/rest'. Setting path to default: ${defaultPathname}`
//       );
//       pathname = defaultPathname;
//     } else if (pathArray.length < 2) {
//       console.warn(
//         `No URL path given. Expected format: '/<webadaptorname>/sharing/rest'. Setting path to default: ${defaultPathname}`
//       );
//       pathname = defaultPathname;
//     } else if (pathArray.length < 4) {
//       console.warn(
//         `URL path ${pathname} may be invalid format. Verify format. Arcgis Online format: '/sharing/rest'. Enterprise format: '/<webadaptorname>/sharing/rest'. Setting path to: ${pathname}`
//       );
//     } else if (pathArray.length !== 4) {
//       console.warn(
//         `URL path ${pathname} is invalid format. Expected format: '/<webadaptorname>/sharing/rest'. Setting path to: /${
//           pathArray[1]
//         }/sharing/rest`
//       );
//       pathname = `/${pathArray[1]}/sharing/rest`;
//     }

//     return `${protocol}//${host}${pathname}`;
//   } catch (e) {
//     console.error(
//       `This may be an invalid URL: ${url}. For ArcGIS Online set url to null. For Enterprise use format: ${format}. Full error: ${e}`
//     );
//     return url;
//   }
// };

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
