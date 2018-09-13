import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Formik, Field, FieldArray } from 'formik';

import GuideExample from '../../../stories/GuideExample';
import doc from './Checkbox.md';

import Checkbox from '../';
import Form, {
  FormControl,
  Legend,
  Fieldset,
  FormHelperText
} from '../../Form';
import Button from '../../Button';

storiesOf('Checkbox', module)
  .add(
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
                <Checkbox defaultChecked={true}>Checkbox 1</Checkbox>
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
  )
  .add(
    'with Formik',
    withInfo(doc)(() => {
      const options = {
        sdks: '',
        terms: ''
      };

      const sdkOptions = [
        {
          name: 'ArcGIS API for JS',
          value: 'jsapi'
        },
        {
          name: 'ArcGIS Runtime SDK for .NET',
          value: 'dotnet'
        },
        {
          name: 'ArcGIS Runtime SDK for iOS',
          value: 'ios'
        },
        {
          name: 'ArcGIS Runtime SDK for Android',
          value: 'android'
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

        if (!values.terms) {
          errors.terms = 'You must accept our terms';
        }

        if (!values.sdks.length) {
          errors.sdks = 'Please choose at least one SDK';
        }

        return errors;
      };

      return (
        <Formik
          initialValues={options}
          validate={onValidate}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
            <GuideExample>
              <Form onSubmit={handleSubmit}>
                {/* sdks - FormikCheckbox */}

                <FormControl
                  success={touched.sdks && !errors.sdks ? true : false}
                  error={touched.sdks && errors.sdks ? true : false}
                >
                  <Fieldset name="sdks">
                    <Legend>Choose your SDKs:</Legend>

                    <FieldArray name="sdks">
                      {arrayHelpers => (
                        <div>
                          {sdkOptions.map(sdk => (
                            <Field
                              component={Checkbox}
                              name="sdks"
                              value={sdk.value}
                              key={sdk.value}
                              arrayHelpers={arrayHelpers}
                            >
                              {sdk.name}
                            </Field>
                          ))}
                        </div>
                      )}
                    </FieldArray>
                    <FormHelperText>
                      {(touched.sdks && errors.sdks) || null}
                    </FormHelperText>
                  </Fieldset>
                </FormControl>

                {/* terms */}

                <FormControl
                  success={touched.terms && !errors.terms ? true : false}
                  error={touched.terms && errors.terms ? true : false}
                >
                  <Field component={Checkbox} name="terms" value="terms">
                    I accept the terms and conditions
                  </Field>
                  <FormHelperText>
                    {(touched.terms && errors.terms) || null}
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
