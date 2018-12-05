import PropTypes from 'prop-types';
import React, { Children } from 'react';

import { StyledTab } from './Tab-styled';

import { getChildType } from '../utils/helpers';

const Tabs = ({
  children,
  activeTabIndex,
  onTabChange,
  gray,
  transparent,
  translucent,
  dark,
  ...other
}) => {
  const childArray = Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case 'TabNav':
        return React.cloneElement(child, {
          activeTabIndex,
          onTabChange,
          gray,
          transparent,
          translucent,
          dark
        });
      case 'TabContents':
        return React.cloneElement(child, {
          activeTabIndex,
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
  /** The content of the component, should be TabNav and TabContents */
  children: PropTypes.node,
  /** The index of the tab that should be selected and visible */
  activeTabIndex: PropTypes.number,
  /** Function callback when a TabTitle is clicked */
  onTabChange: PropTypes.func,
  /** Style prop to render a gray Tab */
  gray: PropTypes.bool,
  /** Style prop to render a transparent Tab */
  transparent: PropTypes.bool,
  /** Style prop to render a translucent Tab */
  translucent: PropTypes.bool,
  /** Style prop to render a dark Tab */
  dark: PropTypes.bool
};

Tabs.defaultProps = {
  activeTabIndex: 0,
  onTabChange: () => {}
};

Tabs.displayName = 'Tabs';

export default Tabs;
