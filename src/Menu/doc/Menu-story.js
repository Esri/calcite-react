import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Menu.md';
import Menu, { MenuTitle, MenuItem } from '../';

storiesOf('Menu', module)
  .add(
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
  )
  .add(
    'With Subtitle',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Menu style={{ maxWidth: '280px' }}>
            <MenuTitle>Metric</MenuTitle>
            <MenuItem subtitle="Meters">m</MenuItem>
            <MenuItem subtitle="Kilometers">km</MenuItem>
            <MenuItem subtitle="Millimeters">mm</MenuItem>
            <MenuItem subtitle="Centimeters">cm</MenuItem>
            <MenuItem subtitle="Decimeters">dm</MenuItem>
            <MenuTitle>Imperial</MenuTitle>
            <MenuItem subtitle="Feet">ft</MenuItem>
            <MenuItem subtitle="Inches">in</MenuItem>
            <MenuItem subtitle="Yards">yd</MenuItem>
            <MenuItem subtitle="Miles">mi</MenuItem>
            <MenuItem subtitle="Nautical Miles">NM</MenuItem>
          </Menu>
        </GuideExample>
      </div>
    ))
  );
