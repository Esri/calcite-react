import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Formik, Field } from 'formik';

import GuideExample from '../../../stories/GuideExample';
import doc from './DatePicker.md';

import DatePicker, { DateRangePicker } from '../';

import Form, {
  FormControl,
  FormHelperText,
  FormControlLabel
} from '../../Form';
import Button from '../../Button';

storiesOf('DatePicker', module)
  .add(
    'Single Date Picker',
    withInfo({
      text: doc,
      propTables: [DatePicker]
    })(() => {
      class DatePickerStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            date: null,
            datePickerFocused: false
          };
        }

        onDateChange = date => {
          this.setState({
            date
          });
        };

        onFocusChange = ({ focused }) => {
          this.setState({
            datePickerFocused: focused
          });
        };

        render() {
          return (
            <div>
              <GuideExample>
                <DatePicker
                  date={this.state.date}
                  onDateChange={this.onDateChange}
                  focused={this.state.datePickerFocused}
                  onFocusChange={this.onFocusChange}
                />
              </GuideExample>
            </div>
          );
        }
      }

      DatePickerStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <DatePickerStory />;
    })
  )
  .add(
    'Date Range Picker',
    withInfo({
      text: doc,
      propTables: [DateRangePicker]
    })(() => {
      class DatePickerStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null
          };
        }

        onDatesChange = ({ startDate, endDate }) => {
          this.setState({
            startDate,
            endDate
          });
        };

        onFocusChange = focusedInput => {
          this.setState({
            focusedInput
          });
        };

        render() {
          return (
            <div>
              <GuideExample label="selectedItem={this.state.selectedValues}">
                <DateRangePicker
                  startDate={this.state.startDate}
                  startDateId="sampleStartDate"
                  endDate={this.state.endDate}
                  endDateId="sampleEndDate"
                  onDatesChange={this.onDatesChange}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={this.onFocusChange}
                />
              </GuideExample>
            </div>
          );
        }
      }

      DatePickerStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <DatePickerStory />;
    })
  )
  .add(
    'Append To Body',
    withInfo({
      text: doc,
      propTables: [DatePicker]
    })(() => {
      class DatePickerStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            date: null,
            datePickerFocused: false
          };
        }

        onDateChange = date => {
          this.setState({
            date
          });
        };

        onFocusChange = ({ focused }) => {
          this.setState({
            datePickerFocused: focused
          });
        };

        render() {
          return (
            <div>
              <GuideExample label="appendToBody" style={{ overflow: 'hidden' }}>
                <DatePicker
                  date={this.state.date}
                  onDateChange={this.onDateChange}
                  focused={this.state.datePickerFocused}
                  onFocusChange={this.onFocusChange}
                  appendToBody
                />
              </GuideExample>
            </div>
          );
        }
      }

      DatePickerStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <DatePickerStory />;
    })
  )
  .add(
    'Single Date with Formik',
    withInfo(doc)(() => {
      class DatePickerStory extends Component {
        state = {
          date: null,
          datePickerFocused: false
        };

        formValues = {
          birthday: null
        };

        onDateChange = date => {
          this.setState({
            date
          });
        };

        onFocusChange = ({ focused }) => {
          this.setState({
            datePickerFocused: focused
          });
        };

        onSubmit = (values, actions) => {
          console.log(values);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        };

        onValidate = values => {
          const errors = {};
          if (!values.birthday) {
            errors.birthday = 'You must have a birthday 🤨';
          }

          return errors;
        };

        render() {
          return (
            <Formik
              initialValues={this.formValues}
              validate={this.onValidate}
              onSubmit={this.onSubmit}
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
                    {/* birthday */}

                    <FormControl
                      success={
                        touched.birthday && !errors.birthday ? true : false
                      }
                      error={touched.birthday && errors.birthday ? true : false}
                    >
                      <FormControlLabel>Select your birthday:</FormControlLabel>
                      <Field
                        component={DatePicker}
                        name="birthday"
                        date={this.state.date}
                        onDateChange={this.onDateChange}
                        focused={this.state.datePickerFocused}
                        onFocusChange={this.onFocusChange}
                      />
                      <FormHelperText>
                        {(touched.birthday && errors.birthday) || null}
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
        }
      }

      DatePickerStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <DatePickerStory />;
    })
  )
  .add(
    'Date Range with Formik',
    withInfo(doc)(() => {
      class DatePickerStory extends Component {
        state = {
          startDate: null,
          endDate: null,
          focusedInput: null
        };

        formValues = {
          booking: { startDate: null, endDate: null }
        };

        onDatesChange = ({ startDate, endDate }) => {
          this.setState({
            startDate,
            endDate
          });
        };

        onFocusChange = focusedInput => {
          this.setState({
            focusedInput
          });
        };

        onSubmit = (values, actions) => {
          console.log(values);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        };

        onValidate = values => {
          const errors = {};
          if (
            !values.booking ||
            !values.booking.startDate ||
            !values.booking.endDate
          ) {
            errors.booking = 'This is required!';
          }

          return errors;
        };

        render() {
          return (
            <Formik
              initialValues={this.formValues}
              validate={this.onValidate}
              onSubmit={this.onSubmit}
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
                    {/* booking */}

                    <FormControl
                      success={
                        touched.booking && !errors.booking ? true : false
                      }
                      error={touched.booking && errors.booking ? true : false}
                    >
                      <FormControlLabel>Booking Dates:</FormControlLabel>
                      <Field
                        component={DateRangePicker}
                        name="booking"
                        startDate={this.state.startDate}
                        startDateId="sampleStartDate"
                        endDate={this.state.endDate}
                        endDateId="sampleEndDate"
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={this.onFocusChange}
                      />
                      <FormHelperText>
                        {(touched.booking && errors.booking) || null}
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
        }
      }

      DatePickerStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <DatePickerStory />;
    })
  );
