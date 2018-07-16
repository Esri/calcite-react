import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import { StyledTableRow } from './Table-styled';

import { TableCell } from './';

const TableRow = ({
  children,
  blue,
  striped,
  plain,
  noTable,
  justified,
  ...other
}) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case TableCell:
        return React.cloneElement(child, {
          blue,
          striped,
          plain,
          noTable,
          justified
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
  justified: PropTypes.bool
};

TableRow.defaultProps = {};

export default TableRow;
