import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './SideNav.md';
import SideNav, { SideNavTitle, SideNavLink } from '../';

storiesOf('SideNav', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <SideNav>
          <SideNavTitle>Sidenav Group</SideNavTitle>
          <nav>
            <SideNavLink>Agricultural</SideNavLink>
            <SideNavLink>Transition</SideNavLink>
            <SideNavLink>Perpetual</SideNavLink>
            <SideNavLink>Cultural</SideNavLink>
          </nav>
        </SideNav>
      </GuideExample>
    </div>
  ))
);
