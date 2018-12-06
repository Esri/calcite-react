import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import { StyledButtonGroup } from './Button-styled';

const ButtonGroupContext = createContext({
  buttonGroupContext: {
    grouped: undefined,
    isToggle: undefined
  }
});

const ButtonGroup = ({ children, isToggle, ...other }) => {
  const buttonGroupContext = {
    grouped: true,
    isToggle: isToggle
  };

  return (
    <ButtonGroupContext.Provider value={{ buttonGroupContext }}>
      <StyledButtonGroup isToggle={isToggle} {...other}>
        {children}
      </StyledButtonGroup>
    </ButtonGroupContext.Provider>
  );
};

ButtonGroup.propTypes = {
  /** The content of the component, should be a number of Buttons */
  children: PropTypes.node,
  /** Style prop used to help adjust margins and positioning of buttons when one is active */
  isToggle: PropTypes.bool
};

ButtonGroup.defaultProps = {};

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup as default, ButtonGroupContext };
