import React from 'react';
import PropTypes from 'prop-types';
import { StyledTabContents } from './Tab-styled';

const TabSection = ({ children, ...props }) => {
  const tabSection = (
    <StyledTabContents {...props}>{children}</StyledTabContents>
  );

  return tabSection;
};

TabSection.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

export default TabSection;
