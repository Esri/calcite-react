import PropTypes from 'prop-types';
import React from 'react';

import {
  StyledRadio,
  StyledRadioLabel,
  StyledRadioGroup
} from './Radio-styled';

import { FieldsetContext } from '../Form/Fieldset';

const Radio = ({
  children,
  checked,
  field,
  form,
  value,
  success = false,
  error = false,
  disabled = false,
  onChange,
  ...other
}) => {
  let name, touched, errors, values, isSubmitting, setFieldValue;
  if (field && form) {
    name = field.name;
    touched = form.touched;
    errors = form.errors;
    values = form.values;
    isSubmitting = form.isSubmitting;
    setFieldValue = form.setFieldValue;
  }

  const getRadioLabel = children => {
    if (children) {
      return <StyledRadioLabel>{children}</StyledRadioLabel>;
    }
  };

  const handleChange = e => {
    if (setFieldValue) {
      setFieldValue(name, value);
    } else if (onChange) {
      onChange(e);
    }
  };

  const isChecked = () => {
    if (values) {
      return values[name] === value;
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
    <FieldsetContext.Consumer>
      {({ fieldsetContext }) => (
        <StyledRadioGroup>
          <StyledRadio
            name={fieldsetContext.name}
            onChange={handleChange}
            checked={isChecked()}
            success={isSuccess()}
            error={isError()}
            disabled={isDisabled()}
            {...other}
            type="radio"
          />
          {getRadioLabel(children)}
        </StyledRadioGroup>
      )}
    </FieldsetContext.Consumer>
  );
};

Radio.propTypes = {
  /** The text label for the Radio */
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

Radio.defaultProps = {};

Radio.displayName = 'Radio';

export default Radio;
