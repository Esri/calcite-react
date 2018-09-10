import PropTypes from 'prop-types';
import React from 'react';
import { StyledSideNavLink } from './SideNav-styled';

const SideNavLink = ({ children, ...other }) => {
  return <StyledSideNavLink {...other}>{children}</StyledSideNavLink>;
};

SideNavLink.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

SideNavLink.defaultProps = {};

export default SideNavLink;
