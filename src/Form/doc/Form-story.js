import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Form.md';

import Form, {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Fieldset,
  Legend
} from '../';

import TextField from '../../TextField';
import Select from '../../Select';
import { MenuItem } from '../../Menu';
import Radio from '../../Radio';
import Checkbox from '../../Checkbox';
import DatePicker from '../../DatePicker';

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
              <FormControlLabel>State:</FormControlLabel>
              <Select selectedValue="co" fullWidth>
                <MenuItem value="ca">California</MenuItem>
                <MenuItem value="co">Colorado</MenuItem>
              </Select>
            </FormControl>
            <FormControl success>
              <TextField value="Denver" label="City:" />
              <FormHelperText>City checks out</FormHelperText>
            </FormControl>
            <FormControl>
              <DatePicker date={null} focused={false} />
            </FormControl>
            <FormControl>
              <Fieldset name="storyRadioGroup">
                <Legend>Gender:</Legend>
                <Radio>Male</Radio>
                <Radio>Female</Radio>
                <Radio>Non-binary, genderqueer, or gender non-conforming</Radio>
                <Radio>Transgender</Radio>
              </Fieldset>
            </FormControl>
            <FormControl>
              <Fieldset name="storyCheckboxGroup">
                <Legend>Pets:</Legend>
                <Checkbox>Dog</Checkbox>
                <Checkbox>Cat</Checkbox>
                <Checkbox>Other</Checkbox>
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
