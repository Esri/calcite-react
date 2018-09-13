import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import { StyledDatePickerContainer } from './DatePicker-styled';

import { SingleDatePicker } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';

import DatePickerTheme from '../theme/DatePickerTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DatePickerTheme);

const DatePicker = ({ ...other }) => {
  return (
    <StyledDatePickerContainer>
      <SingleDatePicker {...other} />
    </StyledDatePickerContainer>
  );
};

DatePicker.propTypes = {
  date: momentPropTypes.momentObj,
  onDateChange: PropTypes.func.isRequired,
  focused: PropTypes.bool,
  onFocusChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired
};

DatePicker.defaultProps = {
  placeholder: 'Date',
  id: uniqid()
};

export default DatePicker;
