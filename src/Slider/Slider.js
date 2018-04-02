import PropTypes from 'prop-types';
import React from 'react';
import { StyledSlider } from './Slider-styled';

const Slider = ({ children, value, min, max, step, ...other }) => {
  const slider = (
    <StyledSlider
      type="range"
      value={value}
      min={min}
      max={max}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      step={step}
      {...other}
    />
  );

  return slider;
};

Slider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.node,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};

export default Slider;
