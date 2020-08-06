import { UserSession } from '@esri/arcgis-rest-auth';
import { getSelf } from '@esri/arcgis-rest-portal';
import { request } from '@esri/arcgis-rest-request';

import {
  addAccountStorage,
  getAccountManagerStorage
} from './accountManagerStorageUtils';

//** RestJS */
/** Begin OAuth  */
export const beginOAuthSignIn = async ({
  clientId,
  redirectUri,
  portalUrl,
  popup,
  name,
  setAccountManagerState
}) => {
  if (popup) {
    try {
      const portal = portalUrl
        ? portalUrl
        : 'https://www.arcgis.com/sharing/rest';
      UserSession.beginOAuth2({
        // register an app of your own to create a unique clientId
        clientId: clientId,
        redirectUri: redirectUri,
        portal: portal,
        popup: popup
      }).then(dSession => {
        createAccountObject({ dSession, portal, clientId }).then(account => {
          const key = createAccountKey({ account });
          addAccountStorage(name, key, account);
          const accountManager = getAccountManagerStorage(name);
          setAccountManagerState(accountManager);
        });
      });
    } catch (err) {
      console.error('Error getting User Session (beginOAuth).', err);
    }
  } else {
    try {
      const portal = portalUrl
        ? portalUrl
        : 'https://www.arcgis.com/sharing/rest';
      UserSession.beginOAuth2({
        // register an app of your own to create a unique clientId
        clientId: clientId,
        redirectUri: redirectUri,
        portal: portal,
        popup: popup
      });
    } catch (err) {
      console.error('Error getting User Session (beginOAuth).', err);
    }
  }
};

/** Complete OAuth  */
export const completeOAuthSignIn = async ({ clientId, portalUrl, popup }) => {
  try {
    const portal = portalUrl
      ? portalUrl
      : 'https://www.arcgis.com/sharing/rest';
    const dSession = UserSession.completeOAuth2({
      clientId: clientId,
      portal: portal,
      popup: popup
    });

    const account = await createAccountObject({ dSession, portal, clientId });

    // Clear query string token from URL
    window.history.replaceState({}, document.title, window.location.pathname);
    return account;
  } catch (err) {
    console.error('Error getting User Session (completeOAuth).');
    return null;
  }
};

/** Complete auth and return account with serialized portal and session  */
export const completeAuth = async ({ authProps }) => {
  const { clientId, portalUrl, popup } = authProps || {};

  const account = await completeOAuthSignIn({
    clientId,
    portalUrl,
    popup
  });

  if (account) {
    //Create key
    const key = createAccountKey({ account });
    //Set state

    return { key: key, user: account };
  } else {
    return { key: undefined, user: undefined };
  }
};

//** Get portal object */
export const getPortal = async ({ portalUrl, session }) => {
  try {
    const portalObject = await getSelf({
      portal: portalUrl,
      authentication: session
    });
    return portalObject;
  } catch (err) {
    console.error('Error getting portal item.', err);
    return null;
  }
};

//** Login */
export const loginOAuth2 = async ({
  clientId,
  redirectUri,
  portalUrl,
  popup,
  name,
  setAccountManagerState
}) => {
  beginOAuthSignIn({
    clientId,
    redirectUri,
    portalUrl,
    popup,
    name,
    setAccountManagerState
  });
};

//** Logout */
export const logoutOAuth2 = ({ url, clientId, token }) => {
  //** Formal Logout requires esri_auth cookie */
  //AGO
  //return `${portalUrl.origin}/home/pages/Account/manage_accounts.html#redirect_uri=${encodedRedirectUrl}&client_id=${params.clientId}&signout=true`
  //Enterprise
  //return `${portalUrl}/oauth2/signout?client_id=${params.clientId}&redirect_uri=${encodedRedirectUrl}`;

  //** Revoke Token (OAuth2): https://developers.arcgis.com/rest/users-groups-and-items/revoke-token.htm */
  //Build logout request
  if (!clientId || !token) {
    return { success: false, error: 'Empty client_id / token' };
  }
  const revokeTokenEndpoint = `${url}/oauth2/revokeToken`;
  const data = {
    client_id: clientId,
    auth_token: token
  };

  try {
    request(revokeTokenEndpoint, {
      params: data,
      httpMethod: 'POST'
    }).then(res => {
      return { success: res.success };
    });
  } catch (err) {
    return { success: false, error: err };
  }
};

//** Get Org Thumbnail */
export const getOrgThumbnail = props => {
  const { session, portal, token } = props || {};
  //org thumbnail (https://developers.arcgis.com/rest/users-groups-and-items/portal-self.htm)
  const thumbnail =
    portal && portal.thumbnail && session && session.portal && token
      ? `${session.portal}/portals/self/resources/${
          portal.thumbnail
        }?token=${token}`
      : undefined;
  const letters = portal && portal.name ? portal.name[0] : undefined;

  return thumbnail ? thumbnail : letters ? letters.toUpperCase() : '';
};

//** Get User Thumbnail */
export const getUserThumbnail = props => {
  const { session, user, token } = props || {};

  //user thumbnail (https://developers.arcgis.com/rest/users-groups-and-items/user.htm)
  const thumbnail =
    user && user.thumbnail && session && session.portal
      ? `${session.portal}/community/users/${session.username}/info/${
          user.thumbnail
        }?token=${token}`
      : undefined;

  const letters =
    user && user.firstName && user.lastName
      ? `${user.firstName[0] + user.lastName[0]}`
      : undefined;

  const letter = user && user.fullName ? user.fullName[0] : undefined;

  return thumbnail
    ? thumbnail
    : letters
    ? letters.toUpperCase()
    : letter
    ? letter.toUpperCase()
    : '';
};

const createAccountObject = async ({ dSession, portal, clientId }) => {
  dSession.clientId = dSession.clientId ? dSession.clientId : clientId;
  const token = dSession.token;
  const user = await dSession.getUser();
  const dPortal = await getPortal({ portalUrl: portal, session: dSession });

  return {
    session: dSession.serialize(),
    user: user,
    portal: JSON.stringify(dPortal),
    token: token
  };
};

const createAccountKey = ({ account }) => {
  try {
    const { user, portal } = account || {};
    const deserializedPortal = portal ? JSON.parse(portal) : {};
    const { username } = user || {};
    const { name } = deserializedPortal || {};
    const orgName = name ? name.replace(/\s+/g, '') : 'org';
    const key = username + '-' + orgName;
    return key;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
