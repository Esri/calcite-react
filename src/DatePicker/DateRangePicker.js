import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import { StyledDatePickerContainer } from './DatePicker-styled';

import { DateRangePicker as ReactDateRangePicker } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';

import { DatePickerTheme } from '../CalciteThemeProvider';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DatePickerTheme);

const DateRangePicker = ({
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
      <ReactDateRangePicker
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

DateRangePicker.propTypes = {
  /** The currently selected moment date object for the start date */
  startDate: momentPropTypes.momentObj,
  /** Id provided to the start date text field */
  startDateId: PropTypes.string.isRequired,
  /** The currently selected moment date object for the end date */
  endDate: momentPropTypes.momentObj,
  /** Id provided to the end date text field */
  endDateId: PropTypes.string.isRequired,
  /** Callback function when the start or end date is changed */
  onDatesChange: PropTypes.func.isRequired,
  /** The name of the currently focused text field */
  focusedInput: PropTypes.oneOf(['startDate', 'endDate']),
  /** Callback function when the focused input is changed */
  onFocusChange: PropTypes.func.isRequired,
  /** Placeholder text for the start date text field */
  startDatePlaceholderText: PropTypes.string,
  /** Placeholder text for the end date text field */
  endDatePlaceholderText: PropTypes.string
};

DateRangePicker.defaultProps = {
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  startDateId: uniqid(),
  endDateId: uniqid()
};

DateRangePicker.displayName = 'DateRangePicker';

export default DateRangePicker;
