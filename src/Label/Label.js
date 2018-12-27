import PropTypes from 'prop-types';
import React from 'react';
import { StyledLabel } from './Label-styled';

const Label = ({ children, ...other }) => {
  return <StyledLabel {...other}>{children}</StyledLabel>;
};

Label.propTypes = {
  /** Content of the Label. */
  children: PropTypes.node,
  /** Blue style Label. */
  blue: PropTypes.bool,
  /** Green style Label. */
  green: PropTypes.bool,
  /** Yellow style Label. */
  yellow: PropTypes.bool,
  /** Red style Label. */
  red: PropTypes.bool
};

Label.defaultProps = {};

Label.displayName = 'Label';

export default Label;
