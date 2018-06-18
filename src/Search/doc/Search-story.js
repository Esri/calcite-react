import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Search.md';

import Search from '../';

import statesJson from '../../../stories/_sampleJson/states.json';
import statesJson2 from '../../../stories/_sampleJson/states_objects.json';

storiesOf('Search', module)
  .add(
    'Basic',
    withInfo(doc)(() => {
      class SearchStateExample extends Component {
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

      return <SearchStateExample />;
    })
  )

  .add(
    'Array (Objects)',
    withInfo(doc)(() => {
      class SearchStateExample extends Component {
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
              <GuideExample>
                <Search
                  dataSourceConfig={this.dataSourceConfig}
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

      return <SearchStateExample />;
    })
  );
