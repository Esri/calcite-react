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
  /** AGOL user object */
  user: PropTypes.object,
  /** Text label for the Switch Account button */
  switchAccountLabel: PropTypes.string,
  /** Text label for the Sign Out button */
  signOutLabel: PropTypes.string
};

ArcgisAccountMenu.defaultProps = {
  switchAccountLabel: 'Switch Account',
  signOutLabel: 'Sign Out'
};

ArcgisAccountMenu.displayName = 'ArcgisAccountMenu';

export default ArcgisAccountMenu;
