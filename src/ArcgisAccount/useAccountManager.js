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

  const { accounts, status, active, order } = getAccountManagerStorage(manager);
  const [accountManagerState, setAccountManagerState] = useState({
    active,
    accounts,
    status,
    order
  });

  /** Complete Login */
  useEffect(
    () => {
      const { loading, authProps } = status || {};
      if (loading !== true) {
        return;
      }
      //complete login
      const completeLogin = async () => {
        const account = await completeAuth(authProps);
        if (account && account.key) {
          addAccountStorage(manager, account);
        }
        //Update localStorage/ state
        completeStatusStorage(manager);
        const accountManager = getAccountManagerStorage(manager);
        setAccountManagerState(accountManager);
      };

      completeLogin();
    },
    [manager, status]
  );

  /** Add Account */
  const addAccount = useCallback(
    (options = null, setActive = true) => {
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
        originRoute,
        setActive
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
        const message = await logoutOAuth2(account);
        const status = JSON.stringify(message);
        console.log(`Revoke token status: ${status}`);

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
    async (account = null) => {
      const valid = validAccount(account);
      const { session, token, key } = account || {};
      if (valid) {
        //Revoke token
        if (token) {
          //Remove token and session
          const message = await logoutOAuth2(account);
          const status = JSON.stringify(message);
          console.log(`Revoke token status: ${status}`);
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
  const restoreAccount = ({ portal }) => {
    const { appInfo, portalHostname } = portal || {};
    const { appId } = appInfo || {};
    const portalUrl =
      portalHostname === 'www.arcgis.com'
        ? null
        : `https://${portalHostname}/sharing/rest`;
    if (appId && portalHostname) {
      const clientId = appId;
      const {
        authProps: { redirectUri, popup }
      } = accountManagerState.status || {};
      const originRoute = window.location.href;

      if (redirectUri && popup !== undefined) {
        //set localstorage status
        beginStatusStorage(
          manager,
          { clientId, redirectUri, portalUrl, popup },
          originRoute
        );
        //begin login
        loginOAuth2(
          manager,
          { clientId, redirectUri, portalUrl, popup },
          setAccountManagerState
        );
      } else {
        console.error(
          `Cannot restore account. Missing redirectUri and popup in accountManagerState.status: ${
            accountManagerState.status
          }`
        );
      }
    } else {
      console.error(
        `Cannot restore account. Missing clientId and portalUrl in account portal: ${portal}`
      );
    }
  };

  /** Refresh Account: UserSession.refreshSession [https://esri.github.io/arcgis-rest-js/api/auth/UserSession/#refreshSession] */
  const refreshAccount = async ({ session, key, ...sessionState }) => {
    console.log(sessionState);
    try {
      if (!session) throw Error('Missing account session.');
      if (!key) throw Error('Missing account key.');

      const refresh = await session.refreshSession();
      const sSession = refresh ? refresh.serialize() : undefined;
      refreshAccountStorage(manager, { key, session: sSession });
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
    [accountManagerState, manager]
  );

  /** Check token status */
  const verifyToken = useCallback(async ({ session, token, key }) => {
    if (session && token) {
      try {
        const { portal } = session || {};
        const result = session.getToken(portal);
        if (result) return true;
        return false;
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
    async () => {
      Object.entries(accountManagerState.accounts).map(
        async ([key, account]) => {
          const { session, token } = account || {};

          if (session && token) {
            const message = await logoutOAuth2(account);
            const status = JSON.stringify(message);
            console.log(`Revoke token status for account ${key}: ${status}`);

            //Update localStorage/ state
            logoutAccountStorage(manager, account);
          }
          return account;
        }
      );
      const accountManager = getAccountManagerStorage(manager);
      setAccountManagerState(accountManager);
    },
    [accountManagerState]
  );

  /** Remove all accounts */
  const removeAllAccounts = useCallback(
    async () => {
      Object.entries(accountManagerState.accounts).map(
        async ([key, account]) => {
          const { session, token } = account || {};

          //Revoke token
          if (session && token) {
            const message = await logoutOAuth2(account);
            const status = JSON.stringify(message);
            console.log(`Revoke token status for account ${key}: ${status}`);
          }
          //Update localStorage/ state
          removeAccountStorage(manager, account);

          return {};
        }
      );
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
      const invalid = {
        warning: 'Invalid account',
        account: account,
        accountManagerState: accountManagerState
      };
      console.warn(invalid);
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
