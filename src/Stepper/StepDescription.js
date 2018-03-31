import PropTypes from 'prop-types';
import React from 'react';
import { StyledStepDescription } from './Stepper-styled';

const StepDescription = ({ children, ...other }) => {
  const stepDescription = (
    <StyledStepDescription {...other}>{children}</StyledStepDescription>
  );

  return stepDescription;
};

StepDescription.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

StepDescription.defaultProps = {};

export default StepDescription;
