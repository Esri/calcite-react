import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Tab.md';
import Form, { FormControl } from '../../Form';
import TextField from '../../TextField';

import Tabs, { TabSection } from '../';

storiesOf('Tabs', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <Tabs activeTab={2}>
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
    </div>
  ))
);
