import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';

import { StyledFieldset } from './Form-styled';

import { Legend, FormHelperText } from './';
import Radio from '../Radio';

const Fieldset = ({ children, name, horizontal, error, success, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case Radio:
        return React.cloneElement(child, {
          name: child.props.name || name,
          error,
          success
        });
      case Legend:
        return React.cloneElement(child, {
          horizontal,
          error,
          success
        });
      case FormHelperText:
        return React.cloneElement(child, {
          horizontal,
          error,
          success
        });
      default:
        return child;
    }
  });

  const fieldset = (
    <StyledFieldset horizontal={horizontal} {...other}>
      {childrenWithProps}
    </StyledFieldset>
  );

  return fieldset;
};

Fieldset.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  name: PropTypes.string.isRequired
};

Fieldset.defaultProps = {};

export default Fieldset;
