import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeaderRow } from './Table-styled';

import { TableContext } from './Table';

const TableHeaderRow = ({ children, ...other }) => {
  // const childArray = React.Children.toArray(children);
  // const childrenWithProps = childArray.map((child, i) => {
  //   switch (getChildType(child)) {
  //     case TableHeaderCell:
  //       return React.cloneElement(child, {
  //         blue,
  //         plain,
  //         noTable,
  //         justified,
  //         noCol,
  //         noRow
  //       });
  //     default:
  //       return child;
  //   }
  // });

  return (
    <TableContext.Consumer>
      {({ tableContext }) => (
        <StyledTableHeaderRow
          blue={tableContext.blue}
          noCol={tableContext.noCol}
          noRow={tableContext.noRow}
          {...other}
        >
          {children}
        </StyledTableHeaderRow>
      )}
    </TableContext.Consumer>
  );
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
  justified: PropTypes.bool,
  /** Description TBD */
  noCol: PropTypes.bool,
  /** Description TBD */
  noRow: PropTypes.bool
};

TableHeaderRow.defaultProps = {};

export default TableHeaderRow;
