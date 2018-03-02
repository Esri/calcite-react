import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import GuideExample from '../../../stories/GuideExample';
import doc from './Alert.md';
import Alert from '../';

storiesOf('Alert', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <Alert>Something Happened!</Alert>
      </GuideExample>
      <GuideExample label="closeLabel=&quot;close&quot;">
        <Alert closeLabel="close" onClose={action('clicked')}>
          Has close link!
        </Alert>
      </GuideExample>
      <GuideExample label="red">
        <Alert red>Something Happened!</Alert>
      </GuideExample>
      <GuideExample label="yellow">
        <Alert yellow>Something Happened!</Alert>
      </GuideExample>
      <GuideExample label="green">
        <Alert green>Something Happened!</Alert>
      </GuideExample>
      <GuideExample label="full">
        <Alert full>Something Happened!</Alert>
      </GuideExample>
    </div>
  ))
);
