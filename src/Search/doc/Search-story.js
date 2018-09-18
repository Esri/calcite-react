import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Search.md';

import Search from '../';

import { MenuItem } from '../../Menu';
import { ListItem, ListItemTitle, ListItemSubtitle } from '../../List';

import GlobeIcon from 'calcite-ui-icons-react/GlobeIcon';

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
                        leftNode={<GlobeIcon size={32} />}
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
  )
  .add(
    'Shortcut Character',
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
            selectedItem: '',
            searchInput: null
          };
        }

        componentDidMount() {
          document.body.addEventListener('keypress', this.handleKeypress);
        }

        componentWillUnmount() {
          document.body.removeEventListener('keypress', this.handleKeypress);
        }

        handleKeypress = e => {
          if (
            e.key === '/' &&
            document.activeElement !== this.state.searchInput
          ) {
            // Stop the typed character from being inserted in the input
            e.preventDefault();

            // Focus the input
            this.state.searchInput.focus();
          }
        };

        setSearchInput = searchInput => {
          this.setState({
            searchInput
          });
        };

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
                  inputRef={this.setSearchInput}
                  shortcutCharacter="/"
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
    'Dumb Input',
    withInfo({
      text: doc,
      propTables: [Search]
    })(() => {
      class SearchStory extends Component {
        constructor(props) {
          super(props);

          this.state = {
            inputValue: ''
          };
        }

        clearSearch = () => {
          this.setState({
            inputValue: ''
          });
        };

        onUserAction = inputValue => {
          this.setState({
            inputValue: inputValue
          });
        };

        render() {
          return (
            <GuideExample>
              <Search
                inputValue={this.state.inputValue}
                onUserAction={this.onUserAction}
                onRequestClear={this.clearSearch}
              />
            </GuideExample>
          );
        }
      }

      SearchStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <SearchStory />;
    })
  );
