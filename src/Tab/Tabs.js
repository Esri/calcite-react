import PropTypes from 'prop-types';
import React from 'react';
import { StyledTab } from './Tab-styled';
import TabNav from './TabNav';
import TabContents from './TabContents';

const Tabs = ({ children, ...props }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case TabNav:
        return React.cloneElement(child, {
          ...props
        });
      case TabContents:
        return React.cloneElement(child, {
          ...props
        });
      default:
        return child;
    }
  });

  return <StyledTab>{childrenWithProps}</StyledTab>;
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
