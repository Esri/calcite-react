import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledSwitch,
  StyledSwitchInput,
  StyledSwitchTrack,
  StyledSwitchLabel
} from './Switch-styled';

const Switch = ({
  children,
  name,
  checked,
  onChange,
  labelPosition,
  destructive,
  ...other
}) => {
  let switchLabel;
  if (children) {
    switchLabel = <StyledSwitchLabel>{children}</StyledSwitchLabel>;
  }

  const switchComponent = (
    <StyledSwitch>
      {labelPosition === 'before' ? switchLabel : null}
      <StyledSwitchInput
        name={name}
        checked={checked}
        onChange={onChange}
        type="checkbox"
        {...other}
      />
      <StyledSwitchTrack destructive={destructive} />
      {labelPosition === 'after' ? switchLabel : null}
    </StyledSwitch>
  );

  return switchComponent;
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
