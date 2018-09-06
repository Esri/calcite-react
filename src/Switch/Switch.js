import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledSwitch,
  StyledSwitchInput,
  StyledSwitchTrack,
  StyledSwitchLabel
} from './Switch-styled';

const Switch = ({ children, labelPosition, destructive, ...other }) => {
  const getSwitchLabel = children => {
    if (children) {
      return <StyledSwitchLabel>{children}</StyledSwitchLabel>;
    }
  };

  return (
    <StyledSwitch>
      {labelPosition === 'before' ? getSwitchLabel(children) : null}
      <StyledSwitchInput {...other} type="checkbox" />
      <StyledSwitchTrack destructive={destructive} />
      {labelPosition === 'after' ? getSwitchLabel(children) : null}
    </StyledSwitch>
  );
};

Switch.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** The name to be shared among checkboxes in a group */
  name: PropTypes.string,
  /** Whether the checkbox is currently checked */
  checked: PropTypes.bool,
  /** Event called when the checkbox value should be toggled */
  onChange: PropTypes.func,
  /** Should use a red highlight color */
  destructive: PropTypes.bool,
  /** Position of the label text in relation to the input */
  labelPosition: PropTypes.oneOf(['before', 'after'])
};

Switch.defaultProps = {
  labelPosition: 'after'
};

export default Switch;
