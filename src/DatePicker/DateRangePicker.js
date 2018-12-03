import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import { StyledDatePickerContainer } from './DatePicker-styled';

import { DateRangePicker } from 'react-dates';
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
  onDatesChange,
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

  const _onDatesChange = dates => {
    if (setFieldValue) {
      const { startDate, endDate } = dates;
      setFieldValue(name, {
        startDate,
        endDate
      });
    }

    if (onDatesChange) {
      onDatesChange(dates);
    }
  };

  const _onFocusChange = focusedInput => {
    if (setTouched && !focusedInput) {
      setTouched({ ...touched, [name]: true });
    }

    if (onFocusChange) {
      onFocusChange(focusedInput);
    }
  };

  return (
    <StyledDatePickerContainer>
      <DateRangePicker
        startDate={value && value.startDate}
        endDate={value && value.endDate}
        onDatesChange={_onDatesChange}
        onFocusChange={_onFocusChange}
        disabled={isSubmitting || disabled}
        {...other}
      />
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
  endDatePlaceholderText: 'End Date',
  startDateId: uniqid(),
  endDateId: uniqid()
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
