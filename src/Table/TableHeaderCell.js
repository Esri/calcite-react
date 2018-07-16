import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeaderCell } from './Table-styled';

const TableHeaderCell = ({
  children,
  blue,
  plain,
  noTable,
  justified,
  ...other
}) => {
  const tableHeaderCell = (
    <StyledTableHeaderCell
      blue={blue}
      plain={plain}
      noTable={noTable}
      justified={justified}
      {...other}
    >
      {children}
    </StyledTableHeaderCell>
  );

  return tableHeaderCell;
};

TableHeaderCell.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  blue: PropTypes.bool,
  /** Description TBD */
  plain: PropTypes.bool,
  /** Description TBD */
  noTable: PropTypes.bool,
  /** Description TBD */
  justified: PropTypes.bool
};

TableHeaderCell.defaultProps = {};

export default TableHeaderCell;
