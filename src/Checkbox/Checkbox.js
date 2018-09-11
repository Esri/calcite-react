import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';
import {
  StyledCheckbox,
  StyledCheckboxLabel,
  StyledCheckboxGroup
} from './Checkbox-styled';

const Checkbox = ({ children, labelStyle, forwardedRef, ...other }) => {
  let checkboxLabel;
  if (children) {
    checkboxLabel = (
      <StyledCheckboxLabel style={labelStyle}>{children}</StyledCheckboxLabel>
    );
  }

  return (
    <StyledCheckboxGroup>
      <StyledCheckbox ref={forwardedRef} {...other} type="checkbox" />
      {checkboxLabel}
    </StyledCheckboxGroup>
  );
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
  /** Style object passed down to the label */
  labelStyle: PropTypes.object,
  /** Event called when the checkbox value should be toggled */
  onChange: PropTypes.func
};

Checkbox.defaultProps = {};

export default withRefs(Checkbox);
