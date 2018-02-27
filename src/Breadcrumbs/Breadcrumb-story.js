import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import CalciteTheme from '../../src/theme/CalciteTheme';
import GuideExample from '../../stories/GuideExample';

import Breadcrumbs, { Crumb } from './';

const doc = `Breadcrumbs doc is TBD`;

storiesOf('Breadcrumbs', module).add(
  'Default',
  withInfo(doc)(() => (
    <ThemeProvider theme={CalciteTheme}>
      <Fragment>
        <GuideExample>
          <Breadcrumbs>
            <Crumb href="#">Thing</Crumb>
            <Crumb>Thing</Crumb>
            <Crumb href="#">Thing</Crumb>
            <Crumb href="#">Current</Crumb>
          </Breadcrumbs>
        </GuideExample>
        <GuideExample
          label="white"
          style={{ background: CalciteTheme.palette.offBlack }}
        >
          <Breadcrumbs white>
            <Crumb href="#">Thing</Crumb>
            <Crumb>Thing</Crumb>
            <Crumb href="#">Thing</Crumb>
            <Crumb href="#">Current</Crumb>
          </Breadcrumbs>
        </GuideExample>
      </Fragment>
    </ThemeProvider>
  ))
);
