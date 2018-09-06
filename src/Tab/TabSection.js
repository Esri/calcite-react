import React from 'react';
import PropTypes from 'prop-types';
import { StyledTabSection } from './Tab-styled';

const TabSection = ({ children, ...other }) => {
  return <StyledTabSection {...other}>{children}</StyledTabSection>;
};

TabSection.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Gray style TabSection */
  gray: PropTypes.bool,
  /** Transparent style TabSection */
  transparent: PropTypes.bool,
  /** Translucent style TabSection */
  translucent: PropTypes.bool,
  /** Dark style TabSection */
  dark: PropTypes.bool
};

export default TabSection;
