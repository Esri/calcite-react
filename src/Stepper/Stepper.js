import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import withRefs from '../utils/withRefs';

import { StyledStepper } from './Stepper-styled';
import { Step } from './';

const Stepper = ({
  children,
  currentStep,
  small,
  vertical,
  forwardedRef,
  ...other
}) => {
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

  return (
    <StyledStepper ref={forwardedRef} vertical={vertical} {...other}>
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

export default withRefs(Stepper);
