import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledStepTitle } from './Stepper-styled';

const StepTitle = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledStepTitle ref={forwardedRef} {...other}>
      {children}
    </StyledStepTitle>
  );
};

StepTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

StepTitle.defaultProps = {};

StepTitle.displayName = 'StepTitle';

export default withRefs(StepTitle);
