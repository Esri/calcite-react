import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Formik, Field } from 'formik';

import GuideExample from '../../../stories/GuideExample';
import doc from './Radio.md';

import Radio from '../';

import Form, {
  FormControl,
  FormControlLabel,
  Legend,
  Fieldset,
  FormHelperText
} from '../../Form';
import Button from '../../Button';

storiesOf('Radio', module)
  .add(
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
                <Legend>Horizontal Radio List:</Legend>
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
                <Legend>Radios with Error:</Legend>
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
  )
  .add(
    'with Formik',
    withInfo(doc)(() => {
      const formValues = {
        subscription: 'user'
      };

      const subscriptionOptions = [
        {
          name: 'User',
          value: 'user'
        },
        {
          name: 'Developer',
          value: 'dev'
        },
        {
          name: 'Administrator',
          value: 'admin'
        }
      ];

      const onSubmit = (values, actions) => {
        setTimeout(() => {
          console.log(values);
          actions.setSubmitting(false);
        }, 1000);
      };

      const onValidate = values => {
        const errors = {};

        // No validation logic for for this form...

        return errors;
      };

      return (
        <Formik
          initialValues={formValues}
          validate={onValidate}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleSubmit, isSubmitting }) => (
            <GuideExample>
              <Form onSubmit={handleSubmit}>
                {/* subscription */}

                <FormControl
                  success={
                    touched.subscription && !errors.subscription ? true : false
                  }
                  error={
                    touched.subscription && errors.subscription ? true : false
                  }
                >
                  <FormControlLabel htmlFor="subscription">
                    Subscription Type:
                  </FormControlLabel>
                  {subscriptionOptions.map(subscription => (
                    <Field
                      key={subscription.value}
                      component={Radio}
                      name="subscription"
                      value={subscription.value}
                    >
                      {subscription.name}
                    </Field>
                  ))}
                  <FormHelperText>
                    {(touched.subscription && errors.subscription) || null}
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
