import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  completeAuth,
  loginOAuth2,
  logoutOAuth2,
  userThumbnail,
  orgThumbnail
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

const useAccountManager = props => {
  const { accountManagerName, options } = props || {};
  const [name] = useState(
    accountManagerName ? accountManagerName : 'arcgis-account-manager'
  );
  const { accounts, status, active } = getAccountManagerStorage(name);
  const [accountManagerState, setAccountManagerState] = useState({
    active: active,
    accounts: accounts,
    status: status
  });
  const [authOptions] = useState(options);

  /** Complete Login: If applicable */
  useEffect(
    () => {
      if (!status || status.loading !== true) {
        return;
      }
      //complete login
      completeAuth({
        status
      }).then(account => {
        const { key, user } = account || {};
        if (key) {
          addAccountStorage(name, key, user);
        }

        //Update localStorage/ state
        completeStatusStorage(name);
        const accountManager = getAccountManagerStorage(name);
        setAccountManagerState(accountManager);
      });
    },
    [name, status]
  );

  /** Add Account */
  const addAccount = useCallback(
    options => {
      const selectOptions = options ? options : authOptions;
      const { clientId, redirectUri, portalUrl, popup } = selectOptions || {};

      //set localstorage status
      beginStatusStorage(name, options);
      //begin login
      loginOAuth2({ clientId, redirectUri, portalUrl, popup });
    },
    [authOptions, name]
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
        logoutAccountStorage(name, key);
        const accountManager = getAccountManagerStorage(name);
        setAccountManagerState(accountManager);
      }
    },
    [accountManagerState, name]
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
        removeAccountStorage(name, key);
        const accountManager = getAccountManagerStorage(name);
        setAccountManagerState(accountManager);
      }
    },
    [accountManagerState, name]
  );

  /** Restore Account: Log in to an existing account that is logged out */
  const restoreAccount = options => {
    const selectOptions = options ? options : authOptions;
    const { clientId, redirectUri, portalUrl, popup } = selectOptions || {};

    //set localstorage status
    beginStatusStorage(name, options);
    //begin login
    loginOAuth2({ clientId, redirectUri, portalUrl, popup });
  };

  /** Refresh Account: UserSession.refreshSession [https://esri.github.io/arcgis-rest-js/api/auth/UserSession/#refreshSession] */
  const refreshAccount = key => {
    const { accounts } = accountManagerState || {};
    const { session } = accounts[key];
    session.refreshSession().then(session => {
      const sSession = session.serialize();
      refreshAccountStorage(name, key, sSession);
    });
  };

  //** Set the active account */
  const switchActiveAccount = useCallback(
    key => {
      switchActiveStorage(name, key);
      const accountManager = getAccountManagerStorage(name);
      setAccountManagerState(accountManager);
    },
    [name]
  );

  return {
    accountManagerState,
    addAccount,
    logoutAccount,
    removeAccount,
    restoreAccount,
    refreshAccount,
    switchActiveAccount,
    userThumbnail,
    orgThumbnail
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
