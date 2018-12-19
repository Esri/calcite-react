import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import moment from 'moment';

import {
  StyledDatePickerContainer,
  StyledMonthElContainer,
  StyledMonthYearSelectContainer,
  StyledMonthSelect,
  StyledYearSelect,
  StyledWeekDayList,
  StyledWeekDay
} from './DatePicker-styled';

import { DateRangePicker as ReactDateRangePicker } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';

import { MenuItem } from '../Menu';

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
  monthYearSelectionMode,
  yearSelectDates,
  hideKeyboardShortcutsPanel,
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

  const getMonthEl = ({ month, onMonthSelect, onYearSelect }) => {
    const weekdays = moment.weekdaysMin();
    return (
      <StyledMonthElContainer>
        <StyledMonthYearSelectContainer>
          <StyledMonthSelect
            selectedValue={month.month().toString()}
            renderValue={selectedItem =>
              getMonthRenderValue(selectedItem, month)
            }
            onChange={value => {
              onMonthSelect(month, value);
            }}
          >
            {moment.months().map((label, value) => (
              <MenuItem value={value.toString()} key={value}>
                {label}
              </MenuItem>
            ))}
          </StyledMonthSelect>
          {getYearEl({ month, onYearSelect })}
        </StyledMonthYearSelectContainer>
        <StyledWeekDayList>
          {weekdays.map(day => (
            <StyledWeekDay key={day}>{day}</StyledWeekDay>
          ))}
        </StyledWeekDayList>
      </StyledMonthElContainer>
    );
  };

  const getMonthRenderValue = (selectedItem, month) => {
    if (monthYearSelectionMode === 'MONTH') {
      return `${selectedItem && selectedItem.props.children} ${month.year()}`;
    }

    return selectedItem && selectedItem.props.children;
  };

  const getYearEl = ({ month, onYearSelect }) => {
    if (monthYearSelectionMode === 'MONTH_YEAR') {
      const year = month.year();
      return (
        <StyledYearSelect
          selectedValue={year}
          onChange={value => {
            onYearSelect(month, value);
          }}
        >
          {getYears(year)}
        </StyledYearSelect>
      );
    }
  };

  const getYears = year => {
    let yearAdded = false;
    const yearsArr = [];
    for (
      let currentYear = yearSelectDates.endYear;
      yearSelectDates.startYear <= currentYear;
      currentYear--
    ) {
      if (currentYear === year) {
        yearAdded = true;
      }
      yearsArr.push(
        <MenuItem value={currentYear} key={currentYear}>
          {currentYear}
        </MenuItem>
      );
    }

    if (!yearAdded) {
      yearsArr.unshift(
        <MenuItem value={year} key={year}>
          {year}
        </MenuItem>
      );
      yearsArr.sort((a, b) => {
        if (a.props.value < b.props.value) return 1;
        if (a.props.value > b.props.value) return -1;
        return 0;
      });
    }

    return yearsArr;
  };

  return (
    <StyledDatePickerContainer
      hideDoWHeader={monthYearSelectionMode !== 'NONE'}
    >
      <ReactDateRangePicker
        startDate={value && value.startDate}
        endDate={value && value.endDate}
        onDatesChange={_onDatesChange}
        onFocusChange={_onFocusChange}
        disabled={isSubmitting || disabled}
        renderMonthElement={
          monthYearSelectionMode === 'NONE' ? undefined : getMonthEl
        }
        hideKeyboardShortcutsPanel={hideKeyboardShortcutsPanel}
        {...other}
      />
    </StyledDatePickerContainer>
  );
};

DateRangePicker.propTypes = {
  /** The currently selected moment date object for the start date. */
  startDate: momentPropTypes.momentObj,
  /** Id provided to the start date text field. */
  startDateId: PropTypes.string.isRequired,
  /** The currently selected moment date object for the end date. */
  endDate: momentPropTypes.momentObj,
  /** Id provided to the end date text field. */
  endDateId: PropTypes.string.isRequired,
  /** Callback function when the start or end date is changed. */
  onDatesChange: PropTypes.func.isRequired,
  /** The name of the currently focused text field. */
  focusedInput: PropTypes.oneOf(['startDate', 'endDate']),
  /** Callback function when the focused input is changed. */
  onFocusChange: PropTypes.func.isRequired,
  /** Placeholder text for the start date text field. */
  startDatePlaceholderText: PropTypes.string,
  /** Placeholder text for the end date text field. */
  endDatePlaceholderText: PropTypes.string,
  /** Determine if year and/or month dropdowns should be shown in the calendar popup */
  monthYearSelectionMode: PropTypes.oneOf(['NONE', 'MONTH', 'MONTH_YEAR']),
  /** The years that will be used to populate the year dropdown menu */
  yearSelectDates: PropTypes.shape({
    startYear: PropTypes.number,
    endYear: PropTypes.number
  })
};

DateRangePicker.defaultProps = {
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  startDateId: uniqid(),
  endDateId: uniqid(),
  monthYearSelectionMode: 'NONE',
  yearSelectDates: {
    startYear: new moment().subtract('year', 50).year(),
    endYear: new moment().year()
  },
  hideKeyboardShortcutsPanel: true
};

DateRangePicker.displayName = 'DateRangePicker';

export default DateRangePicker;
