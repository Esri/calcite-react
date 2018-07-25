import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeaderCell } from './Table-styled';

import { TableContext } from './Table';

const TableHeaderCell = ({ children, ...other }) => {
  return (
    <TableContext.Consumer>
      {({ tableContext }) => (
        <StyledTableHeaderCell
          blue={tableContext.blue}
          plain={tableContext.plain}
          noTable={tableContext.noTable}
          justified={tableContext.justified}
          noCol={tableContext.noCol}
          noRow={tableContext.noRow}
          {...other}
        >
          {children}
        </StyledTableHeaderCell>
      )}
    </TableContext.Consumer>
  );
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
  justified: PropTypes.bool,
  /** Description TBD */
  noCol: PropTypes.bool,
  /** Description TBD */
  noRow: PropTypes.bool
};

TableHeaderCell.defaultProps = {};

export default TableHeaderCell;
