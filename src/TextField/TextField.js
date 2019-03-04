// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import {
  StyledTextField,
  StyledTextArea,
  StyledTextFieldAdornmentWrapper,
  StyledAdornmentWrapper
} from './TextField-styled';

import { FormControlContext } from '../Form/FormControl';

const TextField = forwardRef(
  (
    {
      children,
      type,
      value,
      minimal,
      fullWidth,
      id,
      onChange,
      onBlur,
      leftAdornment,
      leftAdornmentNoWrap,
      rightAdornment,
      rightAdornmentNoWrap,
      name,
      disabled,
      field,
      form,
      ...other
    },
    ref
  ) => {
    let touched, errors, isSubmitting;
    if (field) {
      name = field.name;
      touched = form.touched;
      errors = form.errors;
      isSubmitting = form.isSubmitting;
    }

    const getAdornment = function(adornment, adornmentNoWrap, direction) {
      if (
        adornment &&
        adornment.type &&
        (adornment.type.displayName === 'Button' ||
          adornment.type.displayName === 'Select' ||
          adornmentNoWrap)
      ) {
        return React.cloneElement(adornment, {
          ...adornment.props,
          minimal,
          isAdornment: true,
          adornmentDirection: direction
        });
      }

      return (
        adornment && (
          <StyledAdornmentWrapper
            adornmentDirection={direction}
            minimal={minimal}
          >
            {adornment}
          </StyledAdornmentWrapper>
        )
      );
    };

    const getValue = () => {
      return field ? field.value : value;
    };

    const handleChange = e => {
      if (field) {
        field.onChange(e);
      }

      if (onChange) {
        onChange(e);
      }
    };

    const handleBlur = e => {
      if (field) {
        field.onBlur(e);
      }

      if (onBlur) {
        onBlur(e);
      }
    };

    const isSuccess = formControlContext => {
      if (touched) {
        return touched[name] && !errors[name] ? true : false;
      }
      return formControlContext.success;
    };

    const isError = formControlContext => {
      if (touched) {
        return touched[name] && errors[name] ? true : false;
      }
      return formControlContext.error;
    };

    const isDisabled = () => {
      return isSubmitting || disabled;
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
              ref={ref}
              name={name}
              as={type === 'textarea' ? 'textarea' : 'input'}
              type={type}
              value={getValue()}
              minimal={minimal}
              fullWidth={fullWidth}
              id={id || formControlContext._generatedId}
              onChange={handleChange}
              onBlur={handleBlur}
              success={isSuccess(formControlContext)}
              error={isError(formControlContext)}
              disabled={isDisabled()}
              {...other}
            />
          )}
        </FormControlContext.Consumer>
      );
    }

    return (
      <FormControlContext.Consumer>
        {({ formControlContext }) => (
          <StyledTextFieldAdornmentWrapper
            fullWidth={fullWidth}
            minimal={minimal}
          >
            {getAdornment(leftAdornment, leftAdornmentNoWrap, 'left')}
            <TextFieldArea
              ref={ref}
              name={name}
              as={type === 'textarea' ? 'textarea' : 'input'}
              type={type}
              value={getValue()}
              minimal={minimal}
              fullWidth={fullWidth}
              hasAdornmentLeft={leftAdornment !== undefined}
              hasAdornmentRight={rightAdornment !== undefined}
              id={id || formControlContext._generatedId}
              onChange={handleChange}
              onBlur={handleBlur}
              success={isSuccess(formControlContext)}
              error={isError(formControlContext)}
              disabled={isDisabled()}
              {...other}
            />
            {getAdornment(rightAdornment, rightAdornmentNoWrap, 'right')}
          </StyledTextFieldAdornmentWrapper>
        )}
      </FormControlContext.Consumer>
    );
  }
);

TextField.propTypes = {
  /** HTML prop to be applied to the input. */
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
  /** HTML prop for the current value of the input. */
  value: PropTypes.node,
  /** The form control should show an error. */
  error: PropTypes.bool,
  /** The form control should show success. */
  success: PropTypes.bool,
  /** Option to display a magnifying glass icon and clear button to the input. */
  search: PropTypes.bool,
  /** Make the TextField 100% width. */
  fullWidth: PropTypes.bool,
  /** Display prop to style the TextField with a simplified UI. */
  minimal: PropTypes.bool,
  /** TextField and label should appear side by side instead of stacked. */
  horizontal: PropTypes.bool,
  /** HTML prop for the TextField; works together with a label's `for` prop. */
  id: PropTypes.string,
  /** HTML prop to name the form element. */
  name: PropTypes.string
};

TextField.defaultProps = {
  type: 'text'
};

TextField.displayName = 'TextField';

export default TextField;
