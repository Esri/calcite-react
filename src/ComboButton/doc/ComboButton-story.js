import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import GuideExample from '../../../stories/GuideExample';
import doc from './ComboButton.md';
import ComboButton from '../';
import Menu, { MenuItem } from '../../Menu';

storiesOf('ComboButton', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <ComboButton onClick={action('primary clicked')} label="Export All">
          <Menu>
            <MenuItem onClick={action('pdf clicked')}>Export PDF</MenuItem>
            <MenuItem onClick={action('csv clicked')}>Export CSV</MenuItem>
            <MenuItem onClick={action('excel clicked')}>Export Excel</MenuItem>
          </Menu>
        </ComboButton>
      </GuideExample>
      <GuideExample label="clear">
        <ComboButton
          onClick={action('primary clicked')}
          label="Export All"
          clear
        >
          <Menu>
            <MenuItem onClick={action('pdf clicked')}>Export PDF</MenuItem>
            <MenuItem onClick={action('csv clicked')}>Export CSV</MenuItem>
            <MenuItem onClick={action('excel clicked')}>Export Excel</MenuItem>
          </Menu>
        </ComboButton>
      </GuideExample>
      <GuideExample label="clearGray">
        <ComboButton
          onClick={action('primary clicked')}
          label="Export All"
          clearGray
        >
          <Menu>
            <MenuItem onClick={action('pdf clicked')}>Export PDF</MenuItem>
            <MenuItem onClick={action('csv clicked')}>Export CSV</MenuItem>
            <MenuItem onClick={action('excel clicked')}>Export Excel</MenuItem>
          </Menu>
        </ComboButton>
      </GuideExample>
      <GuideExample label="red">
        <ComboButton onClick={action('primary clicked')} label="Export All" red>
          <Menu>
            <MenuItem onClick={action('pdf clicked')}>Export PDF</MenuItem>
            <MenuItem onClick={action('csv clicked')}>Export CSV</MenuItem>
            <MenuItem onClick={action('excel clicked')}>Export Excel</MenuItem>
          </Menu>
        </ComboButton>
      </GuideExample>
      <GuideExample label="green">
        <ComboButton
          onClick={action('primary clicked')}
          label="Export All"
          green
        >
          <Menu>
            <MenuItem onClick={action('pdf clicked')}>Export PDF</MenuItem>
            <MenuItem onClick={action('csv clicked')}>Export CSV</MenuItem>
            <MenuItem onClick={action('excel clicked')}>Export Excel</MenuItem>
          </Menu>
        </ComboButton>
      </GuideExample>
    </div>
  ))
);
