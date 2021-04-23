import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  beginLogin,
  completeLogin,
  logout,
  refresh,
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

const useAccountManager = (
  options = {
    clientId: null,
    redirectUri: null,
    portalUrl: 'https://www.arcgis.com/sharing',
    popup: false,
    params: { force_login: false }
  },
  name = 'arcgis-account-manager'
) => {
  const [managerName] = useState(name);
  const [managerOptions] = useState(options);

  const { accounts, status, active, order } = getAccountManagerStorage(
    managerName
  );
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
      if (loading) {
        const completeAddAccount = async () => {
          const account = await completeLogin(authProps);
          if (account && account.key) {
            addAccountStorage(managerName, account);
          }
          //Update localStorage/ state
          completeStatusStorage(managerName);
          const accountManager = getAccountManagerStorage(managerName);
          setAccountManagerState(accountManager);
        };

        completeAddAccount();
      }
    },
    [managerName, status]
  );

  /** Add Account */
  const addAccount = useCallback(
    (options = null, setActive = true, type = 'OAuth2') => {
      // saving window.location.href (query params, etc) as originRoute
      const originRoute = window.location.href;

      const { clientId, redirectUri, portalUrl, popup, params } = options
        ? options || {}
        : managerOptions || {};

      //set localstorage status
      beginStatusStorage(
        managerName,
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
      beginLogin(
        managerName,
        {
          clientId,
          redirectUri,
          portalUrl,
          popup,
          params
        },
        setAccountManagerState,
        type
      );
    },
    [managerOptions, managerName]
  );

  /** Logout Account: Remove token and session from user auth object and attempt revoke token*/
  const logoutAccount = useCallback(
    async (account = null) => {
      const { session, token, key } = account || {};
      const valid = validAccount(account);

      if (session && token && valid) {
        const response = await logout(account);
        const status = JSON.stringify(response);
        console.log(`Revoke token status: ${status}`);

        //Update localStorage/ state
        logoutAccountStorage(managerName, account);
        const accountManager = getAccountManagerStorage(managerName);
        setAccountManagerState(accountManager);
      } else {
        console.error(
          `Invalid account object given to logoutAccount. Required fields: session/token/key. Fields received: {session: ${session}, token: ${token}, key: ${key}}`
        );
      }
    },
    [accountManagerState, managerName]
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
          const response = await logout(account);
          const status = JSON.stringify(response);
          console.log(`Revoke token status: ${status}`);
        }

        //Update localStorage/ state
        removeAccountStorage(managerName, account);
        const accountManager = getAccountManagerStorage(managerName);
        setAccountManagerState(accountManager);
      } else {
        console.error(
          `Invalid account object given to removeAccount. Required fields: session/key. Fields received: {session: ${session}, key: ${key}}`
        );
      }
    },
    [accountManagerState, managerName]
  );

  /** Restore Account: Log in to an existing account that is logged out */
  const restoreAccount = async (account = null) => {
    // Get type from account
    const { portal } = account || {};
    const { appInfo, portalHostname, user } = portal || {};
    const { appId } = appInfo || {};
    const { username } = user || {};

    if (appId && portalHostname) {
      const portalUrl = `https://${portalHostname}/sharing`;
      const clientId = appId;
      const { authProps } = accountManagerState.status || {};
      const { redirectUri, popup } = authProps || { popup: false };
      const originRoute = window.location.href;

      if (redirectUri) {
        //set localstorage status
        beginStatusStorage(
          managerName,
          { clientId, redirectUri, portalUrl, popup },
          originRoute
        );
        //begin login
        beginLogin(
          managerName,
          {
            clientId,
            redirectUri,
            portalUrl,
            popup,
            params: { force_login: true, username }
          },
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

  /** Refresh Account */
  const refreshAccount = async (account = null) => {
    const { portal } = account || {};
    const response = refresh(account);

    if (response.success && response.session) {
      refreshAccountStorage(managerName, {
        key: account.key,
        session: response.session
      });
    } else {
      if (portal) {
        const { appInfo, portalHostname, user } = portal || {};
        const { appId } = appInfo || {};
        const { username } = user || {};

        if (appId && portalHostname) {
          const portalUrl = `https://${portalHostname}/sharing`;
          const clientId = appId;
          const { authProps } = accountManagerState.status || {};
          const { redirectUri, popup } = authProps || { popup: false };
          const originRoute = window.location.href;

          if (redirectUri) {
            //set localstorage status
            beginStatusStorage(
              managerName,
              { clientId, redirectUri, portalUrl, popup },
              originRoute
            );
            //begin login
            beginLogin(
              managerName,
              {
                clientId,
                redirectUri,
                portalUrl,
                popup,
                params: { force_login: true, username }
              },
              setAccountManagerState
            );
          }
        }
      }
      console.error(
        `Cannot refresh session for account. Refresh operation failed: ${
          response.error
        }. Attempt to re-authenticate failed due to missing properties in account portal item.`
      );
    }
  };

  /** Set the active account */
  const switchActiveAccount = useCallback(
    (account = null) => {
      if (validAccount(account)) {
        switchActiveStorage(managerName, account);
        const accountManager = getAccountManagerStorage(managerName);
        setAccountManagerState(accountManager);
      }
    },
    [accountManagerState, managerName]
  );

  /** Check token status */
  const verifyToken = useCallback(async ({ session, token }) => {
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
            const message = await logout(account);
            const status = JSON.stringify(message);
            console.log(`Revoke token status for account ${key}: ${status}`);

            //Update localStorage/ state
            logoutAccountStorage(managerName, account);
          }
          return account;
        }
      );
      const accountManager = getAccountManagerStorage(managerName);
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
            const message = await logout(account);
            const status = JSON.stringify(message);
            console.log(`Revoke token status for account ${key}: ${status}`);
          }
          //Update localStorage/ state
          removeAccountStorage(managerName, account);

          return {};
        }
      );
      const accountManager = getAccountManagerStorage(managerName);
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
  /** Options for starting OAuth to include { clientId, redirectUri, portalUrl, popup, params }. Can also be set in addAccount function.  */
  options: PropTypes.object
};

useAccountManager.defaultProps = {
  accountManagerName: 'arcgis-account-manager',
  options: {
    clientId: null,
    redirectUri: null,
    portalUrl: 'https://www.arcgis.com/sharing',
    popup: false,
    params: { force_login: false }
  }
};

useAccountManager.displayName = 'useAccountManager';

export default useAccountManager;
