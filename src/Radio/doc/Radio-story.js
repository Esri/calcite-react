import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Radio.md';

import Radio from '../';

import Form, {
  FormControl,
  Legend,
  Fieldset,
  FormHelperText
} from '../../Form';

storiesOf('Radio', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <Form>
          <FormControl>
            <Fieldset name="storyRadioGroup">
              <Legend>Some Radios:</Legend>
              <Radio>Radio 1</Radio>
              <Radio>Radio 2</Radio>
            </Fieldset>
          </FormControl>
        </Form>
      </GuideExample>
      <GuideExample label="horizontal">
        <Form>
          <FormControl>
            <Fieldset name="storyRadioGroup2" horizontal>
              <Legend>Some More Radios:</Legend>
              <Radio checked={true}>Radio 1</Radio>
              <Radio>Radio 2</Radio>
            </Fieldset>
          </FormControl>
        </Form>
      </GuideExample>
      <GuideExample label="error">
        <Form>
          <FormControl error>
            <Fieldset name="storyRadioGroup3">
              <Legend>Lots of Radios:</Legend>
              <Radio>Radio 1</Radio>
              <Radio>Radio 2</Radio>
              <Radio>Radio 3</Radio>
              <Radio>Radio 4</Radio>
              <FormHelperText>You can display an error too!</FormHelperText>
            </Fieldset>
          </FormControl>
        </Form>
      </GuideExample>
    </div>
  ))
);
