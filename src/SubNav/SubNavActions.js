import PropTypes from 'prop-types';
import React from 'react';

import { StyledSubNavActions } from './SubNav-styled';

const SubNavActions = ({ children, ...other }) => {
  return <StyledSubNavActions {...other}>{children}</StyledSubNavActions>;
};

SubNavActions.propTypes = {
  /** The content of the component. */
  children: PropTypes.node
};

SubNavActions.defaultProps = {};

SubNavActions.displayName = 'SubNavActions';

export default SubNavActions;
