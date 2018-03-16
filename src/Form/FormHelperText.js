import PropTypes from 'prop-types';
import React from 'react';
import { StyledFormHelperText } from './Form-styled';

const FormHelperText = ({ children, error, success, ...other }) => {
  const formHelperText = (
    <StyledFormHelperText error={error} success={success} {...other}>
      {children}
    </StyledFormHelperText>
  );

  return formHelperText;
};

FormHelperText.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** The form helper text should display as an error */
  error: PropTypes.bool,
  /** The form helper text should display as successful */
  success: PropTypes.bool
};

FormHelperText.defaultProps = {};

export default FormHelperText;
