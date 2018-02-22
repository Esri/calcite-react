import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { unitCalc } from '../../utils/helpers';

const TableCell = ({ children, ...other }) => {
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

  const tableCell = <StyledTableCell {...other}>{children}</StyledTableCell>;

  return tableCell;
};

TableCell.propTypes = {
  children: PropTypes.node
};

TableCell.defaultProps = {};

export default TableCell;
