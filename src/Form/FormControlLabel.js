import PropTypes from 'prop-types';
import React from 'react';
import { StyledFormControlLabel } from './Form-styled';

const FormControlLabel = ({ children, htmlFor, error, success, ...other }) => {
  const formControlLabel = (
    <StyledFormControlLabel
      htmlFor={htmlFor}
      error={error}
      success={success}
      {...other}
    >
      {children}
    </StyledFormControlLabel>
  );

  return formControlLabel;
};

FormControlLabel.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

FormControlLabel.defaultProps = {};

export default FormControlLabel;
