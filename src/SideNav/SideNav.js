import PropTypes from 'prop-types';
import React from 'react';
import { StyledSideNav } from './SideNav-styled';

const SideNav = ({ children, ...other }) => {
  return <StyledSideNav {...other}>{children}</StyledSideNav>;
};

SideNav.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

SideNav.defaultProps = {};

export default SideNav;
