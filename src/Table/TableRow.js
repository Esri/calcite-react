import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableRow } from './Table-styled';

import { TableCell } from './';

const TableRow = ({ children, blue, striped, plain, noTable, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case TableCell:
        return React.cloneElement(child, {
          blue,
          striped,
          plain,
          noTable
        });
      default:
        return child;
    }
  });

  const tableRow = (
    <StyledTableRow
      blue={blue}
      striped={striped}
      plain={plain}
      noTable={noTable}
      {...other}
    >
      {childrenWithProps}
    </StyledTableRow>
  );

  return tableRow;
};

TableRow.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool,
  striped: PropTypes.bool,
  plain: PropTypes.bool,
  noTable: PropTypes.bool
};

TableRow.defaultProps = {
  blue: false,
  striped: false,
  plain: false,
  noTable: false
};

export default TableRow;
