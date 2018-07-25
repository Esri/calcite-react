import PropTypes from 'prop-types';
import React, { createContext } from 'react';

import { StyledFieldset } from './Form-styled';

import { FormControlContext } from './FormControl';
const FieldsetContext = createContext({
  fieldsetContext: {
    name: undefined
  }
});

const Fieldset = ({ children, name, ...other }) => {
  const fieldsetContext = {
    name
  };

  return (
    <FormControlContext.Consumer>
      {({ formControlContext }) => (
        <FieldsetContext.Provider value={{ fieldsetContext }}>
          <StyledFieldset horizontal={formControlContext.horizontal} {...other}>
            {children}
          </StyledFieldset>
        </FieldsetContext.Provider>
      )}
    </FormControlContext.Consumer>
  );
};

Fieldset.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  name: PropTypes.string.isRequired
};

Fieldset.defaultProps = {};

export { Fieldset as default, FieldsetContext };
