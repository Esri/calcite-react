import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { getChildType } from '../utils/helpers';
import withRefs from '../utils/withRefs';

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
  forwardedRef,
  ...other
}) => {
  const childrenWithProps = Children.map(children, (child, itemIndex) => {
    switch (getChildType(child)) {
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
      ref={forwardedRef}
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

export default withRefs(TabNav);
