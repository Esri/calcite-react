// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

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
  /** The text label for the Radio. */
  children: PropTypes.node,
  /** The form value for this Radio button. */
  value: PropTypes.string,
  /** The name to be shared among Radio buttons in a group. */
  name: PropTypes.string,
  /** Whether the Radio button is currently checked. */
  checked: PropTypes.bool,
  /** Event called when the Radio button value should be toggled. */
  onChange: PropTypes.func
};

Radio.defaultProps = {};

Radio.displayName = 'Radio';

export default Radio;
