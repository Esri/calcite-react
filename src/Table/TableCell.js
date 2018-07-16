import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableCell } from './Table-styled';

const TableCell = ({
  children,
  blue,
  striped,
  plain,
  noTable,
  justified,
  ...other
}) => {
  const tableCell = (
    <StyledTableCell
      blue={blue}
      striped={striped}
      plain={plain}
      noTable={noTable}
      justified={justified}
      {...other}
    >
      {children}
    </StyledTableCell>
  );

  return tableCell;
};

TableCell.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  blue: PropTypes.bool,
  /** Description TBD */
  striped: PropTypes.bool,
  /** Description TBD */
  plain: PropTypes.bool,
  /** Description TBD */
  noTable: PropTypes.bool,
  /** Description TBD */
  justified: PropTypes.bool
};

TableCell.defaultProps = {};

export default TableCell;
