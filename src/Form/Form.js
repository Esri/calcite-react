import PropTypes from 'prop-types';
import React from 'react';
import { StyledForm } from './Form-styled';

const Form = ({ children, horizontal, ...other }) => {
  const form = (
    <StyledForm horizontal={horizontal} {...other}>
      {children}
    </StyledForm>
  );

  return form;
};

Form.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

Form.defaultProps = {};

export default Form;
