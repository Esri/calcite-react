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
import AccountIcon from '../icons/AccountIcon';

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
        <Avatar size={size} fontSize={size * 0.7}>
          <AccountIcon />
        </Avatar>
      );
    }
  };

  render() {
    return (
      <Popover
        targetEl={
          <ArcgisAccountControl
            onClick={this.toggleAccountControl}
            avatar={this._getAvatar(this.props.user, this.props.token, 32)}
            fullName={this.props.user.fullName}
            username={this.props.user.username}
            open={this.state.open}
          />
        }
        open={this.state.open}
        onRequestClose={this.closeAccountControl}
        placement="bottom-end"
        positionFixed
      >
        <ArcgisAccountMenu
          user={this.props.user}
          portal={this.props.portal}
          avatar={this._getAvatar(this.props.user, this.props.token, 120)}
          style={{ width: '410px' }}
          onRequestSwitchAccount={this.props.onRequestSwitchAccount}
          onRequestSignOut={this.props.onRequestSignOut}
        >
          {this.props.children}
        </ArcgisAccountMenu>
      </Popover>
    );
  }
}

ArcgisAccount.propTypes = {
  user: PropTypes.object.isRequired,
  token: PropTypes.string,
  onRequestSwitchAccount: PropTypes.func,
  onRequestSignOut: PropTypes.func
};

ArcgisAccount.defaultProps = {};

export default ArcgisAccount;
