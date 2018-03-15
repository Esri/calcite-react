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
      {...other}
    />
  );

  return textField;
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
