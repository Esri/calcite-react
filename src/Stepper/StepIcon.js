import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import {
  StyledStepIcon,
  StepAvatarStyles,
  StepIconStyle,
  StepCustomIconStyles
} from './Stepper-styled';
import Avatar from '../Avatar';

import CheckIcon from 'calcite-ui-icons-react/CheckIcon';
import XIcon from 'calcite-ui-icons-react/XIcon';

const StepIcon = ({
  children,
  icon,
  small,
  active,
  complete,
  error,
  vertical,
  forwardedRef,
  ...other
}) => {
  const getIconContent = icon => {
    if (icon) {
      //Use custom icon if they give it to us
      const smallStyle = small ? { ...StepCustomIconStyles.small } : null;
      const completeStyle = complete
        ? { ...StepCustomIconStyles.complete }
        : null;
      const activeStyle = active ? { ...StepCustomIconStyles.active } : null;
      const errorStyle = error ? { ...StepCustomIconStyles.error } : null;

      return React.cloneElement(icon, {
        style: {
          ...StepCustomIconStyles.default,
          ...completeStyle,
          ...activeStyle,
          ...errorStyle,
          ...smallStyle
        }
      });
    } else {
      //Otherwise create an avatar based on the settings
      let avatarContent;
      const smallStyle = small ? { ...StepAvatarStyles.small } : null;
      const completeStyle = complete ? { ...StepAvatarStyles.complete } : null;
      const activeStyle = active ? { ...StepAvatarStyles.active } : null;
      const errorStyle = error ? { ...StepAvatarStyles.error } : null;

      if (error) {
        avatarContent = (
          <XIcon size={small ? 16 : 24} style={{ ...StepIconStyle }} />
        );
      } else if (complete) {
        avatarContent = (
          <CheckIcon size={small ? 16 : 24} style={{ ...StepIconStyle }} />
        );
      } else {
        avatarContent = children;
      }

      return (
        <Avatar
          style={{
            ...StepAvatarStyles.default,
            ...completeStyle,
            ...activeStyle,
            ...errorStyle,
            ...smallStyle
          }}
        >
          {avatarContent}
        </Avatar>
      );
    }
  };

  return (
    <StyledStepIcon
      ref={forwardedRef}
      small={small}
      complete={complete}
      vertical={vertical}
      {...other}
    >
      {getIconContent(icon)}
    </StyledStepIcon>
  );
};

StepIcon.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  small: PropTypes.bool,
  complete: PropTypes.bool,
  error: PropTypes.bool
};

StepIcon.defaultProps = {};

StepIcon.displayName = 'StepIcon';

export default withRefs(StepIcon);
