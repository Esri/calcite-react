import { UserSession } from '@esri/arcgis-rest-auth';

export const getAccountManagerStorage = ({ name }) => {
  const sAccountManager = getLocalSerialized({ name });
  const { accounts, active, status } = sAccountManager || {};

  const dAccounts = deserializeUserAuthObjects({ accounts });
  const authObject = {
    accounts: dAccounts,
    active,
    status
  };
  return authObject;
};

export const addAccountStorage = ({ name, key, account }) => {
  const previous = getLocalSerialized({ name });
  const { accounts, active } = previous || {};
  const updateActive = active ? active : key;
  setLocal({
    state: {
      ...previous,
      accounts: { ...accounts, [key]: account },
      active: updateActive
    },
    name
  });
};

export const removeAccountStorage = ({ name, key }) => {
  const previous = getLocalSerialized({ name });

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
    name
  });
};

export const switchActiveStorage = ({ name, key }) => {
  const previous = getLocalSerialized({ name });
  setLocal({
    state: {
      ...previous,
      active: key
    },
    name
  });
};

export const completeStatusStorage = ({ name }) => {
  const previous = getLocalSerialized({ name });
  const { status } = previous || {};
  setLocal({
    state: {
      ...previous,
      status: { ...status, loading: false }
    },
    name
  });
};

export const beginStatusStorage = ({
  name,
  options: { clientId, redirectUri, portalUrl, popup }
}) => {
  const previous = getLocalSerialized({ name });

  setLocal({
    state: {
      ...previous,
      status: {
        loading: true,
        authProps: { clientId, redirectUri, portalUrl, popup }
      }
    },
    name
  });
};

export const logoutAccountStorage = ({ name, key }) => {
  const previous = getLocalSerialized({ name });
  const { accounts } = previous || {};
  const user = {
    ...accounts[key],
    session: undefined,
    token: undefined
  };

  setLocal({
    state: {
      ...previous,
      accounts: { ...accounts, [key]: user }
    },
    name
  });
};

export const refreshAccountStorage = ({ name, key, session }) => {
  const previous = getLocalSerialized({ name });
  const { accounts } = previous || {};
  setLocal({
    state: {
      ...previous,
      accounts: { ...accounts, [key]: { ...accounts[key], session } }
    },
    name
  });
};

//** State Management */

const setLocal = ({ state, name }) => {
  window.localStorage.setItem(name, JSON.stringify(state));
};

const getLocalSerialized = ({ name }) => {
  const accountManager = JSON.parse(window.localStorage.getItem(name));
  const { accounts, active, status } = accountManager || {};
  const authObject = {
    accounts,
    active,
    status
  };
  return authObject;
};

const deserializeUserAuthObjects = ({ accounts }) => {
  const dUsers = {};

  if (accounts) {
    for (const [key] of Object.entries(accounts)) {
      const deserializedSession = accounts[key].session
        ? UserSession.deserialize(accounts[key].session)
        : undefined;
      const deserializedPortal = accounts[key].portal
        ? JSON.parse(accounts[key].portal)
        : undefined;

      dUsers[key] = {};
      dUsers[key].user = accounts[key].user;
      dUsers[key].session = deserializedSession;
      dUsers[key].portal = deserializedPortal;
      dUsers[key].token = accounts[key].token;
    }
  }

  return dUsers;
};
