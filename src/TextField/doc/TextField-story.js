import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './TextField.md';

import TextField from '../';

import Form, {
  FormControl,
  FormHelperText,
  FormControlLabel
} from '../../Form';
import Button from '../../Button';

import AccountIcon from 'mdi-react/AccountIcon';

storiesOf('TextField', module)
  .add(
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
            <TextField defaultValue="James T Kirk" />
          </FormControl>
        </GuideExample>
        <GuideExample label="error">
          <FormControl error>
            <TextField defaultValue="jkirk@gmail.com" type="email" />
            <FormHelperText>Needs to be .gov</FormHelperText>
          </FormControl>
        </GuideExample>
        <GuideExample label="success">
          <FormControl success>
            <TextField defaultValue={1} type="number" />
            <FormHelperText>That's a number!</FormHelperText>
          </FormControl>
        </GuideExample>
        <GuideExample label={`type="textarea"`}>
          <FormControl>
            <TextField
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              type="textarea"
            />
          </FormControl>
        </GuideExample>
        <GuideExample label="with adornments">
          <Form>
            <FormControl>
              <TextField
                placeholder="Username"
                rightAdornment={<Button>Yay</Button>}
              />
            </FormControl>
            <FormControl>
              <TextField
                defaultValue="Dr. Leonard McCoy"
                leftAdornment={<AccountIcon />}
              />
            </FormControl>
            <FormControl success>
              <TextField
                defaultValue="500.00"
                leftAdornment="$"
                rightAdornment={<Button>Submit</Button>}
              />
            </FormControl>
          </Form>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'With Label',
    withInfo(doc)(() => (
      <div>
        <GuideExample label="htmlFor & id">
          <FormControl>
            <FormControlLabel htmlFor="name">Name:</FormControlLabel>
            <TextField id="name" defaultValue="James Kirk" />
          </FormControl>
        </GuideExample>
        <GuideExample label="auto generated id">
          <FormControl>
            <FormControlLabel>Name:</FormControlLabel>
            <TextField defaultValue="James Kirk" />
          </FormControl>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Minimal',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <FormControl>
            <TextField minimal defaultValue="James T Kirk" />
          </FormControl>
        </GuideExample>
        <GuideExample>
          <FormControl>
            <TextField
              minimal
              defaultValue="500.00"
              leftAdornment="$"
              rightAdornment={<Button>Submit</Button>}
            />
          </FormControl>
        </GuideExample>
      </div>
    ))
  );
