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

import { StyledSlider } from './Slider-styled';

const Slider = ({
  value,
  min,
  max,
  field,
  form,
  success = false,
  error = false,
  disabled = false,
  ...other
}) => {
  let name, touched, errors, isSubmitting;
  if (field) {
    name = field.name;
    touched = form.touched;
    errors = form.errors;
    isSubmitting = form.isSubmitting;
  }

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
    <StyledSlider
      as="input"
      value={value}
      aria-valuenow={value}
      min={min}
      aria-valuemin={min}
      max={max}
      aria-valuemax={max}
      success={isSuccess()}
      error={isError()}
      disabled={isDisabled()}
      {...other}
      {...field}
      type="range"
    />
  );
};

Slider.propTypes = {
  /** Numeric value of the current value of the Slider. */
  value: PropTypes.number,
  /** Minimum allowable value. */
  min: PropTypes.number,
  /** Maximum allowable value. */
  max: PropTypes.number,
  /** Size of the steps on the Slider. */
  step: PropTypes.number
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};

Slider.displayName = 'Slider';

export default Slider;
