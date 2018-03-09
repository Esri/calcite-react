import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Tooltip.md';

import Tooltip from '../Tooltip';
import Label from '../../Label';
import { a as CalciteLink } from '../../utils/elements';

storiesOf('Tooltip', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Tooltip title="Basic Tooltip">
            <CalciteLink>Hover Me</CalciteLink>
          </Tooltip>
        </GuideExample>
        <GuideExample label={`placement="right"`}>
          <Tooltip title="Basic Tooltip" placement="right">
            <CalciteLink>Placement Right</CalciteLink>
          </Tooltip>
        </GuideExample>
        <GuideExample label={`placement="top"`}>
          <Tooltip title="Basic Tooltip" placement="top">
            <CalciteLink>Placement Top</CalciteLink>
          </Tooltip>
        </GuideExample>
        <GuideExample
          label={`placement="left"`}
          style={{ textAlign: 'center' }}
        >
          <Tooltip title="Basic Tooltip" placement="left">
            <CalciteLink>Placement Left</CalciteLink>
          </Tooltip>
        </GuideExample>
        <GuideExample label={`placement="bottom"`}>
          <Tooltip title="Basic Tooltip" placement="bottom">
            <CalciteLink>Placement Bottom</CalciteLink>
          </Tooltip>
        </GuideExample>
        <GuideExample label={`placement="left"`}>
          <Tooltip title="Basic Tooltip" placement="left">
            <CalciteLink>Placement Left With No Room</CalciteLink>
          </Tooltip>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Component in Tooltip',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Tooltip title={<Label>I'm a label!</Label>}>
            <CalciteLink>Hover Me</CalciteLink>
          </Tooltip>
        </GuideExample>
      </div>
    ))
  );
