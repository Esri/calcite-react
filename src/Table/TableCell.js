import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableCell } from './Table-styled';

const TableCell = ({ children, blue, striped, plain, noTable, ...other }) => {
  const tableCell = (
    <StyledTableCell
      blue={blue}
      striped={striped}
      plain={plain}
      noTable={noTable}
      {...other}
    >
      {children}
    </StyledTableCell>
  );

  return tableCell;
};

TableCell.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool,
  striped: PropTypes.bool,
  plain: PropTypes.bool,
  noTable: PropTypes.bool
};

TableCell.defaultProps = {
  blue: false,
  striped: false,
  plain: false,
  noTable: false
};

export default TableCell;
