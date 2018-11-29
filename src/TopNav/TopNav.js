import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledTopNav } from './TopNav-styled';

const TopNav = withRefs(({ children, forwardedRef, ...other }) => {
  return (
    <StyledTopNav ref={forwardedRef} {...other}>
      {children}
    </StyledTopNav>
  );
});

TopNav.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

TopNav.defaultProps = {};

TopNav.displayName = 'TopNav';

export default TopNav;
