import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledSideNavLink } from './SideNav-styled';

const SideNavLink = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledSideNavLink ref={forwardedRef} {...other}>
      {children}
    </StyledSideNavLink>
  );
};

SideNavLink.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

SideNavLink.defaultProps = {};

export default withRefs(SideNavLink);
