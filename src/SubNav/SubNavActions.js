import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNavActions } from './SubNav-styled';

const SubNavActions = ({ children, ...other }) => {
  const subNavActions = (
    <StyledSubNavActions {...other}>{children}</StyledSubNavActions>
  );

  return subNavActions;
};

SubNavActions.propTypes = {
  children: PropTypes.node
};

SubNavActions.defaultProps = {};

export default SubNavActions;
