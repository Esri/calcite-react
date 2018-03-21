// Framework and third-party non-ui
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import ArcgisAccountControl from './ArcgisAccountControl';
import ArcgisAccountMenu from './ArcgisAccountMenu';

// App components
import Popover from '../Popover';

// Third-party components (buttons, icons, etc.)

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

  render() {
    return (
      <Popover
        targetEl={
          <ArcgisAccountControl
            onClick={this.toggleAccountControl}
            thumbnail={this._getThumbnail(this.props.user, this.props.token)}
            fullName={this.props.user.fullName}
            username={this.props.user.username}
            open={this.state.open}
          />
        }
        open={this.state.open}
        onRequestClose={this.closeAccountControl}
        placement="bottom-end"
      >
        <ArcgisAccountMenu
          user={this.props.user}
          thumbnail={this._getThumbnail(this.props.user, this.props.token)}
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
