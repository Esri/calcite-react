import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledTabTitle } from './Tab-styled';

const TabTitle = ({
  children,
  index,
  activeTabIndex,
  setActiveTabIndex,
  forwardedRef,
  ...other
}) => {
  const handleSetActiveTabIndex = e => {
    setActiveTabIndex(e, index);
  };

  return (
    <StyledTabTitle
      ref={forwardedRef}
      onClick={handleSetActiveTabIndex}
      active={activeTabIndex === index}
      {...other}
    >
      {children}
    </StyledTabTitle>
  );
};

TabTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  index: PropTypes.number,
  activeTabIndex: PropTypes.number,
  setActiveTabIndex: PropTypes.func,
  /** Gray style TabSection */
  gray: PropTypes.bool,
  /** Transparent style TabSection */
  transparent: PropTypes.bool,
  /** Translucent style TabSection */
  translucent: PropTypes.bool,
  /** Dark style TabSection */
  dark: PropTypes.bool
};

TabTitle.defaultProps = {};

export default withRefs(TabTitle);
