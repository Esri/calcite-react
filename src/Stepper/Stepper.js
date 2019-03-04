// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

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
  /** The content of the component; can be a Step. */
  children: PropTypes.node,
  /** A style prop used to render small Steps. */
  small: PropTypes.bool,
  /** A style prop to position the Steps vertically. */
  vertical: PropTypes.bool
};

Stepper.defaultProps = {};

Stepper.displayName = 'Stepper';

export default Stepper;
