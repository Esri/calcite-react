import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const TableHeaderRow = ({ children, ...other }) => {
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

  const tableHeaderRow = (
    <StyledTableHeaderRow {...other}>{children}</StyledTableHeaderRow>
  );

  return tableHeaderRow;
};

TableHeaderRow.propTypes = {
  children: PropTypes.node
};

TableHeaderRow.defaultProps = {};

export default TableHeaderRow;
