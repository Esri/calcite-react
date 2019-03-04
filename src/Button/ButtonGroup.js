// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

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
  /** The content of the component; should be a number of Buttons. */
  children: PropTypes.node,
  /** Style prop used to help adjust margins and positioning of Buttons when one is active. */
  isToggle: PropTypes.bool
};

ButtonGroup.defaultProps = {};

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup as default, ButtonGroupContext };
