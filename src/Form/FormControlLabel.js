import PropTypes from 'prop-types';
import React from 'react';
import { StyledFormControlLabel } from './Form-styled';

import { FormControlContext } from './FormControl';

const FormControlLabel = ({ children, htmlFor, ...other }) => {
  return (
    <FormControlContext.Consumer>
      {({ formControlContext }) => (
        <StyledFormControlLabel
          htmlFor={formControlContext._generatedId}
          error={formControlContext.error}
          success={formControlContext.success}
          horizontal={formControlContext.horizontal}
          {...other}
        >
          {children}
        </StyledFormControlLabel>
      )}
    </FormControlContext.Consumer>
  );
};

FormControlLabel.propTypes = {
  /** The text content of the component. */
  children: PropTypes.node,
  /** The for property to be applied to the label; should match a form element id. */
  htmlFor: PropTypes.string,
  /** The FormControlLabel should show an error. */
  error: PropTypes.bool,
  /** The FormControlLabel should show success. */
  success: PropTypes.bool,
  /** Display prop to make this element align items horizontally instead of vertically. */
  horizontal: PropTypes.bool
};

FormControlLabel.defaultProps = {};

FormControlLabel.displayName = 'FormControlLabel';

export default FormControlLabel;
