import PropTypes from 'prop-types';
import React from 'react';
import { StyledButtonGroup } from './Button-styled';
import Button from './';

const ButtonGroup = ({ children, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case Button:
        return React.cloneElement(child, {
          grouped: true
        });
      default:
        return child;
    }
  });

  const buttonGroup = (
    <StyledButtonGroup {...other}>{childrenWithProps}</StyledButtonGroup>
  );

  return buttonGroup;
};

ButtonGroup.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ButtonGroup.defaultProps = {};

export default ButtonGroup;
