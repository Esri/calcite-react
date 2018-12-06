import React from 'react';
import PropTypes from 'prop-types';

import { StyledTabSection } from './Tab-styled';

const TabSection = ({ children, ...other }) => {
  return <StyledTabSection {...other}>{children}</StyledTabSection>;
};

TabSection.propTypes = {
  /** The content of the component */
  children: PropTypes.node
};

TabSection.displayName = 'TabSection';

export default TabSection;
