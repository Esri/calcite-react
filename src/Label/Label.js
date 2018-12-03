import PropTypes from 'prop-types';
import React from 'react';
import { StyledLabel } from './Label-styled';

const Label = ({ children, ...other }) => {
  return <StyledLabel {...other}>{children}</StyledLabel>;
};

Label.propTypes = {
  /** Content of the label */
  children: PropTypes.node,
  /** Blue style label */
  blue: PropTypes.bool,
  /** Green style label */
  green: PropTypes.bool,
  /** Yellow style label */
  yellow: PropTypes.bool,
  /** Red style label */
  red: PropTypes.bool
};

Label.defaultProps = {};

Label.displayName = 'Label';

export default Label;
