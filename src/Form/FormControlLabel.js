import PropTypes from 'prop-types';
import React from 'react';
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
  ...other
}) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
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
      htmlFor={htmlFor}
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
  children: PropTypes.node
};

FormControlLabel.defaultProps = {};

export default FormControlLabel;
