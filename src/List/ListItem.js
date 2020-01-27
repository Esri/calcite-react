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

import { getAccessibleOnClickHandlers } from '../utils/helpers';

import {
  StyledListItem,
  StyledListTextContainer,
  StyledListSideContainer
} from './List-styled';

import { ListContext } from './List';

const ListItem = ({
  children,
  leftNode,
  rightNode,
  active,
  filterItem,
  onClick,
  ...other
}) => {
  const listContext = useContext(ListContext);

  const getLeftNode = leftNode => {
    if (leftNode) {
      return (
        <StyledListSideContainer
          minimal={listContext.minimal}
          selectable={listContext.selectable}
          nested={listContext.nested}
          active={active}
        >
          {leftNode}
        </StyledListSideContainer>
      );
    }
  };

  const getRightNode = rightNode => {
    if (rightNode) {
      return (
        <StyledListSideContainer
          minimal={listContext.minimal}
          selectable={listContext.selectable}
          nested={listContext.nested}
          active={active}
        >
          {rightNode}
        </StyledListSideContainer>
      );
    }
  };

  return (
    <StyledListItem
      minimal={listContext.minimal}
      multiSelect={listContext.multiSelect}
      selectable={listContext.selectable}
      nested={listContext.nested}
      filterItem={filterItem}
      active={active}
      tabIndex="0"
      role="listitem"
      {...getAccessibleOnClickHandlers(onClick)}
      {...other}
    >
      {getLeftNode(leftNode)}
      <StyledListTextContainer>{children}</StyledListTextContainer>
      {getRightNode(rightNode)}
    </StyledListItem>
  );
};

ListItem.propTypes = {
  /** Content of the ListItem. */
  children: PropTypes.node,
  /** Content placed to the left of the ListItem. */
  leftNode: PropTypes.node,
  /** Content placed to the right of the ListItem. */
  rightNode: PropTypes.node,
  /** Toggle the active style of a ListItem */
  active: PropTypes.bool,
  /** Add some styles to display a Search element properly inside a ListItem  */
  filterItem: PropTypes.bool,
  /** Toggle the disabled state of the ListItem, results in the item being unselectable and slightly lower opacity */
  disabled: PropTypes.bool
};

ListItem.defaultProps = {};

ListItem.displayName = 'ListItem';

export default ListItem;
