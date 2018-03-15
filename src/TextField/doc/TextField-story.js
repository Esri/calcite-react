import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './TextField.md';

import TextField from '../';

import { FormControl, FormHelperText } from '../../Form';

storiesOf('TextField', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample label="placeholder">
        <FormControl>
          <TextField placeholder="A placeholder!" />
        </FormControl>
      </GuideExample>
      <GuideExample label="value">
        <FormControl>
          <TextField value="James T Kirk" />
        </FormControl>
      </GuideExample>
      <GuideExample label="error">
        <FormControl error>
          <TextField value="jkirk@gmail.com" type="email" />
          <FormHelperText>Needs to be .gov</FormHelperText>
        </FormControl>
      </GuideExample>
      <GuideExample label="success">
        <FormControl success>
          <TextField value={1} type="number" />
          <FormHelperText>That's a number!</FormHelperText>
        </FormControl>
      </GuideExample>
    </div>
  ))
);
