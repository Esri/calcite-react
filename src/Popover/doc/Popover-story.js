import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Popover.md';

import Popover from '../Popover';
import Button from '../../Button';
import Menu, { MenuTitle, MenuItem } from '../../Menu';

storiesOf('Popover', module).add(
  'Basic',
  withInfo({
    text: doc,
    propTables: [Popover]
  })(() => {
    class PopoverStory extends Component {
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
          <GuideExample>
            <Popover
              targetEl={
                <Button onClick={this.togglePopover}>Click Here</Button>
              }
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
          </GuideExample>
        );
      }
    }

    PopoverStory.propTypes = {
      isStory: PropTypes.bool
    };
    return <PopoverStory />;
  })
);
