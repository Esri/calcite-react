import PropTypes from 'prop-types';
import React from 'react';

import { StyledTableRow } from './Table-styled';

import { TableContext } from './Table';

const TableRow = ({ children, ...other }) => {
  return (
    <TableContext.Consumer>
      {({ tableContext }) => (
        <StyledTableRow
          blue={tableContext.blue}
          striped={tableContext.striped}
          plain={tableContext.plain}
          noTable={tableContext.noTable}
          noCol={tableContext.noCol}
          noRow={tableContext.noRow}
          {...other}
        >
          {children}
        </StyledTableRow>
      )}
    </TableContext.Consumer>
  );
};

TableRow.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** A style prop to render a blue Table. */
  blue: PropTypes.bool,
  /** A style prop to render a Table with striped rows. */
  striped: PropTypes.bool,
  /** A style prop to render Table with no borders or background color. */
  plain: PropTypes.bool,
  /** A style prop to render Table with no styling. */
  noTable: PropTypes.bool,
  /** A style prop to render a Table with no column borders. */
  noCol: PropTypes.bool,
  /** A style prop to render a Table with no row borders. */
  noRow: PropTypes.bool
};

TableRow.defaultProps = {};

TableRow.displayName = 'TableRow';

export default TableRow;
