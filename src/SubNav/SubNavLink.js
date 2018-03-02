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
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  active: PropTypes.bool
};

SubNavLink.defaultProps = {
  active: undefined
};

export default SubNavLink;
