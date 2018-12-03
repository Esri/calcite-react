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

TableBody.displayName = 'TableBody';

export default TableBody;
