import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableHeader } from './Table-styled';

import { TableContext } from './Table';

const TableHeader = ({ children, ...other }) => {
  // const childArray = React.Children.toArray(children);
  // const childrenWithProps = childArray.map((child, i) => {
  //   switch (getChildType(child)) {
  //     case TableHeaderRow:
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
        <StyledTableHeader
          blue={tableContext.blue}
          plain={tableContext.plain}
          noTable={tableContext.noTable}
          noCol={tableContext.noCol}
          noRow={tableContext.noRow}
          {...other}
        >
          {children}
        </StyledTableHeader>
      )}
    </TableContext.Consumer>
  );
};

TableHeader.propTypes = {
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

TableHeader.defaultProps = {};

export default TableHeader;
