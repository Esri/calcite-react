import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import CalciteTheme from '../../src/theme/CalciteTheme';
import GuideExample from '../../stories/GuideExample';

import Alert from './';

const doc = `Alert doc is TBD`;

storiesOf('Alert', module).add(
  'Default',
  withInfo(doc)(() => (
    <ThemeProvider theme={CalciteTheme}>
      <Fragment>
        <GuideExample>
          <Alert>Something Happened!</Alert>
        </GuideExample>
        <GuideExample label="closeLabel=&quot;close&quot;">
          <Alert closeLabel="close" onClose={action('clicked')}>
            Has close link!
          </Alert>
        </GuideExample>
        <GuideExample label="red">
          <Alert red>Something Happened!</Alert>
        </GuideExample>
        <GuideExample label="yellow">
          <Alert yellow>Something Happened!</Alert>
        </GuideExample>
        <GuideExample label="green">
          <Alert green>Something Happened!</Alert>
        </GuideExample>
        <GuideExample label="full">
          <Alert full>Something Happened!</Alert>
        </GuideExample>
      </Fragment>
    </ThemeProvider>
  ))
);
