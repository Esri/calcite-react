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
import React, { useContext } from 'react';

import { StyledTableHeaderCell } from './Table-styled';

import { TableContext } from './Table';

const TableHeaderCell = ({ children, ...other }) => {
  const tableContext = useContext(TableContext);
  return (
    <StyledTableHeaderCell
      blue={tableContext.blue}
      plain={tableContext.plain}
      noTable={tableContext.noTable}
      justified={tableContext.justified}
      noCol={tableContext.noCol}
      noRow={tableContext.noRow}
      {...other}
    >
      {children}
    </StyledTableHeaderCell>
  );
};

TableHeaderCell.propTypes = {
  /** The content of the component. */
  children: PropTypes.node
};

TableHeaderCell.defaultProps = {};

TableHeaderCell.displayName = 'TableHeaderCell';

export default TableHeaderCell;
