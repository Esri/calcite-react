import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNav } from './SubNav-styled';

const SubNav = ({ children, ...other }) => {
  const subNav = <StyledSubNav {...other}>{children}</StyledSubNav>;

  return subNav;
};

SubNav.propTypes = {
  children: PropTypes.node
};

SubNav.defaultProps = {};

export default SubNav;
