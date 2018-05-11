import PropTypes from 'prop-types';
import React from 'react';
import { StyledTabSection, StyledTabTitle } from './Tab-styled';

const TabTitle = ({ children, ...props }) => {
  const setActiveTabIndex = e => {
    props.setActiveTabIndex(e, props.index);
  };
  const tabButton = (
    <StyledTabSection onClick={setActiveTabIndex}>
      <StyledTabTitle active={props.activeTabIndex === props.index}>
        {children}
      </StyledTabTitle>
    </StyledTabSection>
  );

  return tabButton;
};

TabTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

TabTitle.defaultProps = {};

export default TabTitle;
