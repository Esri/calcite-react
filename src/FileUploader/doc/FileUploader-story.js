import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './FileUploader.md';

import FileUploader from '../';

import { FormControl, FormControlLabel } from '../../Form';

storiesOf('FileUploader', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample label="placeholder">
        <FormControl>
          <FormControlLabel>Upload profile photo:</FormControlLabel>
          <FileUploader placeholder="A placeholder!" />
        </FormControl>
      </GuideExample>
    </div>
  ))
);
