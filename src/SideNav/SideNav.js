import PropTypes from 'prop-types';
import React from 'react';

import { StyledSideNav } from './SideNav-styled';

const SideNav = ({ children, ...other }) => {
  return <StyledSideNav {...other}>{children}</StyledSideNav>;
};

SideNav.propTypes = {
  /** The content of the component. */
  children: PropTypes.node
};

SideNav.defaultProps = {};

SideNav.displayName = 'SideNav';

export default SideNav;
