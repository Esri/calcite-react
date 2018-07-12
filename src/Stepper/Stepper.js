import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import { StyledStepper } from './Stepper-styled';
import { Step } from './';

const Stepper = ({ children, currentStep, small, vertical, ...other }) => {
  const childArray = React.Children.toArray(children);
  let currentChildStepNumber = 0;
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case Step:
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

  const stepper = (
    <StyledStepper vertical={vertical} {...other}>
      {childrenWithProps}
    </StyledStepper>
  );

  return stepper;
};

Stepper.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  small: PropTypes.bool,
  vertical: PropTypes.bool
};

Stepper.defaultProps = {};

export default Stepper;
