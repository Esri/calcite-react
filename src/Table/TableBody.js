import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledTableBody } from './Table-styled';

import { TableContext } from './Table';

const TableBody = ({ children, forwardedRef, ...other }) => {
  return (
    <TableContext.Consumer>
      {({ tableContext }) => (
        <StyledTableBody
          ref={forwardedRef}
          noTable={tableContext.noTable}
          {...other}
        >
          {children}
        </StyledTableBody>
      )}
    </TableContext.Consumer>
  );
};

TableBody.propTypes = {
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

TableBody.defaultProps = {};

export default withRefs(TableBody);
