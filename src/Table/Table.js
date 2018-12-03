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

Table.defaultProps = {};

Table.displayName = 'Table';

export { Table as default, TableContext };
