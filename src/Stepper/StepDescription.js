import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledStepDescription } from './Stepper-styled';

const StepDescription = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledStepDescription ref={forwardedRef} {...other}>
      {children}
    </StyledStepDescription>
  );
};

StepDescription.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

StepDescription.defaultProps = {};

export default withRefs(StepDescription);
