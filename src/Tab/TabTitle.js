import PropTypes from 'prop-types';
import React from 'react';
import { StyledTabTitle } from './Tab-styled';

const TabTitle = ({
  children,
  gray,
  transparent,
  translucent,
  dark,
  ...props
}) => {
  const setActiveTabIndex = e => {
    props.setActiveTabIndex(e, props.index);
  };
  const tabTitle = (
    <StyledTabTitle
      gray={gray}
      transparent={transparent}
      translucent={translucent}
      dark={dark}
      onClick={setActiveTabIndex}
      active={props.activeTabIndex === props.index}
    >
      {children}
    </StyledTabTitle>
  );

  return tabTitle;
};

TabTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

TabTitle.defaultProps = {};

export default TabTitle;
