import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Tab.md';

import Tabs, { TabNav, TabTitle, TabContents, TabSection } from '../';

storiesOf('Tabs', module).add(
  'Controlled Tabs',
  withInfo(doc)(() => {
    class ControlledTab extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeTabIndex: 0
        };
      }

      onTabChange = index => {
        this.setState({ activeTabIndex: index });
      };

      render() {
        return (
          <GuideExample>
            <Tabs
              onTabChange={this.onTabChange}
              activeTabIndex={this.state.activeTabIndex}
            >
              <TabNav>
                <TabTitle>Tab 1</TabTitle>
                <TabTitle>Tab 2</TabTitle>
                <TabTitle>Tab 3</TabTitle>
              </TabNav>
              <TabContents>
                <TabSection>Tab 1 content</TabSection>
                <TabSection>Tab 2 content</TabSection>
                <TabSection>Tab 3 content</TabSection>
              </TabContents>
            </Tabs>
          </GuideExample>
        );
      }
    }
    return <ControlledTab />;
  })
);
