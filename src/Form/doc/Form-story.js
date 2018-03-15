import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Form.md';

import Form, {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Legend
} from '../';

import TextField from '../../TextField';

storiesOf('Form', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Form>
            <FormControl>
              <FormControlLabel>Name:</FormControlLabel>
              <TextField value="Map Man" />
            </FormControl>
            <FormControl error>
              <FormControlLabel>Email:</FormControlLabel>
              <TextField value="map_man@yahoo.com" />
              <FormHelperText>Really... Yahoo?</FormHelperText>
            </FormControl>
            <FormControl type="radio">
              <Legend>Gender:</Legend>
            </FormControl>
          </Form>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Horizontal Forms',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Form horizontal>
            <FormControl>
              <FormControlLabel>First Name:</FormControlLabel>
              <TextField value="James" />
            </FormControl>
            <FormControl>
              <FormControlLabel>Last Name:</FormControlLabel>
              <TextField value="Kirk" />
            </FormControl>
            <FormControl error>
              <FormControlLabel>Email:</FormControlLabel>
              <TextField value="jKirk_1701@gmail.com" type="email" />
              <FormHelperText>Must be a .gov email</FormHelperText>
            </FormControl>
          </Form>
        </GuideExample>
      </div>
    ))
  );
