import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Search.md';

import Search from '../';

storiesOf('Search', module).add(
  'Basic',
  withInfo(doc)(() => {
    class SearchStateExample extends Component {
      items = [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
      ];

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
              />
            </GuideExample>
          </Fragment>
        );
      }
    }

    return <SearchStateExample />;
  })
);
