import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeaderRow } from './Table-styled';

import { TableHeaderCell } from './';

const TableHeaderRow = ({ children, blue, plain, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case TableHeaderCell:
        return React.cloneElement(child, {
          blue,
          plain
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
  plain: PropTypes.bool
};

TableHeaderRow.defaultProps = {
  blue: false,
  plain: false
};

export default TableHeaderRow;
