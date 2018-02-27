import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import CalciteTheme from '../../src/theme/CalciteTheme';
import GuideExample from '../../stories/GuideExample';

import Loader from './';

const doc = `Loader doc is TBD`;

storiesOf('Loader', module).add(
  'Default',
  withInfo(doc)(() => (
    <ThemeProvider theme={CalciteTheme}>
      <Fragment>
        <GuideExample>
          <Loader />
        </GuideExample>
        <GuideExample label="with text">
          <Loader text="Loading..." />
        </GuideExample>
      </Fragment>
    </ThemeProvider>
  ))
);
