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
  StyledSwitch,
  StyledSwitchInput,
  StyledSwitchTrack,
  StyledSwitchLabel
} from './Switch-styled';

const Switch = ({
  children,
  labelPosition,
  destructive,
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
  let name, fieldValue, touched, errors, isSubmitting, setFieldValue;
  if (field) {
    name = field.name;
    fieldValue = field.fieldValue;
    touched = form.touched;
    errors = form.errors;
    isSubmitting = form.isSubmitting;
    setFieldValue = form.setFieldValue;
  }

  const getSwitchLabel = children => {
    if (children) {
      return <StyledSwitchLabel>{children}</StyledSwitchLabel>;
    }
  };

  const handleChange = e => {
    if (setFieldValue) {
      setFieldValue(name, e.target.checked);
    } else if (onChange) {
      onChange(e);
    }
  };

  const isChecked = () => {
    if (field) {
      return fieldValue;
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
    <StyledSwitch>
      {labelPosition === 'before' ? getSwitchLabel(children) : null}
      <StyledSwitchInput
        onChange={handleChange}
        checked={isChecked()}
        success={isSuccess()}
        error={isError()}
        disabled={isDisabled()}
        {...other}
        type="checkbox"
      />
      <StyledSwitchTrack destructive={destructive} />
      {labelPosition === 'after' ? getSwitchLabel(children) : null}
    </StyledSwitch>
  );
};

Switch.propTypes = {
  /** The text label of the Switch. */
  children: PropTypes.node,
  /** The name to be shared among Switches in a group. */
  name: PropTypes.string,
  /** Whether the Switch is currently checked. */
  checked: PropTypes.bool,
  /** Event called when the Switch value should be toggled. */
  onChange: PropTypes.func,
  /** Should use a red highlight color. */
  destructive: PropTypes.bool,
  /** Position of the label text in relation to the input. */
  labelPosition: PropTypes.oneOf(['before', 'after'])
};

Switch.defaultProps = {
  labelPosition: 'after'
};

Switch.displayName = 'Switch';

export default Switch;
