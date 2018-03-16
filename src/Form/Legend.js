import PropTypes from 'prop-types';
import React from 'react';
import { StyledLegend } from './Form-styled';

const Legend = ({ children, horizontal, ...other }) => {
  const legend = (
    <StyledLegend horizontal={horizontal}>{children}</StyledLegend>
  );

  return legend;
};

Legend.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Display prop to make this element align items horizontally instead of vertically */
  horizontal: PropTypes.bool
};

Legend.defaultProps = {};

export default Legend;
