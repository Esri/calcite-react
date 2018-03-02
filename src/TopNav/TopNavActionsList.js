import PropTypes from 'prop-types';
import React from 'react';
import { StyledTopNavActions } from './TopNav-styled';

const TopNav = ({ children, ...other }) => {
  const topNavActions = (
    <StyledTopNavActions {...other}>{children}</StyledTopNavActions>
  );

  return topNavActions;
};

TopNav.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

TopNav.defaultProps = {};

export default TopNav;
