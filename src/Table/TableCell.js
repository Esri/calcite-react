import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableCell } from './Table-styled';

import { TableContext } from './Table';

const TableCell = ({ children, ...other }) => {
  return (
    <TableContext.Consumer>
      {({ tableContext }) => (
        <StyledTableCell {...tableContext} {...other}>
          {children}
        </StyledTableCell>
      )}
    </TableContext.Consumer>
  );
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
  justified: PropTypes.bool,
  /** Description TBD */
  noCol: PropTypes.bool,
  /** Description TBD */
  noRow: PropTypes.bool
};

TableCell.defaultProps = {};

export default TableCell;
