import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Popover.md';

import PopoverStateExample from './PopoverStateExample';

storiesOf('Popover', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample label="With Menu">
        <PopoverStateExample />
      </GuideExample>
    </div>
  ))
);
