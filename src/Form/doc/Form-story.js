import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Form.md';

import Form, { FormControl, FormHelperText, Fieldset, Legend } from '../';

import TextField from '../../TextField';
import Radio from '../../Radio';
import Checkbox from '../../Checkbox';

storiesOf('Form', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Form>
            <FormControl>
              <TextField value="Map Man" label="Name:" />
            </FormControl>
            <FormControl error>
              <TextField value="map_man@yahoo.com" label="Email:" />
              <FormHelperText>Really... Yahoo?</FormHelperText>
            </FormControl>
            <FormControl>
              <TextField value="Denver" label="City:" />
            </FormControl>
            <FormControl>
              <Fieldset name="storyRadioGroup">
                <Legend>Some Radios:</Legend>
                <Radio>Radio 1</Radio>
                <Radio>Radio 2</Radio>
                <Radio>Radio 3</Radio>
                <Radio>Radio 4</Radio>
              </Fieldset>
            </FormControl>
            <FormControl>
              <Fieldset name="storyCheckboxGroup">
                <Legend>Some Checkboxes:</Legend>
                <Checkbox>Checkbox 1</Checkbox>
                <Checkbox>Checkbox 2</Checkbox>
                <Checkbox>Checkbox 3</Checkbox>
                <Checkbox>Checkbox 4</Checkbox>
              </Fieldset>
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
              <TextField value="James" label="First Name:" />
            </FormControl>
            <FormControl>
              <TextField value="Kirk" label="Last Name:" />
            </FormControl>
            <FormControl error>
              <TextField
                value="jKirk_1701@gmail.com"
                type="email"
                label="Email:"
              />
              <FormHelperText>Must be a .gov email</FormHelperText>
            </FormControl>
            <FormControl>
              <TextField value="Denver" label="City:" />
            </FormControl>
          </Form>
        </GuideExample>
      </div>
    ))
  );
