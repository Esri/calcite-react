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
  /** The text content of the component. */
  children: PropTypes.node,
  /** The FormHelperText should display as an error. */
  error: PropTypes.bool,
  /** The FormHelperText should display as successful. */
  success: PropTypes.bool
};

FormHelperText.defaultProps = {};

FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;
