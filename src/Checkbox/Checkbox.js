import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledCheckbox,
  StyledCheckboxLabel,
  StyledCheckboxGroup
} from './Checkbox-styled';

const Checkbox = ({ children, value, name, checked, onChange, ...other }) => {
  let checkboxLabel;
  if (children) {
    checkboxLabel = <StyledCheckboxLabel>{children}</StyledCheckboxLabel>;
  }
  const checkbox = (
    <StyledCheckboxGroup>
      <StyledCheckbox
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        type="checkbox"
        {...other}
      />
      {checkboxLabel}
    </StyledCheckboxGroup>
  );

  return checkbox;
};

Checkbox.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** The form value for this checkbox */
  value: PropTypes.string,
  /** The name to be shared among checkboxes in a group */
  name: PropTypes.string,
  /** Whether the checkbox is currently checked */
  checked: PropTypes.bool,
  /** Event called when the checkbox value should be toggled */
  onChange: PropTypes.func
};

Checkbox.defaultProps = {};

export default Checkbox;
