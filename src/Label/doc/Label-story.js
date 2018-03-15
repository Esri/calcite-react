import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Label.md';
import Label from '../';

storiesOf('Label', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <Label>default</Label>
      </GuideExample>
      <GuideExample label="blue">
        <Label blue>blue</Label>
      </GuideExample>
      <GuideExample label="green">
        <Label green>green</Label>
      </GuideExample>
      <GuideExample label="yellow">
        <Label yellow>yellow</Label>
      </GuideExample>
      <GuideExample label="red">
        <Label red>red</Label>
      </GuideExample>
    </div>
  ))
);
