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
  /** The content of the component. */
  children: PropTypes.node
};

TableCell.defaultProps = {};

TableCell.displayName = 'TableCell';

export default TableCell;
