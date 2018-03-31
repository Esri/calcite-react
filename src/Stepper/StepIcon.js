import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledStepIcon,
  StepAvatarStyles,
  StepIconStyle,
  StepCustomIconStyles
} from './Stepper-styled';
import Avatar from '../Avatar';
import CheckIcon from '../icons/CheckIcon';
import CloseIcon from '../icons/CloseIcon';

const StepIcon = ({
  children,
  icon,
  small,
  active,
  complete,
  error,
  ...other
}) => {
  let iconContent;
  if (icon) {
    //Use custom icon if they give it to us
    const smallStyle = small ? { ...StepCustomIconStyles.small } : null;
    const completeStyle = complete
      ? { ...StepCustomIconStyles.complete }
      : null;
    const activeStyle = active ? { ...StepCustomIconStyles.active } : null;
    const errorStyle = error ? { ...StepCustomIconStyles.error } : null;

    iconContent = React.cloneElement(icon, {
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
      avatarContent = <CloseIcon style={{ ...StepIconStyle }} />;
    } else if (complete) {
      avatarContent = <CheckIcon style={{ ...StepIconStyle }} />;
    } else {
      avatarContent = children;
    }

    iconContent = (
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

  return <StyledStepIcon {...other}>{iconContent}</StyledStepIcon>;
};

StepIcon.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  small: PropTypes.bool,
  complete: PropTypes.bool,
  error: PropTypes.bool
};

StepIcon.defaultProps = {};

export default StepIcon;
