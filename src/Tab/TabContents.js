import React from 'react';
import PropTypes from 'prop-types';
import { StyledTabContents } from './Tab-styled';
import TabSection from './TabSection';

const TabContents = ({ children, ...props }) => {
  const childrenWithProps = children.map((child, itemIndex) => {
    switch (child.type) {
      case TabSection:
        let section;
        if (itemIndex === props.activeTabIndex) {
          section = React.cloneElement(child, {
            key: itemIndex,
            index: itemIndex,
            activeTabIndex: props.activeTabIndex
          });
        }
        return section;
      default:
        return child;
    }
  });
  return <StyledTabContents>{childrenWithProps}</StyledTabContents>;
};

TabContents.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

export default TabContents;
