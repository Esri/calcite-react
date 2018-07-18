import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import { StyledTable } from './Table-styled';

import { TableHeader, TableBody } from './';

const Table = ({
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
      case TableBody:
        return React.cloneElement(child, {
          blue,
          striped,
          plain,
          noTable,
          justified,
          noCol,
          noRow
        });
      case TableHeader:
        return React.cloneElement(child, {
          blue,
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

  const table = (
    <StyledTable
      blue={blue}
      plain={plain}
      noTable={noTable}
      noCol={noCol}
      noRow={noRow}
      {...other}
    >
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
  noTable: PropTypes.bool,
  /** Description TBD */
  justified: PropTypes.bool,
  /** Description TBD */
  noCol: PropTypes.bool,
  /** Description TBD */
  noRow: PropTypes.bool
};

Table.defaultProps = {};

export default Table;
