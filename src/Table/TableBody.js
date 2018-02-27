import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableBody } from './Table-styled';

import { TableRow } from './';

const TableBody = ({ children, blue, striped, plain, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case TableRow:
        return React.cloneElement(child, {
          blue,
          striped,
          plain
        });
      default:
        return child;
    }
  });

  const tableBody = (
    <StyledTableBody {...other}>{childrenWithProps}</StyledTableBody>
  );

  return tableBody;
};

TableBody.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool,
  striped: PropTypes.bool,
  plain: PropTypes.bool
};

TableBody.defaultProps = {
  blue: false,
  striped: false,
  plain: false
};

export default TableBody;
