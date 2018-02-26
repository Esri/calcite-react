import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import CalciteTheme from '../../../src/theme/CalciteTheme';
import GuideExample from '../../../stories/GuideExample';
import EsriLogo from '../../../stories/images/ESRI_Logo_Black.svg';
import Button from '../Button';

import TopNav, {
  TopNavBrand,
  TopNavTitle,
  TopNavList,
  TopNavLink,
  TopNavActionsList
} from './';

const doc = `TopNav doc is TBD`;

storiesOf('TopNav', module).add(
  'Default',
  withInfo(doc)(() => (
    <ThemeProvider theme={CalciteTheme}>
      <Fragment>
        <GuideExample>
          <TopNav>
            <TopNavBrand src={EsriLogo} />
            <TopNavTitle href="#">ArcGIS for Developers</TopNavTitle>
            <TopNavList>
              <TopNavLink href="#">Plans</TopNavLink>
              <TopNavLink href="#">Community</TopNavLink>
              <TopNavLink href="#">Docs</TopNavLink>
            </TopNavList>
            <TopNavActionsList>
              <TopNavLink href="#">Sign In</TopNavLink>
              <Button clear>Sign Up</Button>
            </TopNavActionsList>
          </TopNav>
        </GuideExample>
      </Fragment>
    </ThemeProvider>
  ))
);
