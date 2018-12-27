import PropTypes from 'prop-types';
import React from 'react';

import { StyledTableHeaderRow } from './Table-styled';

import { TableContext } from './Table';

const TableHeaderRow = ({ children, ...other }) => {
  return (
    <TableContext.Consumer>
      {({ tableContext }) => (
        <StyledTableHeaderRow
          blue={tableContext.blue}
          noCol={tableContext.noCol}
          noRow={tableContext.noRow}
          {...other}
        >
          {children}
        </StyledTableHeaderRow>
      )}
    </TableContext.Consumer>
  );
};

TableHeaderRow.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** A style prop to render a blue Table. */
  blue: PropTypes.bool,
  /** A style prop to render Table with no borders or background color. */
  plain: PropTypes.bool,
  /** A style prop to render a Table with no column borders. */
  noCol: PropTypes.bool,
  /** A style prop to render a Table with no row borders. */
  noRow: PropTypes.bool
};

TableHeaderRow.defaultProps = {};

TableHeaderRow.displayName = 'TableHeaderRow';

export default TableHeaderRow;
