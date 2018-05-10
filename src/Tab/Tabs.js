import PropTypes from 'prop-types';
import React from 'react';
import { StyledTab, StyledTabNav } from './Tab-styled';
import TabButton from './TabButton';
import TabSection from './TabSection';

const Tabs = ({ children, ...props }) => {
  const childArray = React.Children.toArray(children);
  const tabButtonarray = childArray.filter(child => {
    return child.type.name === 'TabButton';
  });
  const tabSectionArray = childArray.filter(child => {
    return child.type.name === 'TabSection';
  });

  const tabSections = tabSectionArray.map((child, itemIndex) => {
    switch (child.type) {
      case TabSection:
        let section = null;
        if (itemIndex === props.activeTab) {
          section = React.cloneElement(child, {
            index: itemIndex,
            activeTab: props.activeTab
          });
        }
        return section;
      default:
        return child;
    }
  });
  const tabButtons = tabButtonarray.map((child, itemIndex) => {
    switch (child.type) {
      case TabButton:
        return React.cloneElement(child, {
          index: itemIndex,
          activeTab: props.activeTab,
          setActiveTab: (e, itemIndex) => props.onTabChange(itemIndex)
        });
      default:
        return child;
    }
  });

  const renderTabsChildren = (
    <StyledTabNav {...props}>
      {tabButtons} {tabSections}
    </StyledTabNav>
  );

  return <StyledTab>{renderTabsChildren}</StyledTab>;
};

Tabs.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  activeTab: PropTypes.number
};

Tabs.defaultProps = {
  activeTab: 0
};

export default Tabs;
