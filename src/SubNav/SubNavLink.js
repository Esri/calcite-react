import PropTypes from 'prop-types';
import React from 'react';

import { StyledSubNavLink } from './SubNav-styled';

const SubNavLink = ({ children, active, ...other }) => {
  return (
    <StyledSubNavLink active={active} {...other}>
      {children}
    </StyledSubNavLink>
  );
};

SubNavLink.propTypes = {
  /** The text content of the component */
  children: PropTypes.node,
  /** A style prop to represent a NavLink as active or selected */
  active: PropTypes.bool
};

SubNavLink.defaultProps = {
  active: undefined
};

SubNavLink.displayName = 'SubNavLink';

export default SubNavLink;
