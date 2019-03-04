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

// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import {
  StyledArcgisAccountMenu,
  StyledArcgisAccountContent,
  StyledArcgisAccountSignInMenu,
  StyledSwitchAccountButton,
  StyledSignOutButton
} from './ArcgisAccount-styled';
import ArcgisAccountContentInfo from './ArcgisAccountContentInfo';
import ArcgisAccountContentMenu from './ArcgisAccountContentMenu';

// App components

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const ArcgisAccountMenu = ({
  children,
  user,
  portal,
  avatar,
  hideSwitchAccount,
  switchAccountLabel,
  signOutLabel,
  onRequestSwitchAccount,
  onRequestSignOut,
  ...other
}) => {
  function getSwitchAccountBtn() {
    if (!hideSwitchAccount) {
      return (
        <StyledSwitchAccountButton
          grouped
          extraLarge
          onClick={onRequestSwitchAccount}
        >
          {switchAccountLabel}
        </StyledSwitchAccountButton>
      );
    }
    return;
  }

  return (
    <StyledArcgisAccountMenu {...other}>
      <StyledArcgisAccountContent>
        <ArcgisAccountContentInfo user={user} portal={portal} avatar={avatar} />
        <ArcgisAccountContentMenu>{children}</ArcgisAccountContentMenu>
      </StyledArcgisAccountContent>
      <StyledArcgisAccountSignInMenu>
        {getSwitchAccountBtn()}
        <StyledSignOutButton halo grouped extraLarge onClick={onRequestSignOut}>
          {signOutLabel}
        </StyledSignOutButton>
      </StyledArcgisAccountSignInMenu>
    </StyledArcgisAccountMenu>
  );
};

ArcgisAccountMenu.propTypes = {
  /** AGOL user object. */
  user: PropTypes.object,
  /** Text label for the Switch Account button. */
  switchAccountLabel: PropTypes.string,
  /** Text label for the Sign Out button. */
  signOutLabel: PropTypes.string
};

ArcgisAccountMenu.defaultProps = {
  switchAccountLabel: 'Switch Account',
  signOutLabel: 'Sign Out'
};

ArcgisAccountMenu.displayName = 'ArcgisAccountMenu';

export default ArcgisAccountMenu;
