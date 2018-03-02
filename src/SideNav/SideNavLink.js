import PropTypes from 'prop-types';
import React from 'react';
import { StyledSideNavLink } from './SideNav-styled';

const SideNavLink = ({ children, ...other }) => {
  const sideNav = <StyledSideNavLink {...other}>{children}</StyledSideNavLink>;

  return sideNav;
};

SideNavLink.propTypes = {
  children: PropTypes.node
};

SideNavLink.defaultProps = {};

export default SideNavLink;
