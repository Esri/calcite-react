import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import { StyledDatePickerContainer } from './DatePicker-styled';

import { SingleDatePicker } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';

import { DatePickerTheme } from '../CalciteThemeProvider';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DatePickerTheme);

const DatePicker = ({
  field,
  form,
  onFocusChange,
  onDateChange,
  disabled,
  name,
  value,
  children,
  ...other
}) => {
  let touched, isSubmitting, setFieldValue, setTouched;
  if (field) {
    value = field.value;
    name = field.name;
    touched = form.touched;
    isSubmitting = form.isSubmitting;
    setFieldValue = form.setFieldValue;
    setTouched = form.setTouched;
  }

  const _onDateChange = date => {
    if (setFieldValue) {
      setFieldValue(name, date);
    }

    if (onDateChange) {
      onDateChange(date);
    }
  };

  const _onFocusChange = options => {
    if (setTouched && !options.focused) {
      setTouched({ ...touched, [name]: true });
    }

    if (onFocusChange) {
      onFocusChange(options);
    }
  };

  return (
    <StyledDatePickerContainer>
      <SingleDatePicker
        date={value}
        onDateChange={_onDateChange}
        onFocusChange={_onFocusChange}
        disabled={isSubmitting || disabled}
        {...other}
      />
    </StyledDatePickerContainer>
  );
};

DatePicker.propTypes = {
  /** The currently selected moment date object for the component. */
  date: momentPropTypes.momentObj,
  /** Callback function when the selected date is changed. */
  onDateChange: PropTypes.func.isRequired,
  /** Describe whether the DatePicker is currently focused; displays the calendar dropdown. */
  focused: PropTypes.bool,
  /** Callback function when the focus state of the DatePicker is changed. */
  onFocusChange: PropTypes.func.isRequired,
  /** Placeholder text for the DatePicker text field. */
  placeholder: PropTypes.string,
  /** An id supplied to the DatePicker. */
  id: PropTypes.string.isRequired
};

DatePicker.defaultProps = {
  placeholder: 'Date',
  id: uniqid()
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
