import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { StyledTabNav } from './Tab-styled';

import { getChildType } from '../utils/helpers';

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
  const childrenWithProps = Children.map(children, (child, itemIndex) => {
    switch (getChildType(child)) {
      case 'TabTitle':
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
  /** The content of the component, should be a number of TabTitles */
  children: PropTypes.node
};

TabNav.defaultProps = {
  onTabChange: () => {}
};

TabNav.displayName = 'TabNav';

export default TabNav;
