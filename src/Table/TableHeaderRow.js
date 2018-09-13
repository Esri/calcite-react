import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledTableHeaderRow } from './Table-styled';

import { TableContext } from './Table';

const TableHeaderRow = ({ children, forwardedRef, ...other }) => {
  return (
    <TableContext.Consumer>
      {({ tableContext }) => (
        <StyledTableHeaderRow
          ref={forwardedRef}
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

TableHeaderRow.defaultProps = {};

export default withRefs(TableHeaderRow);
