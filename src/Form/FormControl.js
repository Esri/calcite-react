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

  // const childArray = React.Children.toArray(children);
  // const childrenWithProps = childArray.map((child, i) => {
  //   switch (getChildType(child)) {
  //     case FormControlLabel:
  //       return React.cloneElement(child, {
  //         error,
  //         success,
  //         _generatedId
  //       });
  //     case FormHelperText:
  //       return React.cloneElement(child, {
  //         error,
  //         success
  //       });
  //     case TextField:
  //       return React.cloneElement(child, {
  //         error,
  //         success,
  //         _generatedId
  //       });
  //     case Select:
  //       return React.cloneElement(child, {
  //         _generatedId
  //       });
  //     case Fieldset:
  //       return React.cloneElement(child, {
  //         error,
  //         success
  //       });
  //     default:
  //       return child;
  //   }
  // });

  const formControl = (
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

  return formControl;
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

export { FormControl as default, FormControlContext };
