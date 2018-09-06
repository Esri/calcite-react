import React from 'react';
import PropTypes from 'prop-types';

import { StyledDatePickerContainer } from './DatePicker-styled';

import { DateRangePicker } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';

import DatePickerTheme from '../theme/DatePickerTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DatePickerTheme);

const DatePicker = ({ ...other }) => {
  return (
    <StyledDatePickerContainer>
      <DateRangePicker {...other} />
    </StyledDatePickerContainer>
  );
};

DatePicker.propTypes = {
  startDate: momentPropTypes.momentObj,
  startDateId: PropTypes.string.isRequired,
  endDate: momentPropTypes.momentObj,
  endDateId: PropTypes.string.isRequired,
  onDatesChange: PropTypes.func.isRequired,
  focusedInput: PropTypes.oneOf(['startDate', 'endDate']),
  onFocusChange: PropTypes.func.isRequired,
  startDatePlaceholderText: PropTypes.string,
  endDatePlaceholderText: PropTypes.string
};

DatePicker.defaultProps = {
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date'
};

export default DatePicker;
