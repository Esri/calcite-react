import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledSlider } from './Slider-styled';

const Slider = ({
  value,
  min,
  max,
  forwardedRef,
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
      ref={forwardedRef}
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
  /** Numeric value of the current value of the Slider */
  value: PropTypes.number,
  /** Minimum allowable value */
  min: PropTypes.number,
  /** Maximum allowable value */
  max: PropTypes.number,
  /** Size of the steps on the Slider */
  step: PropTypes.number
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};

export default withRefs(Slider);
