import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Search.md';

import Search from '../';

storiesOf('Search', module).add(
  'Basic',
  withInfo(doc)(() => {
    class SearchStateExample extends Component {
      constructor(props) {
        super(props);
        this.state = {
          value: '',
          selectedItem: '',
          items: ['Black', 'Red', 'Green', 'Blue', 'Orange', 'Purple']
        };
      }

      searchChanged = e => {
        this.setState({
          value: e.target.value
        });
      };

      clearSearch = () => {
        this.setState({
          value: ''
        });
      };

      onUserAction = (inputValue, itemsToShow, selectedItemVal) => {
        this.setState({
          value: inputValue,
          selectedItem: selectedItemVal
        });
      };

      render() {
        return (
          <GuideExample>
            <Search
              value={this.state.value}
              selectedItem={this.state.selectedItem}
              items={this.state.items}
              minimal={true}
              onChange={this.searchChanged}
              onUserAction={this.onUserAction}
              onRequestClear={this.clearSearch}
            />
          </GuideExample>
        );
      }
    }

    return <SearchStateExample />;
  })
);
