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
  /** Description TBD */
  value: PropTypes.string,
  /** Description TBD */
  name: PropTypes.string,
  /** Description TBD */
  checked: PropTypes.bool
};

Checkbox.defaultProps = {};

export default Checkbox;
