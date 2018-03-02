import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Loader.md';
import Loader from '../';

storiesOf('Loader', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <Loader />
      </GuideExample>
      <GuideExample label="with text">
        <Loader text="Loading..." />
      </GuideExample>
    </div>
  ))
);
