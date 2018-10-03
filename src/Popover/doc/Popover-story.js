import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Popover.md';

import Popover from '../Popover';
import Button from '../../Button';
import Menu, { MenuTitle, MenuItem } from '../../Menu';
import Panel from '../../Panel';
import Select from '../../Select';
import MultiSelect from '../../MultiSelect';
import Form, { FormControl, FormControlLabel } from '../../Form';

storiesOf('Popover', module)
  .add(
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
  )
  .add(
    'Overflow Container',
    withInfo({
      text: doc,
      propTables: [Popover]
    })(() => {
      class PopoverStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            open1: false,
            open2: false,
            open3: false
          };
        }

        togglePopover = openId => {
          this.setState({
            [openId]: !this.state[openId]
          });
        };

        closePopover = openId => {
          this.setState({
            [openId]: false
          });
        };

        render() {
          return (
            <Fragment>
              <GuideExample style={{ overflow: 'auto' }}>
                <Popover
                  targetEl={
                    <Button onClick={() => this.togglePopover('open1')}>
                      Click Here
                    </Button>
                  }
                  open={this.state.open1}
                  onRequestClose={() => this.closePopover('open1')}
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
              <GuideExample style={{ overflow: 'auto' }} label="positionFixed">
                <Popover
                  targetEl={
                    <Button onClick={() => this.togglePopover('open2')}>
                      Click Here
                    </Button>
                  }
                  open={this.state.open2}
                  onRequestClose={() => this.closePopover('open2')}
                  positionFixed
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
              <GuideExample style={{ overflow: 'auto' }} label="appendToBody">
                <Popover
                  targetEl={
                    <Button onClick={() => this.togglePopover('open3')}>
                      Click Here
                    </Button>
                  }
                  open={this.state.open3}
                  onRequestClose={() => this.closePopover('open3')}
                  appendToBody
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
            </Fragment>
          );
        }
      }

      PopoverStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <PopoverStory />;
    })
  )
  .add(
    'With Select',
    withInfo({
      text: doc,
      propTables: [Popover]
    })(() => {
      class PopoverStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            open: false,
            selectedValue: 10,
            selectedItem: null,
            selectedValues: [10]
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

        handleSelectChange = (value, item) => {
          this.setState({
            selectedValue: value,
            selectedItem: item
          });
        };

        handleMultiSelectChange = (values, items) => {
          this.setState({
            selectedValues: values
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
                <Panel>
                  <Form noValidation>
                    <FormControl>
                      <FormControlLabel>Select: </FormControlLabel>
                      <Select
                        onChange={this.handleSelectChange}
                        selectedValue={this.state.selectedValue}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormControlLabel>MultiSelect: </FormControlLabel>
                      <MultiSelect
                        onChange={this.handleMultiSelectChange}
                        selectedValues={this.state.selectedValues}
                        closeOnSelect={false}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </MultiSelect>
                    </FormControl>
                  </Form>
                </Panel>
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
