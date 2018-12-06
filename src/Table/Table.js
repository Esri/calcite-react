import PropTypes from 'prop-types';
import React, { createContext } from 'react';

import { StyledTable } from './Table-styled';

const TableContext = createContext({
  tableContext: {
    blue: undefined,
    striped: undefined,
    plain: undefined,
    noTable: undefined,
    justified: undefined,
    noCol: undefined,
    noRow: undefined
  }
});

const Table = ({
  children,
  blue,
  striped,
  plain,
  noTable,
  justified,
  noCol,
  noRow,
  ...other
}) => {
  const tableContext = {
    blue,
    striped,
    plain,
    noTable,
    justified,
    noCol,
    noRow
  };

  return (
    <TableContext.Provider value={{ tableContext }}>
      <StyledTable
        blue={blue}
        plain={plain}
        noTable={noTable}
        noCol={noCol}
        noRow={noRow}
        {...other}
      >
        {children}
      </StyledTable>
    </TableContext.Provider>
  );
};

Table.propTypes = {
  /** The content of the component */
  children: PropTypes.node,
  /** A style prop to render a blue Table */
  blue: PropTypes.bool,
  /** A style prop to render a Table with striped rows */
  striped: PropTypes.bool,
  /** A style prop to render Table with no borders or background color */
  plain: PropTypes.bool,
  /** A style prop to render Table with no styling */
  noTable: PropTypes.bool,
  /** A style prop to remove leading and trailing padding on a Table */
  justified: PropTypes.bool,
  /** A style prop to render a Table with no column borders */
  noCol: PropTypes.bool,
  /** A style prop to render a Table with no row borders */
  noRow: PropTypes.bool
};

Table.defaultProps = {};

Table.displayName = 'Table';

export { Table as default, TableContext };
