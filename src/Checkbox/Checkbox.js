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
  StyledDisplayCheckbox,
  StyledCheckboxInput,
  StyledCheckboxLabel,
  StyledCheckboxGroup,
  StyledCheckboxCheckIcon
} from './Checkbox-styled';

const Checkbox = ({
  children,
  labelStyle,
  checked,
  field,
  form,
  value,
  arrayHelpers = null,
  success = false,
  error = false,
  disabled = false,
  onChange,
  inputProps,
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
      }

      onChange(e);
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
      <StyledCheckboxInput
        onChange={handleChange}
        checked={isChecked()}
        success={isSuccess()}
        error={isError()}
        disabled={isDisabled()}
        {...other}
        type="checkbox"
      />
      <StyledDisplayCheckbox>
        {/* Manually include separate check icon pulled from calcite-components docs */}
        <StyledCheckboxCheckIcon>
          <path
            d="M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z"
            fill="white"
          />
        </StyledCheckboxCheckIcon>
      </StyledDisplayCheckbox>
      {checkboxLabel}
    </StyledCheckboxGroup>
  );
};

Checkbox.propTypes = {
  /** The label text of the Checkbox. */
  children: PropTypes.node,
  /** The form value for this Checkbox. */
  value: PropTypes.string,
  /** The name to be shared among Checkboxes in a group. */
  name: PropTypes.string,
  /** Whether the Checkbox is currently checked. */
  checked: PropTypes.bool,
  /** Whether the Checkbox is currently disabled. */
  disabled: PropTypes.bool,
  /** Style object passed down to the label. */
  labelStyle: PropTypes.object,
  /** Event called when the Checkbox value should be toggled. */
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  onChange: () => {}
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
