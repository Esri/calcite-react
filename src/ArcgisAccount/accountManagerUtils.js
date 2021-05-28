import { UserSession } from '@esri/arcgis-rest-auth';
import { getSelf } from '@esri/arcgis-rest-portal';
import { request } from '@esri/arcgis-rest-request';

import {
  addAccountStorage,
  getAccountManagerStorage
} from './accountManagerStorageUtils';

//** Login Workflow*/
//** ============= */

//** Login */
export const beginLogin = async (
  managerName,
  options,
  setAccountManagerState,
  type = 'OAuth2'
) => {
  if (type === 'OAuth2') {
    loginOAuth2(managerName, options, setAccountManagerState);
  }
};

//** Login: Begin OAuth */
export const loginOAuth2 = async (
  managerName,
  { clientId, redirectUri, portalUrl, popup, params },
  setAccountManagerState
) => {
  // params is an undocumented IOAuth2Option:
  // https://github.com/Esri/arcgis-rest-js/blob/master/packages/arcgis-rest-auth/src/UserSession.ts#L303
  // https://github.com/Esri/arcgis-rest-js/blob/master/packages/arcgis-rest-request/src/utils/encode-query-string.ts#L28

  const portal = portalUrl ? portalUrl : 'https://www.arcgis.com/sharing/rest';
  const url = new URL(portal);

  if (!url.pathname) {
    const resource = new URL(
      'https://developers.arcgis.com/rest/users-groups-and-items/root.htm'
    );
    const format =
      'https://<webadaptorhost>.<domain>.com/<webadaptorname>/sharing/rest';
    console.warn(
      `No URL path given may cause 400 error. If using Enterprise portal verify url format: ${format}. View resource for formatting url: ${resource}`
    );
  }

  if (popup) {
    try {
      const dSession = await UserSession.beginOAuth2({
        // register an app of your own to create a unique clientId
        clientId,
        redirectUri,
        portal,
        popup,
        params
      });

      const account = await createAccountObject({ dSession, portal, clientId });
      addAccountStorage(managerName, account);

      const accountManager = getAccountManagerStorage(managerName);
      setAccountManagerState(accountManager);

      console.log('onAccountAdded');
    } catch (e) {
      console.log('onAccountNOTAdded');
      //error.code === 'access_denied'
      //error.name === 'ArcGISAuthError'
      //error.message === 'access_denied: The user denied your request.&state=
      console.warn({
        error: 'Error getting User Session (loginOAuth2).',
        ...e
      });
    }
  } else {
    try {
      UserSession.beginOAuth2({
        // register an app of your own to create a unique clientId
        clientId,
        redirectUri,
        portal,
        popup,
        params
      });
    } catch (e) {
      console.error(`Error getting User Session (loginOAuth2). ${e}`);
    }
  }
};

/** Complete auth and return account with serialized portal and session  */
export const completeLogin = async (options, type = 'OAuth2') => {
  if (type === 'OAuth2') {
    const response = await completeOAuth2(options);
    return response;
  }
};

/** Login: Complete OAuth2  */
export const completeOAuth2 = async ({
  clientId,
  portalUrl,
  redirectUri,
  popup
}) => {
  try {
    const portal = portalUrl ? portalUrl : 'https://www.arcgis.com/rest';
    const dSession = UserSession.completeOAuth2({
      clientId,
      portal,
      redirectUri,
      popup
    });

    const account = await createAccountObject({ dSession, portal, clientId });

    // Clear hash token from URL
    // Refactored by Alex Ela to use window.history.replaceState() instead of window.history.pushState()
    if (window.history.replaceState) {
      window.history.replaceState({}, '', window.location.pathname);
    } else {
      window.location.hash = '';
    }
    return account;
  } catch (e) {
    console.warn({
      error:
        'Error getting User Session (completeOAuth). Error reading property may result from app redirecting before operation can read token hash in url.',
      ...e
    });
    return e;
  }
};

//** Logout Workflow*/
//** ============= */

//** Logout */
export const logout = async (account, type = 'OAuth2') => {
  // Get type from account
  if (type === 'OAuth2') {
    const response = await logoutOAuth2(account);
    return response;
  }
};

//** Logout: OAuth2 */
export const logoutOAuth2 = async ({ session, token }) => {
  const url = session ? session.portal : null;
  const clientId = session ? session.clientId : null;
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
    const res = await request(revokeTokenEndpoint, {
      params: data,
      httpMethod: 'POST'
    });
    const success = res ? res.success : undefined;
    return { success };
  } catch (e) {
    return { success: false, error: e };
  }
};

