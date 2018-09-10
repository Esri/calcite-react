import PropTypes from 'prop-types';
import React from 'react';
import { StyledTopNavActions } from './TopNav-styled';

const TopNav = ({ children, ...other }) => {
  return <StyledTopNavActions {...other}>{children}</StyledTopNavActions>;
};

TopNav.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

TopNav.defaultProps = {};

export default TopNav;
