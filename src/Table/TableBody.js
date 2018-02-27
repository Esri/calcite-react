import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableBody } from './Table-styled';

import { TableRow } from './';

const TableBody = ({ children, blue, striped, plain, noTable, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case TableRow:
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

  const tableBody = (
    <StyledTableBody noTable={noTable} {...other}>
      {childrenWithProps}
    </StyledTableBody>
  );

  return tableBody;
};

TableBody.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool,
  striped: PropTypes.bool,
  plain: PropTypes.bool,
  noTable: PropTypes.bool
};

TableBody.defaultProps = {
  blue: false,
  striped: false,
  plain: false,
  noTable: false
};

export default TableBody;
