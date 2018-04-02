import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Switch.md';

import Switch from '../';

import Form, { FormControl } from '../../Form';

storiesOf('Switch', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <Form>
          <FormControl>
            <Switch>Inline example</Switch>
          </FormControl>
          <FormControl>
            <Switch destructive>
              Confirm account deletion. You cannot recover deleted accounts.
            </Switch>
          </FormControl>
          <FormControl>
            <Switch labelPosition="before">
              Enable Two-Factor Authentication
            </Switch>
          </FormControl>
        </Form>
      </GuideExample>
    </div>
  ))
);
