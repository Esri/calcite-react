import PropTypes from 'prop-types';
import React from 'react';
import { StyledLabel } from './Label-styled';

const Label = ({ children, ...other }) => {
  const label = <StyledLabel {...other}>{children}</StyledLabel>;

  return label;
};

Label.propTypes = {
  children: PropTypes.node
};

Label.defaultProps = {};

export default Label;
