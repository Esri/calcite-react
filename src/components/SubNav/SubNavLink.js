import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNavLink } from './SubNav-styled';

const SubNavLink = ({ children, active, ...other }) => {
  const subNavLink = (
    <StyledSubNavLink active {...other}>
      {children}
    </StyledSubNavLink>
  );

  return subNavLink;
};

SubNavLink.propTypes = {
  children: PropTypes.node
};

SubNavLink.defaultProps = {};

export default SubNavLink;
