import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableRow } from './Table-styled';

const TableRow = ({ children, ...other }) => {
  const tableRow = <StyledTableRow {...other}>{children}</StyledTableRow>;

  return tableRow;
};

TableRow.propTypes = {
  children: PropTypes.node
};

TableRow.defaultProps = {};

export default TableRow;
