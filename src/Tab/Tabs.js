import PropTypes from 'prop-types';
import React from 'react';
import { StyledTab } from './Tab-styled';
import TabNav from './TabNav';
import TabContents from './TabContents';

const Tabs = ({ children, ...props }) => {
  const childArray = React.Children.toArray(children);

  const tabButtonarray = childArray.filter(child => {
    return child.type.name === 'TabNav';
  });
  const tabSectionArray = childArray.filter(child => {
    return child.type.name === 'TabContents';
  });

  const tabNav = tabButtonarray.map((child, itemIndex) => {
    switch (child.type) {
      case TabNav:
        return React.cloneElement(child, {
          ...props
        });
      default:
        return child;
    }
  });

  const tabContents = tabSectionArray.map((child, itemIndex) => {
    switch (child.type) {
      case TabContents:
        return React.cloneElement(child, {
          ...props
        });
      default:
        return child;
    }
  });

  return (
    <StyledTab>
      <TabNav {...props}>{tabNav}</TabNav>
      <TabContents {...props}>{tabContents}</TabContents>
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
