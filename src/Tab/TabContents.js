import React from 'react';
import PropTypes from 'prop-types';
import { StyledTabContents } from './Tab-styled';
import TabSection from './TabSection';

const TabContents = ({
  children,
  activeTabIndex,
  gray,
  transparent,
  translucent,
  dark,
  ...other
}) => {
  const childrenWithProps = children.map((child, itemIndex) => {
    switch (child.type) {
      case TabSection:
        let section;
        if (itemIndex === activeTabIndex) {
          section = React.cloneElement(child, {
            key: itemIndex,
            index: itemIndex,
            activeTabIndex,
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
      {...other}
    >
      {childrenWithProps}
    </StyledTabContents>
  );
};

TabContents.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  activeTabIndex: PropTypes.number,
  gray: PropTypes.bool,
  transparent: PropTypes.bool,
  translucent: PropTypes.bool,
  dark: PropTypes.bool
};

export default TabContents;
