import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableRow } from './Table-styled';

import { TableContext } from './Table';

const TableRow = ({ children, ...other }) => {
  // const childArray = React.Children.toArray(children);
  // const childrenWithProps = childArray.map((child, i) => {
  //   switch (getChildType(child)) {
  //     case TableCell:
  //       return React.cloneElement(child, {
  //         blue,
  //         striped,
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
        <StyledTableRow
          blue={tableContext.blue}
          striped={tableContext.striped}
          plain={tableContext.plain}
          noTable={tableContext.noTable}
          noCol={tableContext.noCol}
          noRow={tableContext.noRow}
          {...other}
        >
          {children}
        </StyledTableRow>
      )}
    </TableContext.Consumer>
  );
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
  justified: PropTypes.bool,
  /** Description TBD */
  noCol: PropTypes.bool,
  /** Description TBD */
  noRow: PropTypes.bool
};

TableRow.defaultProps = {};

export default TableRow;
