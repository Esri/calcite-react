import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeaderCell } from './Table-styled';

const TableHeaderCell = ({ children, blue, plain, noTable, ...other }) => {
  const tableHeaderCell = (
    <StyledTableHeaderCell
      blue={blue}
      plain={plain}
      noTable={noTable}
      {...other}
    >
      {children}
    </StyledTableHeaderCell>
  );

  return tableHeaderCell;
};

TableHeaderCell.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool,
  plain: PropTypes.bool,
  noTable: PropTypes.bool
};

TableHeaderCell.defaultProps = {
  blue: undefined,
  plain: undefined,
  noTable: undefined
};

export default TableHeaderCell;
