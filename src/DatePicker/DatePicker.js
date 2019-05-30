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

import { SingleDatePicker } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';

import { MenuItem } from '../Menu';
import CalendarIcon from 'calcite-ui-icons-react/CalendarIcon';

const DatePicker = ({
  field,
  form,
  onFocusChange,
  onDateChange,
  disabled,
  name,
  value,
  children,
  monthYearSelectionMode,
  yearSelectDates,
  hideKeyboardShortcutsPanel,
  numberOfMonths,
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
      hideDoWHeader={monthYearSelectionMode !== 'NONE'}
    >
      <SingleDatePicker
        date={value}
        onDateChange={_onDateChange}
        onFocusChange={_onFocusChange}
        disabled={isSubmitting || disabled}
        renderMonthElement={getHeaderEl}
        hideKeyboardShortcutsPanel={hideKeyboardShortcutsPanel}
        numberOfMonths={numberOfMonths}
        customInputIcon={hideInputIcon ? undefined : <CalendarIcon size="16" />}
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
  id: PropTypes.string.isRequired,
  /** Determine if year and/or month dropdowns should be shown in the calendar popup */
  monthYearSelectionMode: PropTypes.oneOf(['NONE', 'MONTH', 'MONTH_YEAR']),
  /** The years that will be used to populate the year dropdown menu */
  yearSelectDates: PropTypes.shape({
    startYear: PropTypes.number,
    endYear: PropTypes.number
  }),
  /** The number of months to show in the popup */
  numberOfMonths: PropTypes.number,
  /** Toggle visibility of the calendar icon in the input */
  hideInputIcon: PropTypes.bool
};

DatePicker.defaultProps = {
  placeholder: 'Date',
  monthYearSelectionMode: 'NONE',
  yearSelectDates: {
    startYear: new moment().subtract('year', 50).year(),
    endYear: new moment().year()
  },
  hideKeyboardShortcutsPanel: true,
  numberOfMonths: 1
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
