import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import withRefs from '../utils/withRefs';
import { StyledButtonGroup } from './Button-styled';

const ButtonGroupContext = createContext({
  buttonGroupContext: {
    grouped: undefined
  }
});

const ButtonGroup = withRefs(({ children, forwardedRef, ...other }) => {
  const buttonGroupContext = {
    grouped: true
  };

  return (
    <ButtonGroupContext.Provider value={{ buttonGroupContext }}>
      <StyledButtonGroup ref={forwardedRef} {...other}>
        {children}
      </StyledButtonGroup>
    </ButtonGroupContext.Provider>
  );
});

ButtonGroup.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ButtonGroup.defaultProps = {};

export { ButtonGroup as default, ButtonGroupContext };
