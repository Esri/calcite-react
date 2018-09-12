import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';
import {
  StyledCheckbox,
  StyledCheckboxLabel,
  StyledCheckboxGroup
} from './Checkbox-styled';

const Checkbox = ({
  children,
  labelStyle,
  forwardedRef,
  checked,
  field,
  form,
  value,
  arrayHelpers = null,
  success = false,
  error = false,
  disabled = false,
  onChange,
  ...other
}) => {
  let name, touched, errors, values, isSubmitting, setFieldValue;
  if (field) {
    name = field.name;
    touched = form.touched;
    errors = form.errors;
    values = form.values;
    isSubmitting = form.isSubmitting;
    setFieldValue = form.setFieldValue;
  }

  let checkboxLabel;
  if (children) {
    checkboxLabel = (
      <StyledCheckboxLabel style={labelStyle}>{children}</StyledCheckboxLabel>
    );
  }

  const handleChange = e => {
    if (arrayHelpers) {
      if (e.target.checked) {
        arrayHelpers.push(value);
      } else {
        const i = values[name].indexOf(value);
        arrayHelpers.remove(i);
      }
    } else {
      if (setFieldValue) {
        setFieldValue(name, e.target.checked);
      } else {
        onChange(e);
      }
    }
  };

  const isChecked = () => {
    if (arrayHelpers) {
      return values[name].includes(value);
    }
    if (values) {
      return values[name] === true;
    }

    return checked;
  };

  const isSuccess = () => {
    if (touched) {
      return touched[name] && !errors[name] ? true : false;
    }
    return success;
  };

  const isError = () => {
    if (touched) {
      return touched[name] && errors[name] ? true : false;
    }
    return error;
  };

  const isDisabled = () => {
    return isSubmitting || disabled;
  };

  return (
    <StyledCheckboxGroup>
      <StyledCheckbox
        ref={forwardedRef}
        onChange={handleChange}
        checked={isChecked()}
        success={isSuccess()}
        error={isError()}
        disabled={isDisabled()}
        {...other}
        type="checkbox"
      />
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
