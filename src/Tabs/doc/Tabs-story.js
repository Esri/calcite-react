import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Tabs.md';

import Tabs, { TabNav, TabTitle, TabContents, TabSection } from '..';

storiesOf('Tabs', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <Fragment>
        <GuideExample>
          <Tabs activeTabIndex={0}>
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
        <GuideExample label="gray">
          <Tabs gray activeTabIndex={0}>
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
        <GuideExample label="transparent">
          <Tabs transparent activeTabIndex={0}>
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
        <GuideExample label="translucent">
          <Tabs translucent activeTabIndex={0}>
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
        <GuideExample label="dark">
          <Tabs dark activeTabIndex={0}>
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
      </Fragment>
    ))
  )
  .add(
    'Controlled Tabs',
    withInfo({
      text: doc,
      propTables: [Tabs, TabNav, TabTitle, TabContents, TabSection]
    })(() => {
      class TabStory extends Component {
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

      TabStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <TabStory />;
    })
  );
