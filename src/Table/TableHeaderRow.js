import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeaderRow } from './Table-styled';

const TableHeaderRow = ({ children, ...other }) => {
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
