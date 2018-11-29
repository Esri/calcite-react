import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';
import { StyledFormControlLabel } from './Form-styled';

import { FormControlContext } from './FormControl';

const FormControlLabel = ({ children, htmlFor, forwardedRef, ...other }) => {
  return (
    <FormControlContext.Consumer>
      {({ formControlContext }) => (
        <StyledFormControlLabel
          ref={forwardedRef}
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
  /** Description TBD */
  children: PropTypes.node,
  /** The for property to be applied to the label, should match a form element id */
  htmlFor: PropTypes.string,
  /** The form control label should show an error */
  error: PropTypes.bool,
  /** The form control label should show success */
  success: PropTypes.bool,
  /** Display prop to make this element align items horizontally instead of vertically */
  horizontal: PropTypes.bool
};

FormControlLabel.defaultProps = {};

FormControlLabel.displayName = 'FormControlLabel';

export default withRefs(FormControlLabel);
