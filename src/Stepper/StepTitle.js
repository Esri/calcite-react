import PropTypes from 'prop-types';
import React from 'react';

import { StyledStepTitle } from './Stepper-styled';

const StepTitle = ({ children, ...other }) => {
  return <StyledStepTitle {...other}>{children}</StyledStepTitle>;
};

StepTitle.propTypes = {
  /** The text content of the component */
  children: PropTypes.node
};

StepTitle.defaultProps = {};

StepTitle.displayName = 'StepTitle';

export default StepTitle;
