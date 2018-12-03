import PropTypes from 'prop-types';
import React from 'react';
import { StyledFormHelperText } from './Form-styled';

import { FormControlContext } from './FormControl';

const FormHelperText = ({ children, ...other }) => {
  return (
    <FormControlContext.Consumer>
      {({ formControlContext }) => (
        <StyledFormHelperText
          error={formControlContext.error}
          success={formControlContext.success}
          {...other}
        >
          {children}
        </StyledFormHelperText>
      )}
    </FormControlContext.Consumer>
  );
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

FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;
