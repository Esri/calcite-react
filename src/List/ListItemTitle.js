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

import { StyledListTitle } from './List-styled';

import { ListContext } from './List';

const ListTitle = ({ children, ...other }) => {
  const listContext = useContext(ListContext);

  return (
    <StyledListTitle nested={listContext.nested} {...other}>
      {children}
    </StyledListTitle>
  );
};

ListTitle.propTypes = {
  /** Content of the ItemTitle. */
  children: PropTypes.node,
  /** Applied when the List is imbedded inside another List. */
  nested: PropTypes.bool
};

ListTitle.defaultProps = {};

ListTitle.displayName = 'ListTitle';

export default ListTitle;
