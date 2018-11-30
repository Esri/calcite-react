import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import withRefs from '../utils/withRefs';
import { StyledButtonGroup } from './Button-styled';

const ButtonGroupContext = createContext({
  buttonGroupContext: {
    grouped: undefined,
    isToggle: undefined
  }
});

const ButtonGroup = withRefs(
  ({ children, forwardedRef, isToggle, ...other }) => {
    const buttonGroupContext = {
      grouped: true,
      isToggle: isToggle
    };

    return (
      <ButtonGroupContext.Provider value={{ buttonGroupContext }}>
        <StyledButtonGroup ref={forwardedRef} isToggle={isToggle} {...other}>
          {children}
        </StyledButtonGroup>
      </ButtonGroupContext.Provider>
    );
  }
);

ButtonGroup.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  isToggle: PropTypes.bool
};

ButtonGroup.defaultProps = {};

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup as default, ButtonGroupContext };
