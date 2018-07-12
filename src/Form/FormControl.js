import PropTypes from 'prop-types';
import React from 'react';
import uniqid from 'uniqid';
import { StyledFormControl } from './Form-styled';

import { FormControlLabel, FormHelperText, Fieldset } from './';
import TextField from '../TextField';
import Select from '../Select';

const FormControl = ({ children, error, success, horizontal, ...other }) => {
  const _generatedId = uniqid();
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case FormControlLabel:
        return React.cloneElement(child, {
          error,
          success,
          _generatedId
        });
      case FormHelperText:
        return React.cloneElement(child, {
          error,
          success
        });
      case TextField:
        return React.cloneElement(child, {
          error,
          success,
          _generatedId
        });
      case Select:
        return React.cloneElement(child, {
          _generatedId
        });
      case Fieldset:
        return React.cloneElement(child, {
          error,
          success
        });
      default:
        return child;
    }
  });

  const formControl = (
    <StyledFormControl
      error={error}
      success={success}
      horizontal={horizontal}
      {...other}
    >
      {childrenWithProps}
    </StyledFormControl>
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

export default FormControl;