//** Refresh Workflow*/
export const refresh = async (account, type = 'OAuth2') => {
  if (type === 'OAuth2') {
    const response = await refreshOAuth2(account);
    return response;
  }
};

export const refreshOAuth2 = async ({ session, key } = {}) => {
  //UserSession.refreshSession [https://esri.github.io/arcgis-rest-js/api/auth/UserSession/#refreshSession]
  // refresh workflow for server oauth sessions (view authorize and exchangeAuthorizationCode)
  // No refresh for client side: https://github.com/Esri/arcgis-rest-js/issues/627#issuecomment-535644535

  if (!key) {
    return { success: false, error: 'Empty account key.' };
  }

  if (session && session.refreshToken) {
    try {
      const refresh = await session.refreshSession();
      const sSession = refresh ? refresh.serialize() : undefined;
      return { success: true, session: sSession };
    } catch (e) {
      return {
        success: false,
        error: `Session.refreshSession failed for account ${key}. ${e}`
      };
    }
  }

  return {
    success: false,
    error: `Cannot refresh account session for account ${key}. Missing session/sessionToken.`
  };
};

//** Helpers */
//** ======= */

//** Get portal object */
export const getPortal = async ({ portalUrl, session }) => {
  try {
    const portalObject = await getSelf({
      portal: portalUrl,
      authentication: session
    });
    return portalObject;
  } catch (e) {
    console.error(`Error retrieving portal item. ${e}`);
    return null;
  }
};

//** Get Org Thumbnail */
export const getOrgThumbnail = ({
  session: { portal },
  portal: { thumbnail, name },
  token,
  orgImage
}) => {
  //org thumbnail (https://developers.arcgis.com/rest/users-groups-and-items/portal-self.htm)
  let orgThumbnail = {
    url: undefined,
    letters: undefined
  };
  orgThumbnail.url =
    thumbnail && portal && token
      ? `${portal}/portals/self/resources/${thumbnail}?token=${token}`
      : undefined;
  orgThumbnail.letters = name ? name[0].toUpperCase() : '!';

  if (orgImage) {
    orgThumbnail.image = orgImage;
  } else if (orgThumbnail.url) {
    try {
      const image = new Image();
      image.src = orgThumbnail.url;
      orgThumbnail.image = image;
    } catch (e) {
      console.error(`Error creating js Image(). ${e}`);
    }
  }

  return orgThumbnail;
};

//** Get User Thumbnail */
export const getUserThumbnail = ({
  session: { portal, username },
  user: { thumbnail, firstName, lastName, fullName },
  token,
  userImage
}) => {
  //user thumbnail (https://developers.arcgis.com/rest/users-groups-and-items/user.htm)
  let userThumbnail = {
    url: undefined,
    letters: undefined
  };
  userThumbnail.url =
    thumbnail && portal && username && token
      ? `${portal}/community/users/${username}/info/${thumbnail}?token=${token}`
      : undefined;

  userThumbnail.letters =
    firstName && lastName
      ? `${firstName[0] + lastName[0]}`.toUpperCase()
      : fullName
      ? fullName[0].toUpperCase()
      : '!';

  if (userImage) {
    userThumbnail.image = userImage;
  } else if (userThumbnail.url) {
    try {
      const image = new Image();
      image.src = userThumbnail.url;
      userThumbnail.image = image;
    } catch (e) {
      console.error(`Error creating js Image(). ${e}`);
    }
  }

  return userThumbnail;
};

const createAccountObject = async ({ dSession, portal, clientId }) => {
  try {
    dSession.clientId = dSession.clientId ? dSession.clientId : clientId;
    const token = dSession.token;
    const user = await dSession.getUser();
    const dPortal = await getPortal({ portalUrl: portal, session: dSession });
    const key = createAccountKey({
      session: dSession,
      user,
      portal: dPortal,
      token
    });

    return {
      user,
      portal: JSON.stringify(dPortal),
      session: dSession.serialize(),
      token: token,
      key
    };
  } catch (e) {
    throw new Error(
      `Could not create account object. This could be due to UserSession.getUser(). ${e}`
    );
  }
};

const createAccountKey = ({ user, portal }) => {
  try {
    const { username } = user || {};
    const { name } = portal || {};
    const orgName = name ? name.replace(/\s+/g, '') : 'org';
    const key = username + '-' + orgName;
    return key;
  } catch (e) {
    throw new Error(`Error creating account key. ${e}`);
  }
};
