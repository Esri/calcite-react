import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import withRefs from '../utils/withRefs';

import { StyledStep, StyledStepTextContainer } from './Stepper-styled';
import { StepTitle, StepDescription } from './';
import StepIcon from './StepIcon';

const Step = withRefs(
  ({
    children,
    stepNumber,
    small,
    active,
    complete,
    error,
    icon,
    vertical,
    forwardedRef,
    ...other
  }) => {
    const childArray = React.Children.toArray(children);
    const childrenWithProps = childArray.map((child, i) => {
      switch (getChildType(child)) {
        case StepTitle:
          return React.cloneElement(child, {
            active,
            small,
            complete,
            error,
            vertical
          });
        case StepDescription:
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
      <StyledStep ref={forwardedRef} vertical={vertical} {...other}>
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
  }
);

Step.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  small: PropTypes.bool,
  active: PropTypes.bool,
  complete: PropTypes.bool,
  error: PropTypes.bool
};

Step.defaultProps = {};

Step.displayName = 'Step';

export default Step;
