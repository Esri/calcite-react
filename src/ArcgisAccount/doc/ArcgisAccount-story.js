import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import GuideExample from '../../../stories/GuideExample';
import doc from './ArcgisAccount.md';

import ArcgisAccount, { ArcgisAccountMenuItem } from '../';

import TopNav, {
  TopNavBrand,
  TopNavTitle,
  TopNavList,
  TopNavLink,
  TopNavActionsList
} from '../../TopNav';
import EsriLogo from '../../../stories/images/ESRI_Logo_Black.svg';

import user from './user.json';

storiesOf('ArcGIS Account Control', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <TopNav>
          <TopNavBrand href="#" src={EsriLogo} />
          <TopNavTitle href="#">ArcGIS for Developers</TopNavTitle>
          <TopNavList>
            <TopNavLink href="#" active>
              Plans
            </TopNavLink>
            <TopNavLink href="#">Community</TopNavLink>
            <TopNavLink href="#">Docs</TopNavLink>
          </TopNavList>
          <TopNavActionsList style={{ padding: 0 }}>
            <ArcgisAccount
              user={user}
              onRequestSwitchAccount={action('switch account clicked')}
              onRequestSignOut={action('sign out clicked')}
            >
              <ArcgisAccountMenuItem
                onClick={action('Profile & Settings clicked')}
              >
                Profile & Settings
              </ArcgisAccountMenuItem>
              <ArcgisAccountMenuItem onClick={action('My Esri clicked')}>
                My Esri
              </ArcgisAccountMenuItem>
              <ArcgisAccountMenuItem onClick={action('Training clicked')}>
                Training
              </ArcgisAccountMenuItem>
              <ArcgisAccountMenuItem
                onClick={action('Community & Forums clicked')}
              >
                Community & Forums
              </ArcgisAccountMenuItem>
              <ArcgisAccountMenuItem onClick={action('ArcGIS Online clicked')}>
                ArcGIS Online
              </ArcgisAccountMenuItem>
            </ArcgisAccount>
          </TopNavActionsList>
        </TopNav>
      </GuideExample>
    </div>
  ))
);
