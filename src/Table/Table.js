import PropTypes from 'prop-types';
import React from 'react';
import { StyledTable } from './Table-styled';

const Table = ({ children, ...other }) => {
  const table = <StyledTable {...other}>{children}</StyledTable>;

  return table;
};

Table.propTypes = {
  children: PropTypes.node
};

Table.defaultProps = {};

export default Table;
