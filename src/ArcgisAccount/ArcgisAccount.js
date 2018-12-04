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

  _getThumbnail = (user, token) => {
    const { username, thumbnail } = user;
    const _token = token || '';
    return `https://www.arcgis.com/sharing/rest/community/users/${username}/info/${thumbnail}?token=${_token}`;
  };

  _getAvatar = (userInfo, token, size) => {
    if (userInfo.thumbnail) {
      return <Avatar src={this._getThumbnail(userInfo, token)} size={size} />;
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
      ...other
    } = this.props;

    return (
      <Popover
        targetEl={
          <ArcgisAccountControl
            onClick={this.toggleAccountControl}
            avatar={this._getAvatar(this.props.user, this.props.token, 32)}
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
          avatar={this._getAvatar(user, token, 120)}
          style={{ width: '410px' }}
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
  /** AGOL user object */
  user: PropTypes.object.isRequired,
  /** AGOL portal object */
  portal: PropTypes.object.isRequired,
  /** AGOL login token */
  token: PropTypes.string,
  /** Hide the button to switch accounts in the menu */
  hideSwitchAccount: PropTypes.bool,
  /** Callback when the user selects the Switch Account button */
  onRequestSwitchAccount: PropTypes.func,
  /** Callback when the user selects the Sign Out button */
  onRequestSignOut: PropTypes.func
};

ArcgisAccount.defaultProps = {
  onRequestSwitchAccount: () => {},
  onRequestSignOut: () => {}
};

ArcgisAccount.displayName = 'ArcgisAccount';

export default ArcgisAccount;
