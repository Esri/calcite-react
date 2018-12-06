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
  /** The content of the component */
  children: PropTypes.node,
  /** The html name property applied to the radios and checkboxes contained */
  name: PropTypes.string.isRequired
};

Fieldset.defaultProps = {};

Fieldset.displayName = 'Fieldset';

export { Fieldset as default, FieldsetContext };
