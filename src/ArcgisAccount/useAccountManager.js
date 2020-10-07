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

  /** Complete Login: If applicable */
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
    props => {
      const select = props ? props : credentials;
      const { clientId, redirectUri, portalUrl, popup } = select || {};

      //set localstorage status
      beginStatusStorage(manager, select);
      //begin login
      loginOAuth2({
        clientId,
        redirectUri,
        portalUrl,
        popup,
        manager,
        setAccountManagerState
      });
    },
    [credentials, manager]
  );

  /** Logout Account: Remove token and session from user auth object and attempt revoke token*/
  const logoutAccount = useCallback(
    key => {
      const { accounts } = accountManagerState || {};
      if (accounts[key]) {
        const { session, token } = accounts[key];
        const portalUrl = session ? session.portal : null;
        const clientId = session ? session.clientId : null;
        logoutOAuth2({
          url: portalUrl,
          clientId: clientId,
          token: token
        });

        //Update localStorage/ state
        logoutAccountStorage(manager, key);
        const accountManager = getAccountManagerStorage(manager);
        setAccountManagerState(accountManager);
      }
    },
    [accountManagerState, manager]
  );

  /** Remove Account: Remove account from local storage and attempt revoke token*/
  const removeAccount = useCallback(
    key => {
      const { accounts } = accountManagerState || {};

      if (accounts && accounts[key]) {
        if (accounts[key].token) {
          const { session, token } = accounts[key];
          const portalUrl = session ? session.portal : null;
          const clientId = session ? session.clientId : null;
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
      }
    },
    [accountManagerState, manager]
  );

  /** Restore Account: Log in to an existing account that is logged out */
  const restoreAccount = props => {
    const select = props ? props : credentials;
    const { clientId, redirectUri, portalUrl, popup } = select || {};

    //set localstorage status
    beginStatusStorage(manager, select);
    //begin login
    loginOAuth2({ clientId, redirectUri, portalUrl, popup });
  };

  /** Refresh Account: UserSession.refreshSession [https://esri.github.io/arcgis-rest-js/api/auth/UserSession/#refreshSession] */
  const refreshAccount = key => {
    const { accounts } = accountManagerState || {};
    const { session } = accounts[key];
    session.refreshSession().then(session => {
      const sSession = session.serialize();
      refreshAccountStorage(manager, key, sSession);
    });
  };

  //** Set the active account */
  const switchActiveAccount = useCallback(
    key => {
      switchActiveStorage(manager, key);
      const accountManager = getAccountManagerStorage(manager);
      setAccountManagerState(accountManager);
    },
    [manager]
  );

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
