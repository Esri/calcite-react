import PropTypes from 'prop-types';
import React from 'react';
import { StyledStepTitle } from './Stepper-styled';

const StepTitle = ({ children, ...other }) => {
  return <StyledStepTitle {...other}>{children}</StyledStepTitle>;
};

StepTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

StepTitle.defaultProps = {};

export default StepTitle;
