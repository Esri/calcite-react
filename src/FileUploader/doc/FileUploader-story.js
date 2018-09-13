import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Formik, Field } from 'formik';

import GuideExample from '../../../stories/GuideExample';
import doc from './FileUploader.md';

import FileUploader from '../';

import Form, {
  FormControl,
  FormHelperText,
  FormControlLabel
} from '../../Form';
import Button from '../../Button';

storiesOf('FileUploader', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample label="placeholder">
          <FormControl>
            <FormControlLabel>Upload profile photo:</FormControlLabel>
            <FileUploader placeholder="A placeholder!" />
          </FormControl>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'with Formik',
    withInfo(doc)(() => {
      const user = {
        avatar: null
      };

      const onSubmit = (values, actions) => {
        console.log(values);
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      };

      const onValidate = values => {
        const errors = {};

        if (values.avatar && values.avatar.length) {
          if (values.avatar[0].size > 100000) {
            errors.avatar = 'Please choose a photo under 100kb.';
          }
        }

        return errors;
      };

      return (
        <Formik initialValues={user} validate={onValidate} onSubmit={onSubmit}>
          {({ values, errors, touched, handleSubmit, isSubmitting }) => (
            <GuideExample>
              <Form onSubmit={handleSubmit}>
                {/* avatar */}
                <FormControl
                  success={touched.avatar && !errors.avatar ? true : false}
                  error={touched.avatar && errors.avatar ? true : false}
                >
                  <FormControlLabel>Upload an avatar:</FormControlLabel>
                  <Field
                    component={FileUploader}
                    name="avatar"
                    accept="image/*"
                  />
                  <FormHelperText>
                    {(touched.avatar && errors.avatar) || null}
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
