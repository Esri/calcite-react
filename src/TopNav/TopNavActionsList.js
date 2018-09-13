import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledTopNavActions } from './TopNav-styled';

const TopNav = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledTopNavActions ref={forwardedRef} {...other}>
      {children}
    </StyledTopNavActions>
  );
};

TopNav.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

TopNav.defaultProps = {};

export default withRefs(TopNav);
