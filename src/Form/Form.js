import PropTypes from 'prop-types';
import React from 'react';
import { StyledForm } from './Form-styled';
import { FormControl } from './';

const Form = ({ children, horizontal, noValidation, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case FormControl:
        return React.cloneElement(child, {
          noValidation: child.props.noValidation || noValidation
        });
      default:
        return child;
    }
  });

  const form = (
    <StyledForm horizontal={horizontal} {...other}>
      {childrenWithProps}
    </StyledForm>
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

export default Form;
