import PropTypes from 'prop-types';
import React from 'react';
import { StyledTextField } from './TextField-styled';

import { FormControlLabel } from '../Form';

const TextField = ({
  children,
  type,
  value,
  error,
  success,
  search,
  fullWidth,
  minimal,
  label,
  id,
  name,
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
      id={id}
      {...other}
    />
  );

  let textFieldWithLabel;
  if (label) {
    textFieldWithLabel = (
      <FormControlLabel
        htmlFor={id}
        name={name}
        error={error}
        success={success}
      >
        {label}
        {textField}
      </FormControlLabel>
    );
  }

  return label ? textFieldWithLabel : textField;
};

TextField.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
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
  /** Description TBD */
  value: PropTypes.node
};

TextField.defaultProps = {
  type: 'text'
};

export default TextField;
