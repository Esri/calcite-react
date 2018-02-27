import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeader } from './Table-styled';

const TableHeader = ({ children, ...other }) => {
  const tableHeader = (
    <StyledTableHeader {...other}>{children}</StyledTableHeader>
  );

  return tableHeader;
};

TableHeader.propTypes = {
  children: PropTypes.node
};

TableHeader.defaultProps = {};

export default TableHeader;
