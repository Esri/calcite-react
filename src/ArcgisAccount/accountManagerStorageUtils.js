import { UserSession } from '@esri/arcgis-rest-auth';

export const getAccountManagerStorage = manager => {
  const { accounts, active, status } = getLocalSerialized(manager) || {};

  const dAccounts = deserializeUserAuthObjects(accounts);
  const authObject = {
    accounts: dAccounts,
    active,
    status
  };
  return authObject;
};

export const addAccountStorage = (manager, account) => {
  const previous = getLocalSerialized(manager);
  const { accounts, active } = previous || {};
  const updateActive = active ? active : account.key;
  setLocal({
    state: {
      ...previous,
      accounts: { ...accounts, [account.key]: account },
      active: updateActive
    },
    manager
  });
};

export const removeAccountStorage = (manager, { key }) => {
  const previous = getLocalSerialized(manager);

  let active = previous.active;
  if (active === key) {
    //update active
    for (const aKey in previous.accounts) {
      if (aKey !== key) {
        active = aKey;
        break;
      }
    }
  }

  delete previous.accounts[key];
  setLocal({
    state: {
      ...previous,
      active: active === key ? undefined : active
    },
    manager
  });
};

export const switchActiveStorage = (manager, { key }) => {
  const previous = getLocalSerialized(manager);
  setLocal({
    state: {
      ...previous,
      active: key
    },
    manager
  });
};

export const completeStatusStorage = manager => {
  const previous = getLocalSerialized(manager);
  const { status } = previous || {};
  setLocal({
    state: {
      ...previous,
      status: { ...status, loading: false }
    },
    manager
  });
};

export const beginStatusStorage = (
  manager,
  { clientId, redirectUri, portalUrl, popup },
  originRoute
) => {
  const previous = getLocalSerialized(manager);

  setLocal({
    state: {
      ...previous,
      status: {
        loading: true,
        authProps: { clientId, redirectUri, portalUrl, popup },
        originRoute
      }
    },
    manager
  });
};

export const logoutAccountStorage = (manager, { key }) => {
  const previous = getLocalSerialized(manager);
  const { accounts } = previous || {};

  const user = {
    ...accounts[key],
    token: null,
    session: null
  };

  setLocal({
    state: {
      ...previous,
      accounts: { ...accounts, [key]: user }
    },
    manager
  });
};

export const refreshAccountStorage = (manager, { key, session }) => {
  const previous = getLocalSerialized(manager);
  const { accounts } = previous || {};
  setLocal({
    state: {
      ...previous,
      accounts: { ...accounts, [key]: { ...accounts[key], session } }
    },
    manager
  });
};

//** State Management */

const setLocal = ({ state, manager }) => {
  window.localStorage.setItem(manager, JSON.stringify(state));
};

const getLocalSerialized = manager => {
  const accountManager = JSON.parse(window.localStorage.getItem(manager));
  const { accounts, active, status } = accountManager || {};
  const authObject = {
    accounts,
    active,
    status
  };
  return authObject;
};

const deserializeUserAuthObjects = accounts => {
  const dUsers = {};

  if (accounts) {
    for (const [key] of Object.entries(accounts)) {
      const deserializedSession = accounts[key].session
        ? UserSession.deserialize(accounts[key].session)
        : undefined;
      const deserializedPortal = accounts[key].portal
        ? JSON.parse(accounts[key].portal)
        : undefined;

      dUsers[key] = {
        ...accounts[key],
        portal: deserializedPortal,
        session: deserializedSession
      };
    }
  }

  return dUsers;
};
