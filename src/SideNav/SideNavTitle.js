import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledSideNavTitle } from './SideNav-styled';

const SideNavTitle = withRefs(({ children, forwardedRef, ...other }) => {
  return (
    <StyledSideNavTitle ref={forwardedRef} {...other}>
      {children}
    </StyledSideNavTitle>
  );
});

SideNavTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

SideNavTitle.defaultProps = {};

SideNavTitle.displayName = 'SideNavTitle';

export default SideNavTitle;
