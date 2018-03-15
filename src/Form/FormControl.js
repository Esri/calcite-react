import PropTypes from 'prop-types';
import React from 'react';
import { StyledFormControl } from './Form-styled';

import { FormControlLabel, FormHelperText, Fieldset } from './';
import TextField from '../TextField';

const FormControl = ({ children, error, success, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case FormControlLabel:
        return React.cloneElement(child, {
          error,
          success
        });
      case FormHelperText:
        return React.cloneElement(child, {
          error,
          success
        });
      case TextField:
        return React.cloneElement(child, {
          error,
          success
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
    <StyledFormControl error={error} success={success} {...other}>
      {childrenWithProps}
    </StyledFormControl>
  );

  return formControl;
};

FormControl.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

FormControl.defaultProps = {};

export default FormControl;
