import PropTypes from 'prop-types';
import React from 'react';
import { StyledTopNav } from './TopNav-styled';

const TopNav = ({ children, ...other }) => {
  const topNav = <StyledTopNav {...other}>{children}</StyledTopNav>;

  return topNav;
};

TopNav.propTypes = {
  children: PropTypes.node
};

TopNav.defaultProps = {};

export default TopNav;
