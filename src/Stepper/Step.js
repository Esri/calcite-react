import PropTypes from 'prop-types';
import React from 'react';
import { StyledStep, StyledStepTextContainer } from './Stepper-styled';
import { StepTitle, StepDescription } from './';
import StepIcon from './StepIcon';

const Step = ({
  children,
  stepNumber,
  small,
  active,
  complete,
  error,
  icon,
  ...other
}) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case StepTitle:
        return React.cloneElement(child, {
          active,
          small,
          complete,
          error
        });
      case StepDescription:
        return React.cloneElement(child, {
          active,
          small,
          complete,
          error
        });
      default:
        return child;
    }
  });

  const step = (
    <StyledStep {...other}>
      <StepIcon
        icon={icon}
        active={active}
        complete={complete}
        error={error}
        small={small}
      >
        {stepNumber}
      </StepIcon>
      <StyledStepTextContainer>{childrenWithProps}</StyledStepTextContainer>
    </StyledStep>
  );

  return step;
};

Step.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  small: PropTypes.bool,
  active: PropTypes.bool,
  complete: PropTypes.bool,
  error: PropTypes.bool
};

Step.defaultProps = {};

export default Step;
