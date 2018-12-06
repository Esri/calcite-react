import PropTypes from 'prop-types';
import React from 'react';

import { StyledTableHeader } from './Table-styled';

import { TableContext } from './Table';

const TableHeader = ({ children, ...other }) => {
  return (
    <TableContext.Consumer>
      {({ tableContext }) => (
        <StyledTableHeader
          blue={tableContext.blue}
          plain={tableContext.plain}
          noTable={tableContext.noTable}
          noCol={tableContext.noCol}
          noRow={tableContext.noRow}
          {...other}
        >
          {children}
        </StyledTableHeader>
      )}
    </TableContext.Consumer>
  );
};

TableHeader.propTypes = {
  /** The content of the component */
  children: PropTypes.node,
  /** A style prop to render a Table with no column borders */
  noCol: PropTypes.bool,
  /** A style prop to render a Table with no row borders */
  noRow: PropTypes.bool
};

TableHeader.defaultProps = {};

TableHeader.displayName = 'TableHeader';

export default TableHeader;
