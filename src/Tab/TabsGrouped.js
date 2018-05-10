import PropTypes from 'prop-types';
import React from 'react';
import { StyledTab, StyledTabNav } from './Tab-styled';
import TabButtonGrouped from './TabButtonGrouped';
import TabSection from './TabSection';

const TabsGrouped = ({ children, ...props }) => {
  const childArray = React.Children.toArray(children);

  const setActiveTab = (e, index) => {
    props.onTabChange(index);
  };

  const tabSections = childArray.map((child, itemIndex) => {
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

  const renderTabs = childArray.map((child, itemIndex) => {
    return (
      <TabButtonGrouped
        key={itemIndex}
        index={itemIndex}
        args={child.props}
        setActiveTab={setActiveTab}
        {...props}
      />
    );
  });

  const renderTabSection = (
    <StyledTabNav {...props}>{tabSections}</StyledTabNav>
  );

  return (
    <StyledTab>
      {renderTabs}
      {renderTabSection}
    </StyledTab>
  );
};

TabsGrouped.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  activeTab: PropTypes.number
};

TabsGrouped.defaultProps = {
  activeTab: 0
};

export default TabsGrouped;
