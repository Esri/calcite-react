// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';

import {
  StyledDatePickerContainer,
  StyledMonthElContainer,
  StyledMonthYearSelectContainer,
  StyledMonthSelect,
  StyledYearSelect,
  StyledMonthYearHeader,
  StyledWeekDayList,
  StyledWeekDay
} from './DatePicker-styled';

import 'react-dates/initialize';

import { DateRangePicker as ReactDateRangePicker } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';

import { MenuItem } from '../Menu';
import CalendarIcon from 'calcite-ui-icons-react/CalendarIcon';

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
  hideInputIcon,
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

  const getHeaderEl = ({ month, onMonthSelect, onYearSelect }) => {
    const weekdays = moment.weekdaysMin();
    return (
      <StyledMonthElContainer>
        <StyledMonthYearSelectContainer>
          {getMonthEl({ month, onMonthSelect })}
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

  const getMonthEl = ({ month, onMonthSelect }) => {
    if (monthYearSelectionMode === 'NONE') {
      return (
        <StyledMonthYearHeader>{month.format('MMMM')}</StyledMonthYearHeader>
      );
    }

    return (
      <StyledMonthSelect
        selectedValue={month.month()}
        renderValue={selectedItem => getMonthRenderValue(selectedItem, month)}
        onChange={value => {
          onMonthSelect(month, value);
        }}
      >
        {moment.months().map((label, value) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </StyledMonthSelect>
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
      return (
        <StyledYearSelect
          selectedValue={month.year()}
          onChange={value => {
            onYearSelect(month, value);
          }}
        >
          {getYears(month.year())}
        </StyledYearSelect>
      );
    }

    if (monthYearSelectionMode === 'NONE') {
      return <StyledMonthYearHeader>{month.year()}</StyledMonthYearHeader>;
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
      dateRange
      hideDoWHeader={monthYearSelectionMode !== 'NONE'}
    >
      <ReactDateRangePicker
        startDate={value && value.startDate}
        endDate={value && value.endDate}
        onDatesChange={_onDatesChange}
        onFocusChange={_onFocusChange}
        disabled={isSubmitting || disabled}
        renderMonthElement={getHeaderEl}
        hideKeyboardShortcutsPanel={hideKeyboardShortcutsPanel}
        customInputIcon={hideInputIcon ? undefined : <CalendarIcon size="16" />}
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
  }),
  /** Toggle visibility of the calendar icon in the input */
  hideInputIcon: PropTypes.bool
};

DateRangePicker.defaultProps = {
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  monthYearSelectionMode: 'NONE',
  yearSelectDates: {
    startYear: new moment().subtract('year', 50).year(),
    endYear: new moment().year()
  },
  hideKeyboardShortcutsPanel: true
};

DateRangePicker.displayName = 'DateRangePicker';

export default DateRangePicker;
