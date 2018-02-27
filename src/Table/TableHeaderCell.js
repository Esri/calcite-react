import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeaderCell } from './Table-styled';

const TableHeaderCell = ({ children, ...other }) => {
  const tableHeaderCell = (
    <StyledTableHeaderCell {...other}>{children}</StyledTableHeaderCell>
  );

  return tableHeaderCell;
};

TableHeaderCell.propTypes = {
  children: PropTypes.node
};

TableHeaderCell.defaultProps = {};

export default TableHeaderCell;
