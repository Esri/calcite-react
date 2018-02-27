import styled, { css } from 'styled-components';
import { unitCalc } from '../../utils/helpers';
// import { fontSize } from '../../utils/helpers';

const StyledTable = styled.table`
  width: 100%;
  background-color: ${props => props.theme.palette.white};
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid ${props => props.theme.palette.lighterGray};
  text-align: left;
  overflow: auto;

  font-size: 0.875rem;
  line-height: 1.55rem;
   {
    /*fontSize(2)*/
  }

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
    props['no-table'] &&
    css`
      width: auto;
      background-color: transparent;
      border-collapse: auto;
      border-spacing: 0;
      border: none;
      text-align: left;
      overflow: auto;
      margin-bottom: 0;
    `};
`;

const StyledTableBody = styled.tbody`
  overflow: auto;
  width: 100%;

  ${props =>
    props['no-table'] &&
    css`
      border: none;
      background-color: transparent;
      overflow: auto;
      width: 100%;
      font-size: 1rem;
      line-height: 1.55rem;
    `};
`;

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
    props['no-table'] &&
    css`
      background-color: transparent;
      border: none;
    `};
`;

const StyledTableHeader = styled.thead`
  background-color: ${props => props.theme.palette.lightestGray};
  border-bottom: 1px solid ${props => props.theme.palette.lighterGray};
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  line-height: 1.55rem;

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
    props['no-table'] &&
    css`
      border: none;
      background-color: transparent;
      overflow: auto;
      width: 100%;
    `};
`;

const StyledTableHeaderCell = styled.th`
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
    `};

  ${props =>
    props['no-table'] &&
    css`
      background-color: transparent;
      border: none;
    `};
`;

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

const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${props => props.theme.palette.lighterGray};
  text-align: left;

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
    props['no-table'] &&
    css`
      border: none;
      text-align: left;
    `};
`;

export {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHeader,
  StyledTableHeaderCell,
  StyledTableHeaderRow,
  StyledTableRow
};
