import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { StyledTabContents } from './Tab-styled';

import { getChildType } from '../utils/helpers';

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
    switch (getChildType(child)) {
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
  /** The content of the component; should be a number of TabSections. */
  children: PropTypes.node
};

TabContents.displayName = 'TabContents';

export default TabContents;
