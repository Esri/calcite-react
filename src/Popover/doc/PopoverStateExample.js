import React, { Component } from 'react';

import Popover from '../Popover';
import Button from '../../Button';
import Menu, { MenuTitle, MenuItem } from '../../Menu';

class PopoverStateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  togglePopover = () => {
    this.setState({
      open: !this.state.open
    });
  };

  closePopover = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Popover
        targetEl={<Button onClick={this.togglePopover}>Click Here</Button>}
        open={this.state.open}
        onRequestClose={this.closePopover}
      >
        <Menu style={{ maxWidth: '280px' }}>
          <MenuTitle>Some Options</MenuTitle>
          <MenuItem>Option 1 that has a really long text.</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
          <MenuTitle>More Options</MenuTitle>
          <MenuItem>Option 4</MenuItem>
          <MenuItem>Option 5</MenuItem>
        </Menu>
      </Popover>
    );
  }
}

export default PopoverStateExample;
