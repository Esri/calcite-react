import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledSideNav } from './SideNav-styled';

const SideNav = withRefs(({ children, forwardedRef, ...other }) => {
  return (
    <StyledSideNav ref={forwardedRef} {...other}>
      {children}
    </StyledSideNav>
  );
});

SideNav.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

SideNav.defaultProps = {};

SideNav.displayName = 'SideNav';

export default SideNav;
