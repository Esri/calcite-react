import PropTypes from 'prop-types';
import React from 'react';

import { StyledStepper } from './Stepper-styled';

import { getChildType } from '../utils/helpers';

const Stepper = ({ children, currentStep, small, vertical, ...other }) => {
  const childArray = React.Children.toArray(children);
  let currentChildStepNumber = 0;
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case 'Step':
        currentChildStepNumber++;

        return React.cloneElement(child, {
          small,
          vertical,
          stepNumber: currentChildStepNumber,
          active: currentChildStepNumber === currentStep,
          complete: currentChildStepNumber < currentStep
        });
      default:
        return child;
    }
  });

  return (
    <StyledStepper vertical={vertical} {...other}>
      {childrenWithProps}
    </StyledStepper>
  );
};

Stepper.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  small: PropTypes.bool,
  vertical: PropTypes.bool
};

Stepper.defaultProps = {};

Stepper.displayName = 'Stepper';

export default Stepper;
