import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const TableRow = ({ children, ...other }) => {
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

  const tableRow = <StyledTableRow {...other}>{children}</StyledTableRow>;

  return tableRow;
};

TableRow.propTypes = {
  children: PropTypes.node
};

TableRow.defaultProps = {};

export default TableRow;
