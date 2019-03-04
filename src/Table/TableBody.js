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

import { StyledTableBody } from './Table-styled';

import { TableContext } from './Table';

const TableBody = ({ children, ...other }) => {
  return (
    <TableContext.Consumer>
      {({ tableContext }) => (
        <StyledTableBody noTable={tableContext.noTable} {...other}>
          {children}
        </StyledTableBody>
      )}
    </TableContext.Consumer>
  );
};

TableBody.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** A style prop to render a TableBody with no column borders. */
  noCol: PropTypes.bool,
  /** A style prop to render a TableBody with no row borders. */
  noRow: PropTypes.bool
};

TableBody.defaultProps = {};

TableBody.displayName = 'TableBody';

export default TableBody;
