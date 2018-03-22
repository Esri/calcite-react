import PropTypes from 'prop-types';
import React from 'react';
import { StyledTextField } from './TextField-styled';

const TextField = ({
  children,
  type,
  value,
  error,
  success,
  search,
  fullWidth,
  minimal,
  horizontal,
  id,
  _generatedId,
  name,
  onChange,
  ...other
}) => {
  const textField = (
    <StyledTextField
      type={type}
      value={value}
      error={error}
      success={success}
      search={search}
      fullWidth={fullWidth}
      minimal={minimal}
      id={id || _generatedId}
      onChange={onChange}
      {...other}
    />
  );

  return textField;
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
    'url'
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

export default TextField;
