import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Menu.md';
import Menu, { MenuTitle, MenuItem } from '../';

storiesOf('Menu', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
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
    </div>
  ))
);
