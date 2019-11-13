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

// styled-components
import styled, { css } from 'styled-components';

// Utils, common elements
import { fontSize, unitCalc } from '../utils/helpers';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components

// Icons

// Third party libraries

const StyledTable = styled.table`
  width: 100%;
  background-color: ${props => props.theme.palette.white};
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid ${props => props.theme.palette.lighterGray};
  text-align: initial;
  overflow: auto;
  ${fontSize(-2)};

  ${props =>
    props.blue &&
    css`
      border-color: ${props => props.theme.palette.blue};
    `};

  ${props =>
    props.plain &&
    css`
      border: none;
    `};

  ${props =>
    props.noTable &&
    css`
      width: auto;
      background-color: transparent;
      border-collapse: auto;
      border-spacing: 0;
      border: none;
      overflow: auto;
      margin-bottom: 0;
    `};

  ${props =>
    props.noCol &&
    css`
      border-left: none;
      border-right: none;
    `};

  ${props =>
    props.noRow &&
    css`
      border-top: none;
      border-bottom: none;
    `};
`;
StyledTable.defaultProps = { theme };

const StyledTableBody = styled.tbody`
  overflow: auto;
  width: 100%;

  ${props =>
    props.noTable &&
    css`
      border: none;
      background-color: transparent;
      overflow: auto;
      width: 100%;
      ${fontSize(0)};
    `};

  ${props =>
    props.noCol &&
    css`
      border-left: none;
      border-right: none;
    `};

  ${props =>
    props.noRow &&
    css`
      border-top: none;
      border-bottom: none;
    `};
`;
StyledTableBody.defaultProps = { theme };

const StyledTableCell = styled.td`
  font-weight: 300;
  border-left: 1px solid ${props => props.theme.palette.lighterGray};
  border-right: 1px solid ${props => props.theme.palette.lighterGray};
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')};

  ${props =>
    props.blue &&
    css`
      border-color: ${props => props.theme.palette.blue};
    `};

  ${props =>
    props.plain &&
    css`
      background-color: transparent;
      border: none;

      *:nth-child(even) > & {
        background-color: transparent;
      }
    `};

  ${props =>
    props.striped &&
    css`
      *:nth-child(even) > & {
        background-color: ${props.theme.palette.offWhite};
      }

      ${props.blue &&
        css`
          *:nth-child(even) > & {
            background-color: ${props.theme.palette.lightestBlue};
          }
        `};
    `};

  ${props =>
    props.noTable &&
    css`
      background-color: transparent;
      border: none;
    `};

  ${props =>
    props.noCol &&
    css`
      border-left: none;
      border-right: none;
    `};

  ${props =>
    props.noRow &&
    css`
      border-top: none;
      border-bottom: none;
    `};

  ${props =>
    props.justified &&
    css`
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    `};
`;
StyledTableCell.defaultProps = { theme };

const StyledTableHeader = styled.thead`
  background-color: ${props => props.theme.palette.lightestGray};
  border-bottom: 1px solid ${props => props.theme.palette.lighterGray};
  font-weight: 400;
  font-style: normal;
  ${fontSize(0)};

  ${props =>
    props.blue &&
    css`
      background-color: ${props => props.theme.palette.blue};
      border: none;
      border-bottom: 1px solid ${props => props.theme.palette.blue};
      color: ${props => props.theme.palette.white};
    `};

  ${props =>
    props.plain &&
    css`
      background-color: transparent;
      border: none;
    `};

  ${props =>
    props.noTable &&
    css`
      border: none;
      background-color: transparent;
      overflow: auto;
      width: 100%;
    `};

  ${props =>
    props.noCol &&
    css`
      border-left: none;
      border-right: none;
    `};

  ${props =>
    props.noRow &&
    css`
      border-top: none;
      border-bottom: none;
    `};
`;
StyledTableHeader.defaultProps = { theme };

const StyledTableHeaderCell = styled.th`
  font-weight: 300;
  border-left: 1px solid ${props => props.theme.palette.lighterGray};
  border-right: 1px solid ${props => props.theme.palette.lighterGray};
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
  text-align: left;

  html[dir='rtl'] & {
    text-align: right;
  }

  ${props =>
    props.blue &&
    css`
      border-color: ${props => props.theme.palette.blue};
    `};

  ${props =>
    props.plain &&
    css`
      background-color: transparent;
      border: none;
    `};

  ${props =>
    props.noTable &&
    css`
      background-color: transparent;
      border: none;
    `};

  ${props =>
    props.noCol &&
    css`
      border-left: none;
      border-right: none;
    `};

  ${props =>
    props.noRow &&
    css`
      border-top: none;
      border-bottom: none;
    `};

  ${props =>
    props.justified &&
    css`
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    `};
`;
StyledTableHeaderCell.defaultProps = { theme };

const StyledTableHeaderRow = styled.tr`
  ${props =>
    props.blue &&
    css`
      &:nth-child(even) {
        background-color: ${props => props.theme.palette.lighterBlue};
        color: ${props => props.theme.palette.typeColor};
      }
    `};
`;
StyledTableHeaderRow.defaultProps = { theme };

const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${props => props.theme.palette.lighterGray};

  ${props =>
    props.blue &&
    css`
      border-color: ${props => props.theme.palette.blue};
    `};

  ${props =>
    props.plain &&
    css`
      border: none;

      &:nth-child(even) {
        background-color: transparent;
      }
    `};

  ${props =>
    props.striped &&
    css`
      &:nth-child(even) {
        background-color: ${props.theme.palette.offWhite};

        a {
          color: ${props.theme.palette.darkBlue};
        }
      }

      ${props.blue &&
        css`
          &:nth-child(even) {
            background-color: ${props.theme.palette.lightestBlue};
          }
        `};
    `};

  ${props =>
    props.noTable &&
    css`
      border: none;
    `};

  ${props =>
    props.noCol &&
    css`
      border-left: none;
      border-right: none;
    `};

  ${props =>
    props.noRow &&
    css`
      border-top: none;
      border-bottom: none;
    `};
`;
StyledTableRow.defaultProps = { theme };

export {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHeader,
  StyledTableHeaderCell,
  StyledTableHeaderRow,
  StyledTableRow
};
