import React from 'react';
import PropTypes from 'prop-types';

import { StyledDatePickerContainer } from './DatePicker-styled';

import { SingleDatePicker } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';

import DatePickerTheme from '../theme/DatePickerTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DatePickerTheme);

const DatePicker = ({
  date,
  onDateChange,
  focused,
  onFocusChange,
  ...other
}) => {
  return (
    <StyledDatePickerContainer>
      <SingleDatePicker
        date={date}
        onDateChange={onDateChange}
        focused={focused}
        onFocusChange={onFocusChange}
        {...other}
      />
    </StyledDatePickerContainer>
  );
};

DatePicker.propTypes = {
  date: momentPropTypes.momentObj,
  onDateChange: PropTypes.func.isRequired,
  focused: PropTypes.bool,
  onFocusChange: PropTypes.func.isRequired
};

DatePicker.defaultProps = {};

export default DatePicker;
