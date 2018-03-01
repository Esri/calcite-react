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
  children: PropTypes.node,
  blue: PropTypes.bool,
  plain: PropTypes.bool,
  noTable: PropTypes.bool
};

TableHeaderRow.defaultProps = {
  blue: undefined,
  plain: undefined,
  noTable: undefined
};

export default TableHeaderRow;
