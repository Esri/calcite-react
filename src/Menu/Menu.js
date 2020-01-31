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
import React, { createContext, forwardRef } from 'react';
import { useContextState } from '../utils/helpers';

import { StyledMenu } from './Menu-styled';

const MenuContext = createContext({
  extraSmall: undefined,
  small: undefined,
  large: undefined,
  extraLarge: undefined
});
MenuContext.displayName = 'MenuContext';

const Menu = forwardRef(
  ({ children, extraSmall, small, large, extraLarge, ...other }, ref) => {
    const menuContext = useContextState({
      extraSmall,
      small,
      large,
      extraLarge
    });

    return (
      <MenuContext.Provider value={menuContext}>
        <StyledMenu
          ref={ref}
          extraSmall={extraSmall}
          small={small}
          large={large}
          extraLarge={extraLarge}
          {...other}
        >
          {children}
        </StyledMenu>
      </MenuContext.Provider>
    );
  }
);

Menu.propTypes = {
  /** Content node for the Menu. */
  children: PropTypes.node,
  /** Style prop used to render an extra small Menu. */
  extraSmall: PropTypes.bool,
  /** Style prop used to render a small Menu. */
  small: PropTypes.bool,
  /** Style prop used to render a large Menu. */
  large: PropTypes.bool,
  /** Style prop used to render an extra large Menu. */
  extraLarge: PropTypes.bool
};

Menu.defaultProps = {};

Menu.displayName = 'Menu';

export { Menu as default, MenuContext };
