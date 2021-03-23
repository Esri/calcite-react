import { UserSession, fetchToken } from '@esri/arcgis-rest-auth';
import { getSelf } from '@esri/arcgis-rest-portal';
import { request } from '@esri/arcgis-rest-request';

import {
  addAccountStorage,
  getAccountManagerStorage
} from './accountManagerStorageUtils';

//** RestJS */
/** Begin OAuth  */
export const beginOAuthSignIn = async (
  manager,
  { clientId, redirectUri, portalUrl, popup, duration },
  setAccountManagerState
) => {
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
        duration
      });
      const account = await createAccountObject({ dSession, portal, clientId });

      addAccountStorage(manager, account);
      const accountManager = getAccountManagerStorage(manager);
      setAccountManagerState(accountManager);
    } catch (e) {
      console.error(`Error getting User Session (beginOAuth). ${e}`);
    }
  } else {
    try {
      UserSession.beginOAuth2({
        // register an app of your own to create a unique clientId
        clientId,
        redirectUri,
        portal,
        popup
      });
    } catch (e) {
      console.error(`Error getting User Session (beginOAuth). ${e}`);
    }
  }
};

/** Complete OAuth  */
export const completeOAuthSignIn = async ({
  clientId,
  portalUrl,
  redirectUri,
  popup
}) => {
  try {
    const portal = portalUrl
      ? portalUrl
      : 'https://www.arcgis.com/sharing/rest';
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
    console.error(
      `Error getting User Session (completeOAuth). Error reading property may result from app redirecting before operation can read token hash in url. ${e}`
    );
    return null;
  }
};

/** Complete auth and return account with serialized portal and session  */
export const completeAuth = async options => {
  const account = await completeOAuthSignIn(options);

  if (account) {
    //Set state
    return account;
  } else {
    return null;
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
  } catch (e) {
    console.error(`Error retrieving portal item. ${e}`);
    return null;
  }
};

//** Login */
export const loginOAuth2 = async (manager, options, setAccountManagerState) => {
  options.duration = 5;

  beginOAuthSignIn(manager, options, setAccountManagerState);
};

//** Logout */
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
  console.log(dSession);
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

    //store images to user?

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
