import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNavLink } from './SubNav-styled';

const SubNavLink = ({ children, active, ...other }) => {
  const subNavLink = (
    <StyledSubNavLink active={active} {...other}>
      {children}
    </StyledSubNavLink>
  );

  return subNavLink;
};

SubNavLink.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool
};

SubNavLink.defaultProps = {
  active: false
};

export default SubNavLink;
