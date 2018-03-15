import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeaderRow } from './Table-styled';

import { TableHeaderCell } from './';

const TableHeaderRow = ({ children, blue, plain, noTable, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case TableHeaderCell:
        return React.cloneElement(child, {
          blue,
          plain,
          noTable
        });
      default:
        return child;
    }
  });

  const tableHeaderRow = (
    <StyledTableHeaderRow blue={blue} {...other}>
      {childrenWithProps}
    </StyledTableHeaderRow>
  );

  return tableHeaderRow;
};

TableHeaderRow.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  blue: PropTypes.bool,
  /** Description TBD */
  plain: PropTypes.bool,
  /** Description TBD */
  noTable: PropTypes.bool
};

TableHeaderRow.defaultProps = {};

export default TableHeaderRow;
