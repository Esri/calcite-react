import React from 'react';

import useAccountManager from '../useAccountManager';
import Button from '../../Button';
import ArcgisAccount, { ArcgisAccountMenuItem } from '../';
import TopNav, {
  TopNavActionsList,
  TopNavBrand,
  TopNavTitle,
  TopNavList
} from '../../TopNav';

import EsriLogo from '../../../docz/images/ESRI_Logo_Black.svg';

const AccountManagerExample = () => {
  const options = {
    clientId: 'I2YAIyLxcjzok07Y',
    redirectUri: `${window.location.origin}/arcgis-account`,
    popup: true
  };

  const { accountManagerState, ...accountManagerProps } = useAccountManager(
    options
  );
  const { addAccount, removeAccount } = accountManagerProps || {};
  const accountManagerJson = {
    active: accountManagerState.active,
    accounts: accountManagerState.active
      ? {
          [Object.keys(accountManagerState.accounts)[0]]: {
            user: '...',
            portal: '...',
            session: '...',
            token: '...'
          }
        }
      : undefined
  };
  const accountManagerString = JSON.stringify(accountManagerJson, null, 4);
  const { active, accounts } = accountManagerState || {};

  return (
    <>
      {!active && <Button onClick={() => addAccount()}> Add Account </Button>}

      {active && (
        <TopNav>
          <TopNavBrand href="#" src={EsriLogo} />
          <TopNavTitle href="#">ArcGIS for Developers</TopNavTitle>
          <TopNavList />
          <TopNavActionsList style={{ padding: 0 }}>
            <ArcgisAccount
              user={accounts[active].user}
              portal={accounts[active].portal}
              onRequestSwitchAccount={() =>
                console.log('switch account clicked')
              }
              onRequestSignOut={() => removeAccount(active)}
            >
              <ArcgisAccountMenuItem
                onClick={() => console.log('Profile & Settings clicked')}
              >
                Profile & Settings
              </ArcgisAccountMenuItem>
              <ArcgisAccountMenuItem
                onClick={() => console.log('My Esri clicked')}
              >
                My Esri
              </ArcgisAccountMenuItem>
              <ArcgisAccountMenuItem
                onClick={() => console.log('Training clicked')}
              >
                Training
              </ArcgisAccountMenuItem>
              <ArcgisAccountMenuItem
                onClick={() => console.log('Community & Forums clicked')}
              >
                Community & Forums
              </ArcgisAccountMenuItem>
              <ArcgisAccountMenuItem
                onClick={() => console.log('ArcGIS Online clicked')}
              >
                ArcGIS Online
              </ArcgisAccountMenuItem>
            </ArcgisAccount>
          </TopNavActionsList>
        </TopNav>
      )}
      <p>Account Manager State:</p>
      <pre>{accountManagerString}</pre>
    </>
  );
};

export default AccountManagerExample;
