import React from 'react';
import PropTypes from 'prop-types';
import { StyledTabNav } from './Tab-styled';
import TabTitle from './TabTitle';

const TabNav = ({
  children,
  activeTabIndex,
  onTabChange,
  gray,
  transparent,
  translucent,
  dark,
  ...other
}) => {
  const childrenWithProps = children.map((child, itemIndex) => {
    switch (child.type) {
      case TabTitle:
        return React.cloneElement(child, {
          key: itemIndex,
          index: itemIndex,
          activeTabIndex,
          setActiveTabIndex: (e, itemIndex) => onTabChange(itemIndex),
          gray,
          transparent,
          translucent,
          dark
        });
      default:
        return child;
    }
  });
  return (
    <StyledTabNav
      gray={gray}
      transparent={transparent}
      translucent={translucent}
      dark={dark}
      {...other}
    >
      {childrenWithProps}
    </StyledTabNav>
  );
};

TabNav.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  activeTabIndex: PropTypes.number,
  onTabChange: PropTypes.func,
  gray: PropTypes.bool,
  transparent: PropTypes.bool,
  translucent: PropTypes.bool,
  dark: PropTypes.bool
};

export default TabNav;
