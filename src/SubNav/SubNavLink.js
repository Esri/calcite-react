import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledSubNavLink } from './SubNav-styled';

const SubNavLink = ({ children, active, forwardedRef, ...other }) => {
  return (
    <StyledSubNavLink ref={forwardedRef} active={active} {...other}>
      {children}
    </StyledSubNavLink>
  );
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

export default withRefs(SubNavLink);
