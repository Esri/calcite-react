import PropTypes from 'prop-types';
import React from 'react';

import { StyledStep, StyledStepTextContainer } from './Stepper-styled';
import StepIcon from './StepIcon';

import { getChildType } from '../utils/helpers';

const Step = ({
  children,
  stepNumber,
  small,
  active,
  complete,
  error,
  icon,
  vertical,
  ...other
}) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case 'StepTitle':
        return React.cloneElement(child, {
          active,
          small,
          complete,
          error,
          vertical
        });
      case 'StepDescription':
        return React.cloneElement(child, {
          active,
          small,
          complete,
          error,
          vertical
        });
      default:
        return child;
    }
  });

  return (
    <StyledStep vertical={vertical} {...other}>
      <StepIcon
        icon={icon}
        active={active}
        complete={complete}
        error={error}
        small={small}
        vertical={vertical}
      >
        {stepNumber}
      </StepIcon>
      <StyledStepTextContainer vertical={vertical}>
        {childrenWithProps}
      </StyledStepTextContainer>
    </StyledStep>
  );
};

Step.propTypes = {
  /** The content of the component; can be StepTitle or StepDescription. */
  children: PropTypes.node,
  /** A style prop used to render the Step in an error state with red text and X icon. */
  error: PropTypes.bool
};

Step.defaultProps = {};

Step.displayName = 'Step';

export default Step;
