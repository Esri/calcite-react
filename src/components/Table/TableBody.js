import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableBody } from './Table-styled';

const TableBody = ({ children, ...other }) => {
  const tableBody = <StyledTableBody {...other}>{children}</StyledTableBody>;

  return tableBody;
};

TableBody.propTypes = {
  children: PropTypes.node
};

TableBody.defaultProps = {};

export default TableBody;
