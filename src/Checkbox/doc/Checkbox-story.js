import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Checkbox.md';

import Checkbox from '../';

import Form, {
  FormControl,
  Legend,
  Fieldset,
  FormHelperText
} from '../../Form';

storiesOf('Checkbox', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <Form>
          <FormControl>
            <Fieldset name="storyCheckboxGroup">
              <Legend>Some Checkboxes:</Legend>
              <Checkbox>Checkbox 1</Checkbox>
              <Checkbox>Checkbox 2</Checkbox>
            </Fieldset>
          </FormControl>
        </Form>
      </GuideExample>
      <GuideExample label="horizontal">
        <Form>
          <FormControl>
            <Fieldset name="storyCheckboxGroup2" horizontal>
              <Legend>Horizontal Checkbox List:</Legend>
              <Checkbox checked={true}>Checkbox 1</Checkbox>
              <Checkbox>Checkbox 2</Checkbox>
            </Fieldset>
          </FormControl>
        </Form>
      </GuideExample>
      <GuideExample label="error">
        <Form>
          <FormControl error>
            <Fieldset name="storyCheckboxGroup3">
              <Legend>Checkboxes with Error:</Legend>
              <Checkbox>Checkbox 1</Checkbox>
              <Checkbox>Checkbox 2</Checkbox>
              <Checkbox>Checkbox 3</Checkbox>
              <Checkbox>Checkbox 4</Checkbox>
              <FormHelperText>You can display an error too!</FormHelperText>
            </Fieldset>
          </FormControl>
        </Form>
      </GuideExample>
    </div>
  ))
);
