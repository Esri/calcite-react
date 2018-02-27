import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import CalciteTheme from '../../src/theme/CalciteTheme';
import GuideExample from '../../stories/GuideExample';

import Label from './';

const doc = `Label doc is TBD`;

storiesOf('Label', module).add(
  'Default',
  withInfo(doc)(() => (
    <ThemeProvider theme={CalciteTheme}>
      <Fragment>
        <GuideExample>
          <Label>default</Label>
        </GuideExample>
        <GuideExample label="blue">
          <Label blue>blue</Label>
        </GuideExample>
        <GuideExample label="green">
          <Label green>green</Label>
        </GuideExample>
        <GuideExample label="yellow">
          <Label yellow>yellow</Label>
        </GuideExample>
        <GuideExample label="red">
          <Label red>red</Label>
        </GuideExample>
      </Fragment>
    </ThemeProvider>
  ))
);
