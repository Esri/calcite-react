import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import {
  StyledListItem,
  StyledListTextContainer,
  StyledListSideContainer
} from './List-styled';

import { ListItemTitle, ListItemSubtitle } from './';

const ListItem = ({
  children,
  leftNode,
  rightNode,
  nested,
  open,
  ...other
}) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case ListItemTitle:
        return React.cloneElement(child, {
          nested
        });
      case ListItemSubtitle:
        return React.cloneElement(child, {
          nested
        });
      default:
        return child;
    }
  });

  let _leftNode;
  if (leftNode) {
    _leftNode = (
      <StyledListSideContainer nested={nested}>
        {leftNode}
      </StyledListSideContainer>
    );
  }

  let _rightNode;
  if (rightNode) {
    _rightNode = (
      <StyledListSideContainer nested={nested}>
        {rightNode}
      </StyledListSideContainer>
    );
  }

  const listItem = (
    <StyledListItem open={open} nested={nested} {...other}>
      {_leftNode}
      <StyledListTextContainer>{childrenWithProps}</StyledListTextContainer>
      {_rightNode}
    </StyledListItem>
  );

  return listItem;
};

ListItem.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ListItem.defaultProps = {};

export default ListItem;
