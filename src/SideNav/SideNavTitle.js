import PropTypes from 'prop-types';
import React from 'react';
import { StyledSideNavTitle } from './SideNav-styled';

const SideNavTitle = ({ children, ...other }) => {
  const sideNavTitle = (
    <StyledSideNavTitle {...other}>{children}</StyledSideNavTitle>
  );

  return sideNavTitle;
};

SideNavTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

SideNavTitle.defaultProps = {};

export default SideNavTitle;
