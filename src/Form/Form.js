import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import { StyledForm } from './Form-styled';

const FormContext = createContext({ formContext: { noValidation: false } });

const Form = ({ children, horizontal, noValidation, ...other }) => {
  const formContext = {
    noValidation
  };

  const form = (
    <FormContext.Provider value={{ formContext }}>
      <StyledForm horizontal={horizontal} {...other}>
        {children}
      </StyledForm>
    </FormContext.Provider>
  );

  return form;
};

Form.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Display prop to make forms align items horizontally instead of vertically */
  horizontal: PropTypes.bool,
  /** If the FormControl doesn't need validation you can set this to true to tighten up the bottom margin */
  noValidation: PropTypes.bool
};

Form.defaultProps = {};

export { Form as default, FormContext };
