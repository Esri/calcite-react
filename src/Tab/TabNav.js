import React from 'react';
import PropTypes from 'prop-types';
import { StyledTabNav } from './Tab-styled';
import TabTitle from './TabTitle';

const TabNav = ({ children, ...props }) => {
  const childrenWithProps = children.map((child, itemIndex) => {
    switch (child.type) {
      case TabTitle:
        return React.cloneElement(child, {
          key: itemIndex,
          index: itemIndex,
          activeTabIndex: props.activeTabIndex,
          setActiveTabIndex: (e, itemIndex) => props.onTabChange(itemIndex)
        });
      default:
        return child;
    }
  });
  return <StyledTabNav>{childrenWithProps}</StyledTabNav>;
};

TabNav.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

export default TabNav;
