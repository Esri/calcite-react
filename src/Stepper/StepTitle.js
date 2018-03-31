import PropTypes from 'prop-types';
import React from 'react';
import { StyledStepTitle } from './Stepper-styled';

const StepTitle = ({ children, ...other }) => {
  const stepTitle = <StyledStepTitle {...other}>{children}</StyledStepTitle>;

  return stepTitle;
};

StepTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

StepTitle.defaultProps = {};

export default StepTitle;
