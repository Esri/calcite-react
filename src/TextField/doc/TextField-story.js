import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Formik, Field } from 'formik';

import GuideExample from '../../../stories/GuideExample';
import doc from './TextField.md';

import TextField from '../';

import Form, {
  FormControl,
  FormHelperText,
  FormControlLabel
} from '../../Form';
import Button from '../../Button';
import Select from '../../Select';
import { MenuItem } from '../../Menu';

import UserIcon from 'calcite-ui-icons-react/UserIcon';

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
                leftAdornment={<UserIcon size={16} />}
              />
            </FormControl>
            <FormControl success>
              <TextField
                defaultValue="500.00"
                leftAdornment="$"
                rightAdornment={<Button>Submit</Button>}
              />
            </FormControl>
            <FormControl>
              <TextField
                defaultValue="500.00"
                rightAdornment={
                  <Select placement="bottom-end" selectedValue="usd">
                    <MenuItem value="usd">USD</MenuItem>
                    <MenuItem value="eur">EUR</MenuItem>
                    <MenuItem value="jpy">JPY</MenuItem>
                  </Select>
                }
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
  )
  .add(
    'with Formik',
    withInfo(doc)(() => {
      const user = {
        name: '',
        email: '',
        password: ''
      };

      const onSubmit = (values, actions) => {
        setTimeout(() => {
          console.log(values);
          actions.setSubmitting(false);
        }, 1000);
      };

      const onValidate = values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'You must have a name 🤨';
        }

        if (!values.email.includes('@')) {
          errors.email = 'Most emails have an @...';
        }

        if (values.password.length < 10) {
          errors.password =
            'That password is weak. You need at least 10 characters.';
        }

        return errors;
      };

      const handleNameChanged = e => {
        // You can still attach your own onChange handlers (they will be invoked right after the Formik ones)
        console.log('Hello ', e.target.value);
      };

      return (
        <Formik initialValues={user} validate={onValidate} onSubmit={onSubmit}>
          {({ values, errors, touched, handleSubmit, isSubmitting }) => (
            <GuideExample>
              <Form onSubmit={handleSubmit}>
                {/* name */}

                <FormControl
                  success={touched.name && !errors.name ? true : false}
                  error={touched.name && errors.name ? true : false}
                >
                  <FormControlLabel htmlFor="name">Name:</FormControlLabel>
                  <Field
                    component={TextField}
                    type="text"
                    name="name"
                    leftAdornment={<UserIcon size={16} />}
                    onChange={handleNameChanged}
                  />
                  <FormHelperText>
                    {(touched.name && errors.name) || null}
                  </FormHelperText>
                </FormControl>

                {/* email */}

                <FormControl
                  success={touched.email && !errors.email ? true : false}
                  error={touched.email && errors.email ? true : false}
                >
                  <FormControlLabel htmlFor="email">Email:</FormControlLabel>
                  <Field component={TextField} type="text" name="email" />
                  <FormHelperText>
                    {(touched.email && errors.email) || null}
                  </FormHelperText>
                </FormControl>

                {/* password */}

                <FormControl
                  success={touched.password && !errors.password ? true : false}
                  error={touched.password && errors.password ? true : false}
                >
                  <FormControlLabel htmlFor="password">
                    Password:
                  </FormControlLabel>
                  <Field component={TextField} type="text" name="password" />
                  <FormHelperText>
                    {(touched.password && errors.password) || null}
                  </FormHelperText>
                </FormControl>

                <FormControl>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting.......' : 'Submit'}
                  </Button>
                </FormControl>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            </GuideExample>
          )}
        </Formik>
      );
    })
  );
