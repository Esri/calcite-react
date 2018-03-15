import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './TopNav.md';
import EsriLogo from '../../../stories/images/ESRI_Logo_Black.svg';
import Button from '../../Button';

import TopNav, {
  TopNavBrand,
  TopNavTitle,
  TopNavList,
  TopNavLink,
  TopNavActionsList
} from '../';

storiesOf('TopNav', module).add(
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
          <TopNavActionsList>
            <TopNavLink href="#">Sign In</TopNavLink>
            <Button clear>Sign Up</Button>
          </TopNavActionsList>
        </TopNav>
      </GuideExample>
    </div>
  ))
);
