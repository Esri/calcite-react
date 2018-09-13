import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './DatePicker.md';

import DatePicker, { DateRangePicker } from '../';

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
  );
