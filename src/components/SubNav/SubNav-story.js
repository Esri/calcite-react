import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import CalciteTheme from '../../../src/theme/CalciteTheme';
import GuideExample from '../../../stories/GuideExample';

import SubNav, { SubNavTitle, SubNavList, SubNavLink } from './';

const doc = `SubNav doc is TBD`;

storiesOf('SubNav', module).add(
  'Default',
  withInfo(doc)(() => (
    <ThemeProvider theme={CalciteTheme}>
      <Fragment>
        <GuideExample>
          <SubNav>
            <SubNavTitle href="#">Fields</SubNavTitle>
            <SubNavList>
              <SubNavLink href="#">Glens</SubNavLink>
              <SubNavLink href="#">Dales</SubNavLink>
              <SubNavLink href="#">Meadows</SubNavLink>
            </SubNavList>
          </SubNav>
        </GuideExample>
        <GuideExample label="blue">
          <SubNav blue>
            <SubNavTitle blue href="#">
              Fields
            </SubNavTitle>
            <SubNavList blue>
              <SubNavLink blue active href="#">
                Glens
              </SubNavLink>
              <SubNavLink blue href="#">
                Dales
              </SubNavLink>
              <SubNavLink blue href="#">
                Meadows
              </SubNavLink>
            </SubNavList>
          </SubNav>
        </GuideExample>
      </Fragment>
    </ThemeProvider>
  ))
);
