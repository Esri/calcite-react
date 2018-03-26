import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CalciteTheme from '../../../src/theme/CalciteTheme';

import GuideExample from '../../../stories/GuideExample';
import doc from './Breadcrumbs.md';
import Breadcrumbs, { Crumb } from '../';

storiesOf('Breadcrumbs', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
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
    </div>
  ))
);
