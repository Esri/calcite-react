import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeader } from './Table-styled';

import { TableHeaderRow } from './';

const TableHeader = ({ children, blue, plain, noTable, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case TableHeaderRow:
        return React.cloneElement(child, {
          blue,
          plain,
          noTable
        });
      default:
        return child;
    }
  });

  const tableHeader = (
    <StyledTableHeader blue={blue} plain={plain} noTable={noTable} {...other}>
      {childrenWithProps}
    </StyledTableHeader>
  );

  return tableHeader;
};

TableHeader.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  blue: PropTypes.bool,
  /** Description TBD */
  plain: PropTypes.bool,
  /** Description TBD */
  noTable: PropTypes.bool
};

TableHeader.defaultProps = {};

export default TableHeader;
