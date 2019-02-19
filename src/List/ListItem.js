import PropTypes from 'prop-types';
import React from 'react';

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
  ...other
}) => {
  const getLeftNode = (listContext, leftNode) => {
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

  const getRightNode = (listContext, rightNode) => {
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
    <ListContext.Consumer>
      {({ listContext }) => (
        <StyledListItem
          minimal={listContext.minimal}
          selectable={listContext.selectable}
          nested={listContext.nested}
          filterItem={filterItem}
          active={active}
          {...other}
        >
          {getLeftNode(listContext, leftNode)}
          <StyledListTextContainer>{children}</StyledListTextContainer>
          {getRightNode(listContext, rightNode)}
        </StyledListItem>
      )}
    </ListContext.Consumer>
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
  filterItem: PropTypes.bool
};

ListItem.defaultProps = {};

ListItem.displayName = 'ListItem';

export default ListItem;
