import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import GuideExample from '../../../stories/GuideExample';
import doc from './Popover.md';

import Popover from '../Popover';
import Button from '../../Button';
import Menu, { MenuTitle, MenuItem } from '../../Menu';

storiesOf('Popover', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <Popover
          targetEl={<Button>Click Here</Button>}
          open={true}
          transitionDuration={200}
        >
          <div>
            <p>Some Text</p>
            <p>And more Text</p>
          </div>
        </Popover>
      </GuideExample>
      <GuideExample label="With Menu">
        <Popover
          targetEl={<Button>Click Here</Button>}
          open={true}
          transitionDuration={200}
        >
          <Menu style={{ maxWidth: '280px' }}>
            <MenuTitle>Some Options</MenuTitle>
            <MenuItem onClick={action('Option 1 clicked')}>
              Option 1 that has a really long text.
            </MenuItem>
            <MenuItem onClick={action('Option 2 clicked')}>Option 2</MenuItem>
            <MenuItem onClick={action('Option 3 clicked')}>Option 3</MenuItem>
            <MenuTitle>More Options</MenuTitle>
            <MenuItem onClick={action('Option 4 clicked')}>Option 4</MenuItem>
            <MenuItem onClick={action('Option 5 clicked')}>Option 5</MenuItem>
          </Menu>
        </Popover>
      </GuideExample>
    </div>
  ))
);
