import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import { StyledTableBody } from './Table-styled';

import { TableRow } from './';

const TableBody = ({
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
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case TableRow:
        return React.cloneElement(child, {
          blue,
          striped,
          plain,
          noTable,
          justified,
          noCol,
          noRow
        });
      default:
        return child;
    }
  });

  const tableBody = (
    <StyledTableBody noTable={noTable} {...other}>
      {childrenWithProps}
    </StyledTableBody>
  );

  return tableBody;
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

export default TableBody;
