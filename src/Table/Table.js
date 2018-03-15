import PropTypes from 'prop-types';
import React from 'react';
import { StyledTable } from './Table-styled';

import { TableHeader, TableBody } from './';

const Table = ({ children, blue, striped, plain, noTable, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case TableBody:
        return React.cloneElement(child, {
          blue,
          striped,
          plain,
          noTable
        });
      case TableHeader:
        return React.cloneElement(child, {
          blue,
          plain,
          noTable
        });
      default:
        return child;
    }
  });

  const table = (
    <StyledTable blue={blue} plain={plain} noTable={noTable} {...other}>
      {childrenWithProps}
    </StyledTable>
  );

  return table;
};

Table.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  blue: PropTypes.bool,
  /** Description TBD */
  striped: PropTypes.bool,
  /** Description TBD */
  plain: PropTypes.bool,
  /** Description TBD */
  noTable: PropTypes.bool
};

Table.defaultProps = {};

export default Table;
