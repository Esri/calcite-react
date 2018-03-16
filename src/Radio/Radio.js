import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledRadio,
  StyledRadioLabel,
  StyledRadioGroup
} from './Radio-styled';

const Radio = ({ children, value, name, checked, onChange, ...other }) => {
  let radioLabel;
  if (children) {
    radioLabel = <StyledRadioLabel>{children}</StyledRadioLabel>;
  }
  const radio = (
    <StyledRadioGroup>
      <StyledRadio
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        type="radio"
        {...other}
      />
      {radioLabel}
    </StyledRadioGroup>
  );

  return radio;
};

Radio.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  value: PropTypes.string,
  /** Description TBD */
  name: PropTypes.string,
  /** Description TBD */
  checked: PropTypes.bool
};

Radio.defaultProps = {};

export default Radio;
