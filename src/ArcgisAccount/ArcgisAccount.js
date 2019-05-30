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
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import ArcgisAccountControl from './ArcgisAccountControl';
import ArcgisAccountMenu from './ArcgisAccountMenu';

// App components
import Popover from '../Popover';
import Avatar from '../Avatar';

// Third-party components (buttons, icons, etc.)
import UserIcon from 'calcite-ui-icons-react/UserIcon';

// JSON

// CSS

class ArcgisAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openAccountControl = () => {
    this.setState({
      open: true
    });
  };

  closeAccountControl = () => {
    this.setState({
      open: false
    });
  };

  toggleAccountControl = () => {
    this.setState({
      open: !this.state.open
    });
  };

  _getThumbnail = (user, token, portal) => {
    const { username, thumbnail } = user;
    const _token = token || '';
    const _url = portal.allSSL ? 'https' : 'http';
    return `${_url}://${
      portal.portalHostname
    }/sharing/rest/community/users/${username}/info/${thumbnail}?token=${_token}`;
  };

  _getAvatar = (userInfo, token, portal, size) => {
    if (userInfo.thumbnail) {
      return (
        <Avatar src={this._getThumbnail(userInfo, token, portal)} size={size} />
      );
    } else if (userInfo.firstName && userInfo.lastName) {
      let initials = userInfo.firstName[0] + userInfo.lastName[0];
      initials = initials.toUpperCase();
      return (
        <Avatar size={size} fontSize={size * 0.5}>
          {initials}
        </Avatar>
      );
    } else {
      return (
        <Avatar size={size}>
          <UserIcon size={size * 0.7} />
        </Avatar>
      );
    }
  };

  render() {
    const {
      user,
      portal,
      token,
      onRequestSwitchAccount,
      onRequestSignOut,
      children,
      hideSwitchAccount,
      switchAccountLabel,
      signOutLabel,
      ...other
    } = this.props;

    return (
      <Popover
        targetEl={
          <ArcgisAccountControl
            onClick={this.toggleAccountControl}
            avatar={this._getAvatar(
              this.props.user,
              this.props.token,
              this.props.portal,
              32
            )}
            fullName={user.fullName}
            username={user.username}
            open={this.state.open}
            {...other}
          />
        }
        open={this.state.open}
        onRequestClose={this.closeAccountControl}
        placement="bottom-end"
        positionFixed
      >
        <ArcgisAccountMenu
          user={user}
          portal={portal}
          avatar={this._getAvatar(user, token, portal, 120)}
          style={{ width: '410px' }}
          switchAccountLabel={switchAccountLabel}
          signOutLabel={signOutLabel}
          hideSwitchAccount={hideSwitchAccount}
          onRequestSwitchAccount={onRequestSwitchAccount}
          onRequestSignOut={onRequestSignOut}
        >
          {children}
        </ArcgisAccountMenu>
      </Popover>
    );
  }
}

ArcgisAccount.propTypes = {
  /** AGOL user object. */
  user: PropTypes.object.isRequired,
  /** AGOL portal object. */
  portal: PropTypes.object.isRequired,
  /** AGOL login token. */
  token: PropTypes.string,
  /** Text label for the Switch Account button. */
  switchAccountLabel: PropTypes.string,
  /** Text label for the Sign Out button. */
  signOutLabel: PropTypes.string,
  /** Hide the button to switch accounts in the menu. */
  hideSwitchAccount: PropTypes.bool,
  /** Callback when the user selects the Switch Account button. */
  onRequestSwitchAccount: PropTypes.func,
  /** Callback when the user selects the Sign Out button. */
  onRequestSignOut: PropTypes.func
};

ArcgisAccount.defaultProps = {
  switchAccountLabel: 'Switch Account',
  signOutLabel: 'Sign Out',
  onRequestSwitchAccount: () => {},
  onRequestSignOut: () => {}
};

ArcgisAccount.displayName = 'ArcgisAccount';

export default ArcgisAccount;
