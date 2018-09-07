import PropTypes from 'prop-types';
import React from 'react';
import { StyledSlider } from './Slider-styled';

const Slider = ({ value, min, max, ...other }) => {
  return (
    <StyledSlider
      as="input"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      {...other}
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

export default Slider;
