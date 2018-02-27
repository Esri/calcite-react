import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeaderCell } from './Table-styled';

const TableHeaderCell = ({ children, blue, plain, ...other }) => {
  const tableHeaderCell = (
    <StyledTableHeaderCell blue={blue} plain={plain} {...other}>
      {children}
    </StyledTableHeaderCell>
  );

  return tableHeaderCell;
};

TableHeaderCell.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool,
  plain: PropTypes.bool
};

TableHeaderCell.defaultProps = {
  blue: false,
  plain: false
};

export default TableHeaderCell;
