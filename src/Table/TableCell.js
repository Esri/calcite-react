import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableCell } from './Table-styled';

const TableCell = ({ children, ...other }) => {
  const tableCell = <StyledTableCell {...other}>{children}</StyledTableCell>;

  return tableCell;
};

TableCell.propTypes = {
  children: PropTypes.node
};

TableCell.defaultProps = {};

export default TableCell;
