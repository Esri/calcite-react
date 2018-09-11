import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import {
  StyledTextField,
  StyledTextArea,
  StyledTextFieldAdornmentWrapper,
  StyledAdornmentWrapper
} from './TextField-styled';

import Button from '../Button';

import { FormControlContext } from '../Form/FormControl';

const TextField = ({
  children,
  type,
  minimal,
  id,
  onChange,
  leftAdornment,
  rightAdornment,
  forwardedRef,
  ...other
}) => {
  const getAdornment = function(adornment) {
    if (adornment && adornment.type === Button) {
      return React.cloneElement(adornment, {
        ...adornment.props,
        minimal,
        isAdornment: true
      });
    }

    return (
      adornment && (
        <StyledAdornmentWrapper minimal={minimal}>
          {adornment}
        </StyledAdornmentWrapper>
      )
    );
  };

  let TextFieldArea = StyledTextField;

  if (type === 'textarea') {
    TextFieldArea = StyledTextArea;
  }

  if (!leftAdornment && !rightAdornment) {
    return (
      <FormControlContext.Consumer>
        {({ formControlContext }) => (
          <TextFieldArea
            ref={forwardedRef}
            as={type === 'textarea' ? 'textarea' : 'input'}
            type={type}
            error={formControlContext.error}
            success={formControlContext.success}
            minimal={minimal}
            id={id || formControlContext._generatedId}
            onChange={onChange}
            {...other}
          />
        )}
      </FormControlContext.Consumer>
    );
  }

  return (
    <FormControlContext.Consumer>
      {({ formControlContext }) => (
        <StyledTextFieldAdornmentWrapper>
          {getAdornment(leftAdornment)}
          <TextFieldArea
            ref={forwardedRef}
            as={type === 'textarea' ? 'textarea' : 'input'}
            type={type}
            error={formControlContext.error}
            success={formControlContext.success}
            minimal={minimal}
            id={id || formControlContext._generatedId}
            onChange={onChange}
            {...other}
          />
          {getAdornment(rightAdornment)}
        </StyledTextFieldAdornmentWrapper>
      )}
    </FormControlContext.Consumer>
  );
};

TextField.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** HTML prop to be applied to the input */
  type: PropTypes.oneOf([
    'color',
    'email',
    'file',
    'image',
    'number',
    'password',
    'tel',
    'text',
    'url',
    'textarea'
  ]),
  /** HTML prop for the current value of the input */
  value: PropTypes.node,
  /** The form control should show an error */
  error: PropTypes.bool,
  /** The form control should show success */
  success: PropTypes.bool,
  /** Option to display a magnifying glass icon and clear button to the input */
  search: PropTypes.bool,
  /** Make the TextField 100% width */
  fullWidth: PropTypes.bool,
  /** Display prop to style the TextField with a simplified UI */
  minimal: PropTypes.bool,
  /** TextField and label should appear side by side instead of stacked */
  horizontal: PropTypes.bool,
  /** HTML prop for the TextField, works together with a label's `for` prop */
  id: PropTypes.string,
  /** HTML prop to name the form element */
  name: PropTypes.string
};

TextField.defaultProps = {
  type: 'text'
};

export default withRefs(TextField);
