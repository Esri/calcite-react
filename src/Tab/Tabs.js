import PropTypes from 'prop-types';
import React from 'react';
import { StyledTab } from './Tab-styled';
import TabNav from './TabNav';
import TabContents from './TabContents';

const Tabs = ({ children, gray, transparent, translucent, dark, ...props }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case TabNav:
        return React.cloneElement(child, {
          gray,
          transparent,
          translucent,
          dark,
          ...props
        });
      case TabContents:
        return React.cloneElement(child, {
          gray,
          transparent,
          translucent,
          dark,
          ...props
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
    >
      {childrenWithProps}
    </StyledTab>
  );
};

Tabs.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  activeTabIndex: PropTypes.number
};

Tabs.defaultProps = {
  activeTabIndex: 0
};

export default Tabs;
