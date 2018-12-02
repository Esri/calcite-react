import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import uniqid from 'uniqid';
import { StyledFormControl } from './Form-styled';

import { FormContext } from './Form';
const FormControlContext = createContext({
  formControlContext: {
    horizontal: undefined,
    error: undefined,
    success: undefined,
    _generatedId: undefined
  }
});

const FormControl = ({
  children,
  error,
  success,
  horizontal,
  noValidation,
  ...other
}) => {
  const _generatedId = uniqid();
  const formControlContext = {
    horizontal,
    error,
    success,
    _generatedId
  };

  return (
    <FormContext.Consumer>
      {({ formContext }) => (
        <FormControlContext.Provider value={{ formControlContext }}>
          <StyledFormControl
            error={error}
            success={success}
            horizontal={horizontal}
            noValidation={formContext.noValidation}
            {...other}
          >
            {children}
          </StyledFormControl>
        </FormControlContext.Provider>
      )}
    </FormContext.Consumer>
  );
};

FormControl.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** The form control should show an error */
  error: PropTypes.bool,
  /** The form control should show success */
  success: PropTypes.bool,
  /** The form control should layout as horizontal elements */
  horizontal: PropTypes.bool,
  /** If the FormControl doesn't need validation you can set this to true to tighten up the bottom margin */
  noValidation: PropTypes.bool
};

FormControl.defaultProps = {};

FormControl.displayName = 'FormControl';

export { FormControl as default, FormControlContext };
