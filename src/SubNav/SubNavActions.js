import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNavActions } from './SubNav-styled';

const SubNavActions = ({ children, ...other }) => {
  return <StyledSubNavActions {...other}>{children}</StyledSubNavActions>;
};

SubNavActions.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

SubNavActions.defaultProps = {};

export default SubNavActions;
