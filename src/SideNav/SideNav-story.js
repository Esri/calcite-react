import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import CalciteTheme from '../../src/theme/CalciteTheme';
import GuideExample from '../../stories/GuideExample';

import SideNav, { SideNavTitle, SideNavLink } from './';

const defaultDoc = 'doc tbd';

storiesOf('SideNav', module).add(
  'Default',
  withInfo(defaultDoc)(() => (
    <ThemeProvider theme={CalciteTheme}>
      <Fragment>
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
      </Fragment>
    </ThemeProvider>
  ))
);
