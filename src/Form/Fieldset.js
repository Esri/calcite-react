import PropTypes from 'prop-types';
import React, { createContext } from 'react';

import { StyledFieldset } from './Form-styled';

import { FormControlContext } from './FormControl';
const FieldsetContext = createContext();

const Fieldset = ({ children, name, ...other }) => {
  const fieldsetContext = {
    name
  };
  // const childArray = React.Children.toArray(children);
  // const childrenWithProps = childArray.map((child, i) => {
  //   switch (getChildType(child)) {
  //     case Radio:
  //       return React.cloneElement(child, {
  //         name: child.props.name || name,
  //         error,
  //         success
  //       });
  //     case Legend:
  //       return React.cloneElement(child, {
  //         horizontal,
  //         error,
  //         success
  //       });
  //     case FormHelperText:
  //       return React.cloneElement(child, {
  //         horizontal,
  //         error,
  //         success
  //       });
  //     default:
  //       return child;
  //   }
  // });

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
