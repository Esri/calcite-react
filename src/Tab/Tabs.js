import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import withRefs from '../utils/withRefs';

import { StyledTab } from './Tab-styled';
import TabNav from './TabNav';
import TabContents from './TabContents';

const Tabs = ({
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
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case TabNav:
        return React.cloneElement(child, {
          activeTabIndex,
          onTabChange,
          gray,
          transparent,
          translucent,
          dark
        });
      case TabContents:
        return React.cloneElement(child, {
          activeTabIndex,
          onTabChange,
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
    <StyledTab
      ref={forwardedRef}
      gray={gray}
      transparent={transparent}
      translucent={translucent}
      dark={dark}
      {...other}
    >
      {childrenWithProps}
    </StyledTab>
  );
};

Tabs.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  activeTabIndex: PropTypes.number,
  onTabChange: PropTypes.func,
  gray: PropTypes.bool,
  transparent: PropTypes.bool,
  translucent: PropTypes.bool,
  dark: PropTypes.bool
};

Tabs.defaultProps = {
  activeTabIndex: 0
};

export default withRefs(Tabs);
