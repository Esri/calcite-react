import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import { StyledForm } from './Form-styled';

const FormContext = createContext({ formContext: { noValidation: false } });

const Form = ({ children, noValidation, ...other }) => {
  const formContext = {
    noValidation
  };

  return (
    <FormContext.Provider value={{ formContext }}>
      <StyledForm {...other}>{children}</StyledForm>
    </FormContext.Provider>
  );
};

Form.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** Display prop to make Forms align items horizontally instead of vertically. */
  horizontal: PropTypes.bool,
  /** If the FormControl doesn't need validation, you can set this to true to tighten up the bottom margin. */
  noValidation: PropTypes.bool
};

Form.defaultProps = {};

Form.displayName = 'Form';

export { Form as default, FormContext };
