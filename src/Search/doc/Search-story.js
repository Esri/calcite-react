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
      constructor(props) {
        super(props);
        this.state = {
          value: ''
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

      render() {
        return (
          <Fragment>
            <GuideExample>
              <Search
                value={this.state.value}
                onChange={this.searchChanged}
                onRequestClear={this.clearSearch}
              />
            </GuideExample>
            <GuideExample>
              <Search
                value={this.state.value}
                minimal={true}
                onChange={this.searchChanged}
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
