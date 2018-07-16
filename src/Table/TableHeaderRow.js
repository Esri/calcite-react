import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import { StyledTableHeaderRow } from './Table-styled';

import { TableHeaderCell } from './';

const TableHeaderRow = ({
  children,
  blue,
  plain,
  noTable,
  justified,
  ...other
}) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case TableHeaderCell:
        return React.cloneElement(child, {
          blue,
          plain,
          noTable,
          justified
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
  noTable: PropTypes.bool,
  /** Description TBD */
  justified: PropTypes.bool
};

TableHeaderRow.defaultProps = {};

export default TableHeaderRow;
