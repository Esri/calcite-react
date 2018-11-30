import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledStepDescription } from './Stepper-styled';

const StepDescription = withRefs(({ children, forwardedRef, ...other }) => {
  return (
    <StyledStepDescription ref={forwardedRef} {...other}>
      {children}
    </StyledStepDescription>
  );
});

StepDescription.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

StepDescription.defaultProps = {};

StepDescription.displayName = 'StepDescription';

export default StepDescription;
