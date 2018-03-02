import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import CalciteTheme from '../../src/theme/CalciteTheme';
import GuideExample from '../../stories/GuideExample';

import Menu, { MenuTitle, MenuItem } from './';

const defaultDoc = 'doc tbd';

storiesOf('Menu', module).add(
  'Default',
  withInfo(defaultDoc)(() => (
    <ThemeProvider theme={CalciteTheme}>
      <Fragment>
        <GuideExample>
          <Menu style={{ maxWidth: '280px' }}>
            <MenuTitle>Some Options</MenuTitle>
            <MenuItem>Option 1 that has a really long text.</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
            <MenuTitle>More Options</MenuTitle>
            <MenuItem>Option 4</MenuItem>
            <MenuItem>Option 5</MenuItem>
          </Menu>
        </GuideExample>
      </Fragment>
    </ThemeProvider>
  ))
);
