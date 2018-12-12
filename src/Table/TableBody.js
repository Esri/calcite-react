import PropTypes from 'prop-types';
import React from 'react';

import { StyledTableBody } from './Table-styled';

import { TableContext } from './Table';

const TableBody = ({ children, ...other }) => {
  return (
    <TableContext.Consumer>
      {({ tableContext }) => (
        <StyledTableBody noTable={tableContext.noTable} {...other}>
          {children}
        </StyledTableBody>
      )}
    </TableContext.Consumer>
  );
};

TableBody.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** A style prop to render a TableBody with no column borders. */
  noCol: PropTypes.bool,
  /** A style prop to render a TableBody with no row borders. */
  noRow: PropTypes.bool
};

TableBody.defaultProps = {};

TableBody.displayName = 'TableBody';

export default TableBody;
