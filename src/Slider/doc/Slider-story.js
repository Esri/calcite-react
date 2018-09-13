import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Formik, Field } from 'formik';

import GuideExample from '../../../stories/GuideExample';
import doc from './Slider.md';
import Slider from '../';

import Form, {
  FormControl,
  FormHelperText,
  FormControlLabel
} from '../../Form';
import Button from '../../Button';
import TextField from '../../TextField';

storiesOf('Slider', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Slider />
        </GuideExample>
        <GuideExample>
          <Slider defaultValue={20} />
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Controlled Slider',
    withInfo({
      text: doc,
      propTables: [Slider]
    })(() => {
      class SliderStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            value: 20
          };
        }

        updateSliderValue = event => {
          this.setState({ value: parseInt(event.target.value, 10) });
        };

        render() {
          return (
            <GuideExample>
              <Form horizontal>
                <FormControl>
                  <TextField
                    type="number"
                    value={this.state.value}
                    onChange={this.updateSliderValue}
                  />
                </FormControl>
                <FormControl style={{ flex: '1 0 100px' }}>
                  <Slider
                    value={this.state.value}
                    onChange={this.updateSliderValue}
                  />
                </FormControl>
              </Form>
            </GuideExample>
          );
        }
      }

      SliderStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <SliderStory />;
    })
  )
  .add(
    'with Formik',
    withInfo(doc)(() => {
      const formValues = {
        volume: 0
      };

      const onSubmit = (values, actions) => {
        console.log(values);
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      };

      const onValidate = values => {
        const errors = {};

        if (values.volume > 75) {
          errors.volume = 'That is way too loud!';
        }

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
                {/* volume */}

                <FormControl
                  success={touched.volume && !errors.volume ? true : false}
                  error={touched.volume && errors.volume ? true : false}
                  style={{ flex: '1 0 100px' }}
                >
                  <FormControlLabel htmlFor="volume">
                    Preferred Volume:
                  </FormControlLabel>
                  <Field component={Slider} name="volume" />
                  <FormHelperText>
                    {values.volume} {(touched.volume && errors.volume) || null}
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
