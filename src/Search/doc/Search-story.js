import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Search.md';

import Search from '../';

import { MenuItem } from '../../Menu';
import { ListItem, ListItemTitle, ListItemSubtitle } from '../../List';

import ThumbUpIcon from 'mdi-react/ThumbUpIcon';

import statesJson from '../../../stories/_sampleJson/states.json';
import statesJson2 from '../../../stories/_sampleJson/states_objects.json';

storiesOf('Search', module)
  .add(
    'Basic',
    withInfo({
      text: doc,
      propTables: [Search]
    })(() => {
      class SearchStory extends Component {
        items = [...statesJson.states];

        constructor(props) {
          super(props);

          this.state = {
            inputValue: '',
            selectedItem: ''
          };
        }

        searchChanged = e => {
          this.setState({
            selectedItem: e
          });
        };

        clearSearch = () => {
          this.setState({
            inputValue: '',
            selectedItem: ''
          });
        };

        onUserAction = (inputValue, selectedItemVal) => {
          this.setState({
            inputValue: inputValue,
            selectedItem: selectedItemVal
          });
        };

        render() {
          return (
            <Fragment>
              <GuideExample>
                <Search
                  inputValue={this.state.inputValue}
                  selectedItem={this.state.selectedItem}
                  items={this.items}
                  onChange={this.searchChanged}
                  onUserAction={this.onUserAction}
                  onRequestClear={this.clearSearch}
                  menuStyle={{ maxHeight: '400px' }}
                />
              </GuideExample>
              <GuideExample>
                <Search
                  inputValue={this.state.inputValue}
                  selectedItem={this.state.selectedItem}
                  items={this.items}
                  minimal={true}
                  onChange={this.searchChanged}
                  onUserAction={this.onUserAction}
                  onRequestClear={this.clearSearch}
                  menuStyle={{ maxHeight: '400px' }}
                />
              </GuideExample>
            </Fragment>
          );
        }
      }

      SearchStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <SearchStory />;
    })
  )

  .add(
    'Array (Objects)',
    withInfo({
      text: doc,
      propTables: [Search]
    })(() => {
      class SearchStory extends Component {
        items = [...statesJson2.states];

        constructor(props) {
          super(props);

          this.dataSourceConfig = {
            label: 'name',
            value: 'abbrev'
          };

          this.state = {
            inputValue: '',
            selectedItem: ''
          };
        }

        searchChanged = e => {
          this.setState({
            selectedItem: e
          });
        };

        clearSearch = () => {
          this.setState({
            inputValue: '',
            selectedItem: ''
          });
        };

        onUserAction = (inputValue, selectedItemVal) => {
          this.setState({
            inputValue: inputValue,
            selectedItem: selectedItemVal
          });
        };

        render() {
          return (
            <Fragment>
              <GuideExample>
                <Search
                  dataSourceConfig={this.dataSourceConfig}
                  inputValue={this.state.inputValue}
                  selectedItem={this.state.selectedItem}
                  items={this.items}
                  onChange={this.searchChanged}
                  onUserAction={this.onUserAction}
                  onRequestClear={this.clearSearch}
                  menuStyle={{ maxHeight: '400px' }}
                />
              </GuideExample>
            </Fragment>
          );
        }
      }

      SearchStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <SearchStory />;
    })
  )

  .add(
    'Child Items',
    withInfo({
      text: doc,
      propTables: [Search]
    })(() => {
      class SearchStory extends Component {
        items = [...statesJson2.states];

        constructor(props) {
          super(props);

          this.state = {
            inputValue: '',
            selectedItem: ''
          };

          this.dataSourceConfig = {
            label: 'name',
            value: 'abbrev'
          };
        }

        searchChanged = e => {
          this.setState({
            selectedItem: e
          });
        };

        clearSearch = () => {
          this.setState({
            inputValue: '',
            selectedItem: ''
          });
        };

        onUserAction = (inputValue, selectedItemVal) => {
          this.setState({
            inputValue: inputValue,
            selectedItem: selectedItemVal
          });
        };

        render() {
          return (
            <Fragment>
              <GuideExample>
                <Search
                  dataSourceConfig={this.dataSourceConfig}
                  inputValue={this.state.inputValue}
                  selectedItem={this.state.selectedItem}
                  onChange={this.searchChanged}
                  onUserAction={this.onUserAction}
                  onRequestClear={this.clearSearch}
                  menuStyle={{ maxHeight: '400px' }}
                >
                  {this.items.map(item => {
                    return (
                      <MenuItem key={item.abbrev} item={item}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Search>
              </GuideExample>
            </Fragment>
          );
        }
      }

      SearchStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <SearchStory />;
    })
  )

  .add(
    'Custom Items',
    withInfo({
      text: doc,
      propTables: [Search]
    })(() => {
      class SearchStory extends Component {
        items = [...statesJson2.states];

        constructor(props) {
          super(props);

          this.state = {
            inputValue: '',
            selectedItem: ''
          };

          this.dataSourceConfig = {
            label: 'name',
            value: 'abbrev'
          };
        }

        searchChanged = e => {
          console.log(e);
          this.setState({
            selectedItem: e
          });
        };

        clearSearch = () => {
          this.setState({
            inputValue: '',
            selectedItem: ''
          });
        };

        onUserAction = (inputValue, selectedItemVal) => {
          this.setState({
            inputValue: inputValue,
            selectedItem: selectedItemVal
          });
        };

        render() {
          return (
            <Fragment>
              <GuideExample>
                <Search
                  inputValue={this.state.inputValue}
                  selectedItem={this.state.selectedItem}
                  onChange={this.searchChanged}
                  onUserAction={this.onUserAction}
                  onRequestClear={this.clearSearch}
                  menuStyle={{ maxHeight: '400px' }}
                >
                  {this.items.map(item => {
                    return (
                      <ListItem
                        key={item.abbrev}
                        value={item.abbrev}
                        label={item.name}
                        leftNode={<ThumbUpIcon />}
                      >
                        <ListItemTitle>{item.name}</ListItemTitle>
                        <ListItemSubtitle>{item.abbrev}</ListItemSubtitle>
                      </ListItem>
                    );
                  })}
                </Search>
              </GuideExample>
            </Fragment>
          );
        }
      }

      SearchStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <SearchStory />;
    })
  );
