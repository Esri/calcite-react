import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { StyledTabContents } from './Tab-styled';

const TabContents = ({
  children,
  activeTabIndex,
  gray,
  transparent,
  translucent,
  dark,
  ...other
}) => {
  const childrenWithProps = Children.map(children, (child, itemIndex) => {
    switch (child.type && child.type.displayName) {
      case 'TabSection':
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

TabContents.displayName = 'TabContents';

export default TabContents;
