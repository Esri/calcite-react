import PropTypes from 'prop-types';
import React from 'react';

import {
  StyledListItem,
  StyledListTextContainer,
  StyledListSideContainer
} from './List-styled';

import { ListContext } from './List';

const ListItem = ({ children, leftNode, rightNode, ...other }) => {
  const getLeftNode = (listContext, leftNode) => {
    if (leftNode) {
      return (
        <StyledListSideContainer nested={listContext.nested}>
          {leftNode}
        </StyledListSideContainer>
      );
    }
  };

  const getRightNode = (listContext, rightNode) => {
    if (rightNode) {
      return (
        <StyledListSideContainer nested={listContext.nested}>
          {rightNode}
        </StyledListSideContainer>
      );
    }
  };

  return (
    <ListContext.Consumer>
      {({ listContext }) => (
        <StyledListItem nested={listContext.nested} {...other}>
          {getLeftNode(listContext, leftNode)}
          <StyledListTextContainer>{children}</StyledListTextContainer>
          {getRightNode(listContext, rightNode)}
        </StyledListItem>
      )}
    </ListContext.Consumer>
  );
};

ListItem.propTypes = {
  /** Content of the ListItem */
  children: PropTypes.node,
  /** Content placed to the left of the ListItem */
  leftNode: PropTypes.node,
  /** Content placed to the right of the ListItem */
  rightNode: PropTypes.node
};

ListItem.defaultProps = {};

ListItem.displayName = 'ListItem';

export default ListItem;
