import PropTypes from 'prop-types';
import React from 'react';
import { StyledTabTitle } from './Tab-styled';

const TabTitle = ({
  children,
  index,
  activeTabIndex,
  setActiveTabIndex,
  gray,
  transparent,
  translucent,
  dark,
  ...other
}) => {
  const handleSetActiveTabIndex = e => {
    setActiveTabIndex(e, index);
  };

  const tabTitle = (
    <StyledTabTitle
      gray={gray}
      transparent={transparent}
      translucent={translucent}
      dark={dark}
      onClick={handleSetActiveTabIndex}
      active={activeTabIndex === index}
      {...other}
    >
      {children}
    </StyledTabTitle>
  );

  return tabTitle;
};

TabTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  index: PropTypes.number,
  activeTabIndex: PropTypes.number,
  setActiveTabIndex: PropTypes.func,
  gray: PropTypes.bool,
  transparent: PropTypes.bool,
  translucent: PropTypes.bool,
  dark: PropTypes.bool
};

TabTitle.defaultProps = {};

export default TabTitle;
