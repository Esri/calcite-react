import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Tab.md';
import Form, { FormControl } from '../../Form';
import TextField from '../../TextField';
import Table, { TableBody, TableRow, TableCell } from '../../Table';

import Tabs, { TabsGrouped, TabButton, TabSection } from '../';

storiesOf('Tabs', module)
  .add(
    'Controlled Tabs',
    withInfo(doc)(() => {
      class ControlledTab extends Component {
        constructor(props) {
          super(props);
          this.state = {
            activeTab: 0
          };
        }

        onTabChange = index => {
          this.setState({ activeTab: index });
        };

        render() {
          return (
            <GuideExample>
              <Tabs
                onTabChange={this.onTabChange}
                activeTab={this.state.activeTab}
              >
                <TabButton activeTab>File</TabButton>
                <TabButton>View</TabButton>
                <TabButton>Packages</TabButton>
                <TabSection title="File">
                  <Form>
                    <FormControl>
                      <TextField defaultValue="username" label="User:" />
                    </FormControl>
                    <FormControl>
                      <TextField defaultValue="user@email" label="Email:" />
                    </FormControl>
                  </Form>
                </TabSection>
                <TabSection title="View">A list of View items</TabSection>
                <TabSection title="Packages">
                  <Form>
                    <FormControl>
                      <TextField defaultValue="node" label="PackageInfo:" />
                    </FormControl>
                  </Form>
                </TabSection>
              </Tabs>
            </GuideExample>
          );
        }
      }
      return <ControlledTab />;
    })
  )
  .add(
    'Controlled Tabs grouped within section',
    withInfo(doc)(() => {
      class ControlledTabGrouped extends Component {
        constructor(props) {
          super(props);
          this.state = {
            activeTab: 0
          };
        }

        onTabChange = index => {
          this.setState({ activeTab: index });
        };

        render() {
          return (
            <GuideExample>
              <TabsGrouped
                onTabChange={this.onTabChange}
                activeTab={this.state.activeTab}
              >
                <TabSection title="Analytics">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>Ships-task</TableCell>
                        <TableCell>Cellular-task</TableCell>
                        <TableCell>Waze-task</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Running</TableCell>
                        <TableCell>Stopped</TableCell>
                        <TableCell>Stopped</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabSection>
                <TabSection title="Services">A list of Services</TabSection>
                <TabSection title="Monitor">
                  <Form>
                    <FormControl>
                      <TextField defaultValue="node" label="Monitor:" />
                    </FormControl>
                  </Form>
                </TabSection>
              </TabsGrouped>
            </GuideExample>
          );
        }
      }

      return <ControlledTabGrouped />;
    })
  );
