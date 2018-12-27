import PropTypes from 'prop-types';
import React from 'react';

import { StyledSideNavLink } from './SideNav-styled';

const SideNavLink = ({ children, ...other }) => {
  return <StyledSideNavLink {...other}>{children}</StyledSideNavLink>;
};

SideNavLink.propTypes = {
  /** The content of the component. */
  children: PropTypes.node
};

SideNavLink.defaultProps = {};

SideNavLink.displayName = 'SideNavLink';

export default SideNavLink;
