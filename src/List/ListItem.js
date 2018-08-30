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
        <StyledListItem
          open={listContext.open}
          nested={listContext.nested}
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
  /** Description TBD */
  children: PropTypes.node
};

ListItem.defaultProps = {};

export default ListItem;
