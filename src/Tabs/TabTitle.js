import PropTypes from 'prop-types';
import React from 'react';

import { StyledTabTitle } from './Tab-styled';

const TabTitle = ({
  children,
  index,
  activeTabIndex,
  setActiveTabIndex,
  ...other
}) => {
  const handleSetActiveTabIndex = e => {
    setActiveTabIndex(e, index);
  };

  return (
    <StyledTabTitle
      onClick={handleSetActiveTabIndex}
      active={activeTabIndex === index}
      {...other}
    >
      {children}
    </StyledTabTitle>
  );
};

TabTitle.propTypes = {
  /** The text content of the component. */
  children: PropTypes.node
};

TabTitle.defaultProps = {};

TabTitle.displayName = 'TabTitle';

export default TabTitle;
