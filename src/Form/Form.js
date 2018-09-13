import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import withRefs from '../utils/withRefs';
import { StyledForm } from './Form-styled';

const FormContext = createContext({ formContext: { noValidation: false } });

const Form = withRefs(({ children, noValidation, forwardedRef, ...other }) => {
  const formContext = {
    noValidation
  };

  return (
    <FormContext.Provider value={{ formContext }}>
      <StyledForm ref={forwardedRef} {...other}>
        {children}
      </StyledForm>
    </FormContext.Provider>
  );
});

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
