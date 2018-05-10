import PropTypes from 'prop-types';
import React from 'react';
import { StyledTabSection, StyledTabTitle } from './Tab-styled';

const TabButtonGrouped = ({ args, ...props }) => {
  const setActiveTab = e => {
    props.setActiveTab(e, props.index);
  };
  const tabButton = (
    <StyledTabSection onClick={setActiveTab}>
      <StyledTabTitle active={props.activeTab === props.index}>
        {args.title}
      </StyledTabTitle>
    </StyledTabSection>
  );

  return tabButton;
};

TabButtonGrouped.propTypes = {
  title: PropTypes.string
};

TabButtonGrouped.defaultProps = {
  title: ''
};

export default TabButtonGrouped;
