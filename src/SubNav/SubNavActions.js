import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledSubNavActions } from './SubNav-styled';

const SubNavActions = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledSubNavActions ref={forwardedRef} {...other}>
      {children}
    </StyledSubNavActions>
  );
};

SubNavActions.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

SubNavActions.defaultProps = {};

export default withRefs(SubNavActions);
