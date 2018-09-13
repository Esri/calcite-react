import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Formik, Field } from 'formik';

import GuideExample from '../../../stories/GuideExample';
import doc from './Switch.md';

import Switch from '../';

import Form, { FormControl, FormHelperText } from '../../Form';
import Button from '../../Button';

storiesOf('Switch', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Form>
            <FormControl>
              <Switch>Inline example</Switch>
            </FormControl>
            <FormControl>
              <Switch destructive>
                Confirm account deletion. You cannot recover deleted accounts.
              </Switch>
            </FormControl>
            <FormControl>
              <Switch labelPosition="before">
                Enable Two-Factor Authentication
              </Switch>
            </FormControl>
          </Form>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'with Formik',
    withInfo(doc)(() => {
      const options = {
        mfa: false
      };

      const onSubmit = (values, actions) => {
        setTimeout(() => {
          console.log(values);
          actions.setSubmitting(false);
        }, 1000);
      };

      const onValidate = values => {
        const errors = {};

        if (!values.mfa) {
          errors.mfa = 'You must enable MFA';
        }

        return errors;
      };

      return (
        <Formik
          initialValues={options}
          validate={onValidate}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleSubmit, isSubmitting }) => (
            <GuideExample>
              <Form onSubmit={handleSubmit}>
                {/* mfa */}

                <FormControl
                  success={touched.mfa && !errors.mfa ? true : false}
                  error={touched.mfa && errors.mfa ? true : false}
                >
                  <Field component={Switch} name="mfa" value="mfa">
                    Enable Multi-Factor Authentication
                  </Field>
                  <FormHelperText>
                    {(touched.mfa && errors.mfa) || null}
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
