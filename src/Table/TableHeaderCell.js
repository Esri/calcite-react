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
  /** The content of the component. */
  children: PropTypes.node
};

TableHeaderCell.defaultProps = {};

TableHeaderCell.displayName = 'TableHeaderCell';

export default TableHeaderCell;
