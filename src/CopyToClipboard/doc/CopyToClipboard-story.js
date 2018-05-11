import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './CopyToClipboard.md';
import CopyToClipboard from '../';

storiesOf('CopyToClipboard', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <CopyToClipboard>
          1D0830C9A2A0681A9EFBB001E5B9302BDF6DF02FD52C07DD6F88A3FC1B52DA84
        </CopyToClipboard>
      </GuideExample>
    </div>
  ))
);
