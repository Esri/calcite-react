import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableCell } from './Table-styled';

const TableCell = ({ children, blue, striped, plain, ...other }) => {
  const tableCell = (
    <StyledTableCell blue={blue} striped={striped} plain={plain} {...other}>
      {children}
    </StyledTableCell>
  );

  return tableCell;
};

TableCell.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool,
  striped: PropTypes.bool,
  plain: PropTypes.bool
};

TableCell.defaultProps = {
  blue: false,
  striped: false,
  plain: false
};

export default TableCell;
