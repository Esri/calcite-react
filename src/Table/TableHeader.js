import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeader } from './Table-styled';

import { TableHeaderRow } from './';

const TableHeader = ({ children, blue, plain, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case TableHeaderRow:
        return React.cloneElement(child, {
          blue,
          plain
        });
      default:
        return child;
    }
  });

  const tableHeader = (
    <StyledTableHeader blue={blue} plain={plain} {...other}>
      {childrenWithProps}
    </StyledTableHeader>
  );

  return tableHeader;
};

TableHeader.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool,
  plain: PropTypes.bool
};

TableHeader.defaultProps = {
  blue: false,
  plain: false
};

export default TableHeader;
