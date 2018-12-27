import styled from 'styled-components';
import Select from '../Select';

const StyledDatePickerContainer = styled.div`
  position: relative;
  font-family: ${props => props.theme.type.avenirFamily};
  font-weight: 400 !important;
  box-sizing: border-box;

  .PresetDateRangePicker_button {
    border: 2px solid ${props => props.theme.palette.blue};
    color: ${props => props.theme.palette.blue};
  }
  .PresetDateRangePicker_button__selected {
    background: ${props => props.theme.palette.blue};
  }
  .SingleDatePickerInput__withBorder {
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.palette.lightGray};
  }
  .SingleDatePickerInput_clearDate__default:focus,
  .SingleDatePickerInput_clearDate__default:hover {
    background: ${props => props.theme.palette.lighterGray};
  }
  .SingleDatePickerInput_calendarIcon {
    margin: 0;
    padding: 9px 6px 9px 12px;
    display: inline-flex;
    align-items: center;
  }
  .DateInput {
    width: 95px;
  }
  .DateInput__small {
    width: 80px;
  }
  .DateInput__disabled {
    color: ${props => props.theme.palette.lighterGray};
  }
  .DateInput_input {
    font-size: 0.9375rem;
    line-height: 0.9375rem;
    color: #565a5c;
    padding: 8px 0.31rem 6px;
    font-family: ${props => props.theme.type.avenirFamily};
    font-weight: 400;
    box-sizing: border-box;
  }
  .DateInput_input__small {
    font-size: 0.875rem;
    line-height: 0.875rem;
    padding: 4px 0.31rem 2px;
    font-family: ${props => props.theme.type.avenirFamily};
    font-weight: 400;
    box-sizing: border-box;
  }
  .DateInput_input__focused {
    border-bottom: 2px solid ${props => props.theme.palette.blue};
  }
  .DateInput_fang {
    margin-top: -20px;
  }
  .DateInput_fangStroke {
    stroke: ${props => props.theme.palette.lightestGray};
  }
  .DateRangePickerInput {
    .DateInput_input {
      text-align: center;
    }
  }
  .DateRangePickerInput__withBorder {
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.palette.lightGray};
  }
  .DateRangePickerInput_arrow {
    color: #565a5c;
  }
  .DateRangePickerInput_arrow_svg {
    fill: #565a5c;
    height: 19px;
    width: 19px;
  }
  .DateRangePickerInput_clearDates_default:focus,
  .DateRangePickerInput_clearDates_default:hover {
    background: ${props => props.theme.palette.lighterGray};
  }
  .DateRangePickerInput_calendarIcon {
    margin: 0;
    padding: 9px 6px 9px 12px;
    display: inline-flex;
    align-items: center;
  }
`;

const StyledMonthElContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -37px;
`;

const StyledMonthYearSelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -4px 0 5px;
  min-height: 32px;
`;

const StyledMonthSelect = styled(Select).attrs({
  menuStyle: { minWidth: '100%', maxHeight: '200px' },
  minimal: true
})`
  margin-top: 0;
  height: 2rem;
  border-color: #e4e7e7;
  box-shadow: none;
  font-size: 0.9375rem;
  font-weight: bold;
  color: #565a5c;
  background-size: 11px;
  background-position: right 5px center;
`;

const StyledYearSelect = styled(StyledMonthSelect).attrs({
  virtualized: true
})`
  margin-left: 10px;
`;

const StyledMonthYearHeader = styled.h6`
  color: #565a5c;
  font-size: 0.9375rem;
  font-weight: bold;
  caption-side: initial;
  margin: 0 3px;
`;

const StyledWeekDayList = styled.ol`
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const StyledWeekDay = styled.li`
  color: ${props => props.theme.palette.darkerGray};
  font-size: smaller;
  width: 39px;
`;

export {
  StyledDatePickerContainer,
  StyledMonthElContainer,
  StyledMonthYearSelectContainer,
  StyledMonthSelect,
  StyledYearSelect,
  StyledMonthYearHeader,
  StyledWeekDayList,
  StyledWeekDay
};
