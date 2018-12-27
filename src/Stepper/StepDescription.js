import PropTypes from 'prop-types';
import React from 'react';

import { StyledStepDescription } from './Stepper-styled';

const StepDescription = ({ children, ...other }) => {
  return <StyledStepDescription {...other}>{children}</StyledStepDescription>;
};

StepDescription.propTypes = {
  /** The text content of the component. */
  children: PropTypes.node
};

StepDescription.defaultProps = {};

StepDescription.displayName = 'StepDescription';

export default StepDescription;
