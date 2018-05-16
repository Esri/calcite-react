import React from 'react';
import PropTypes from 'prop-types';
import { StyledTabContents } from './Tab-styled';
import TabSection from './TabSection';

const TabContents = ({
  children,
  gray,
  transparent,
  translucent,
  dark,
  ...props
}) => {
  const childrenWithProps = children.map((child, itemIndex) => {
    switch (child.type) {
      case TabSection:
        let section;
        if (itemIndex === props.activeTabIndex) {
          section = React.cloneElement(child, {
            key: itemIndex,
            index: itemIndex,
            activeTabIndex: props.activeTabIndex,
            gray,
            transparent,
            translucent,
            dark
          });
        }
        return section;
      default:
        return child;
    }
  });
  return (
    <StyledTabContents
      gray={gray}
      transparent={transparent}
      translucent={translucent}
      dark={dark}
    >
      {childrenWithProps}
    </StyledTabContents>
  );
};

TabContents.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

export default TabContents;
