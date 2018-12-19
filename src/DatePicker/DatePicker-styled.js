import styled, { css } from 'styled-components';
import Select from '../Select';

const StyledDatePickerContainer = styled.div`
  position: relative;
  box-sizing: border-box;

  &,
  & input {
    font-family: ${props => props.theme.type.avenirFamily};
    font-weight: 400 !important;
    box-sizing: border-box;
  }

  ${props =>
    props.hideDoWHeader &&
    css`
      [class^='DayPicker_weekHeaders'] {
        display: none;
      }
    `};
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
  StyledWeekDayList,
  StyledWeekDay
};
