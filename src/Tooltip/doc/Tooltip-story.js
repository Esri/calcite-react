import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Tooltip.md';

import Tooltip from '../Tooltip';
import Label from '../../Label';
import { CalciteA } from '../../utils/elements';

import Card, { CardTitle, CardContent, CardImage } from '../../Card';
import Button from '../../Button';
import cardImage from '../../../stories/images/bridge3.jpg';

storiesOf('Tooltip', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Tooltip title="Basic Tooltip">
            <CalciteA>Hover Me</CalciteA>
          </Tooltip>
        </GuideExample>
        <GuideExample label={`placement="right"`}>
          <Tooltip title="Basic Tooltip" placement="right">
            <CalciteA>Placement Right</CalciteA>
          </Tooltip>
        </GuideExample>
        <GuideExample label={`placement="top"`}>
          <Tooltip title="Basic Tooltip" placement="top">
            <CalciteA>Placement Top</CalciteA>
          </Tooltip>
        </GuideExample>
        <GuideExample
          label={`placement="left"`}
          style={{ textAlign: 'center' }}
        >
          <Tooltip title="Basic Tooltip" placement="left">
            <CalciteA>Placement Left</CalciteA>
          </Tooltip>
        </GuideExample>
        <GuideExample label={`placement="bottom"`}>
          <Tooltip title="Basic Tooltip" placement="bottom">
            <CalciteA>Placement Bottom</CalciteA>
          </Tooltip>
        </GuideExample>
        <GuideExample label={`placement="left"`}>
          <Tooltip title="Basic Tooltip" placement="left">
            <CalciteA>Placement Left With No Room</CalciteA>
          </Tooltip>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Tooltip On Other Components',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Tooltip title="This Button Has a Tooltip!">
            <Button>Button With Tooltip</Button>
          </Tooltip>
        </GuideExample>
        <GuideExample>
          <Tooltip title="This Label Has a Tooltip!">
            <Label>Label With Tooltip</Label>
          </Tooltip>
        </GuideExample>
        <GuideExample>
          <Tooltip title="This Card Has a Tooltip!">
            <Card style={{ maxWidth: '320px' }}>
              <CardImage
                src={cardImage}
                caption="Florida, January 1954"
                alt="Bridge Club, 1954"
              />
              <CardContent>
                <CardTitle>Card with Image</CardTitle>
                <p>Cards can have full-bleed images with optional captions.</p>
                <Button>View Examples</Button>
              </CardContent>
            </Card>
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
            <CalciteA>Hover Me</CalciteA>
          </Tooltip>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Delayed Tooltip',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Tooltip title="It took me a while to show up..." enterDelay={500}>
            <CalciteA>Hover Me</CalciteA>
          </Tooltip>
        </GuideExample>
      </div>
    ))
  );
