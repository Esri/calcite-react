import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import {
  StyledFormControlLabel,
  StyledFormControlLabelText
} from './Form-styled';

const FormControlLabel = ({
  children,
  htmlFor,
  error,
  success,
  horizontal,
  _generatedId,
  ...other
}) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case StyledFormControlLabelText:
        return React.cloneElement(child, {
          horizontal
        });
      default:
        return child;
    }
  });

  const formControlLabel = (
    <StyledFormControlLabel
      htmlFor={htmlFor || _generatedId}
      error={error}
      success={success}
      horizontal={horizontal}
      {...other}
    >
      {childrenWithProps}
    </StyledFormControlLabel>
  );

  return formControlLabel;
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

export default FormControlLabel;
