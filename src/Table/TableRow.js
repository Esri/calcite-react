// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import PropTypes from 'prop-types';
import React from 'react';

import { StyledTableRow } from './Table-styled';

import { TableContext } from './Table';

const TableRow = ({ children, ...other }) => {
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
  /** The content of the component. */
  children: PropTypes.node,
  /** A style prop to render a blue Table. */
  blue: PropTypes.bool,
  /** A style prop to render a Table with striped rows. */
  striped: PropTypes.bool,
  /** A style prop to render Table with no borders or background color. */
  plain: PropTypes.bool,
  /** A style prop to render Table with no styling. */
  noTable: PropTypes.bool,
  /** A style prop to render a Table with no column borders. */
  noCol: PropTypes.bool,
  /** A style prop to render a Table with no row borders. */
  noRow: PropTypes.bool
};

TableRow.defaultProps = {};

TableRow.displayName = 'TableRow';

export default TableRow;
