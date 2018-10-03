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
              <TextField defaultValue="Map Man" label="Name:" />
            </FormControl>
            <FormControl error>
              <TextField defaultValue="map_man@yahoo.com" label="Email:" />
              <FormHelperText>Really... Yahoo?</FormHelperText>
            </FormControl>
            <FormControl>
              <FormControlLabel>State:</FormControlLabel>
              <Select selectedValue="co" onChange={() => true} fullWidth>
                <MenuItem value="ca">California</MenuItem>
                <MenuItem value="co">Colorado</MenuItem>
              </Select>
            </FormControl>
            <FormControl success>
              <TextField fullWidth defaultValue="Denver" label="City:" />
              <FormHelperText>City checks out</FormHelperText>
            </FormControl>
            <FormControl>
              <DatePicker
                date={null}
                focused={false}
                onFocusChange={() => true}
              />
            </FormControl>
            <FormControl>
              <Fieldset name="storyRadioGroup">
                <Legend>Gender:</Legend>
                <Radio>Male</Radio>
                <Radio>Female</Radio>
                <Radio>Other</Radio>
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
              <TextField defaultValue="James" />
            </FormControl>
            <FormControl>
              <TextField defaultValue="Kirk" />
            </FormControl>
            <FormControl error>
              <TextField defaultValue="jKirk_1701@gmail.com" type="email" />
              <FormHelperText>Must be a .gov email</FormHelperText>
            </FormControl>
            <FormControl>
              <TextField defaultValue="Denver" />
            </FormControl>
          </Form>
        </GuideExample>
        <GuideExample label="horizontal FormControl">
          <Form>
            <FormControl horizontal>
              <FormControlLabel style={{ minWidth: '120px' }}>
                First Name:
              </FormControlLabel>
              <TextField defaultValue="James" />
            </FormControl>
            <FormControl horizontal>
              <FormControlLabel style={{ minWidth: '120px' }}>
                Last Name:
              </FormControlLabel>
              <TextField fullWidth defaultValue="Kirk" />
            </FormControl>
            <FormControl horizontal error>
              <FormControlLabel style={{ minWidth: '120px' }}>
                Email:
              </FormControlLabel>
              <TextField defaultValue="jKirk_1701@gmail.com" type="email" />
              <FormHelperText>Must be a .gov email</FormHelperText>
            </FormControl>
            <FormControl horizontal>
              <FormControlLabel style={{ minWidth: '120px' }}>
                State:
              </FormControlLabel>
              <Select selectedValue="co" onChange={() => true}>
                <MenuItem value="ca">California</MenuItem>
                <MenuItem value="co">Colorado</MenuItem>
              </Select>
            </FormControl>
            <FormControl horizontal>
              <FormControlLabel style={{ minWidth: '120px' }}>
                City:
              </FormControlLabel>
              <Select selectedValue="co" onChange={() => true} fullWidth>
                <MenuItem value="ca">Denver</MenuItem>
                <MenuItem value="co">Boulder</MenuItem>
              </Select>
            </FormControl>
          </Form>
        </GuideExample>
      </div>
    ))
  );
