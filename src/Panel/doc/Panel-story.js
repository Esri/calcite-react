import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Panel.md';
import Panel, { PanelTitle, PanelText } from '../';

storiesOf('Panel', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <Panel>
          <PanelTitle>This is a panel.</PanelTitle>
          <PanelText>
            Panels set <code>background-color</code> and frame content.
          </PanelText>
        </Panel>
      </GuideExample>
      <GuideExample label="noBorder">
        <Panel noBorder>
          <PanelTitle>This is a panel.</PanelTitle>
          <PanelText>
            Panels set <code>background-color</code> and frame content.
          </PanelText>
        </Panel>
      </GuideExample>
      <GuideExample label="noPadding">
        <Panel noPadding>
          <PanelTitle>This is a panel.</PanelTitle>
          <PanelText>
            Panels set <code>background-color</code> and frame content.
          </PanelText>
        </Panel>
      </GuideExample>
      <GuideExample label="dark">
        <Panel dark>
          <PanelTitle>This is a panel.</PanelTitle>
          <PanelText>
            Panels set <code>background-color</code> and frame content.
          </PanelText>
        </Panel>
      </GuideExample>
      <GuideExample label="black">
        <Panel black>
          <PanelTitle>This is a panel.</PanelTitle>
          <PanelText>
            Panels set <code>background-color</code> and frame content.
          </PanelText>
        </Panel>
      </GuideExample>
      <GuideExample label="white">
        <Panel white>
          <PanelTitle>This is a panel.</PanelTitle>
          <PanelText>
            Panels set <code>background-color</code> and frame content.
          </PanelText>
        </Panel>
      </GuideExample>
      <GuideExample label="lightBlue">
        <Panel lightBlue>
          <PanelTitle>This is a panel.</PanelTitle>
          <PanelText>
            Panels set <code>background-color</code> and frame content.
          </PanelText>
        </Panel>
      </GuideExample>
      <GuideExample label="blue">
        <Panel blue>
          <PanelTitle>This is a panel.</PanelTitle>
          <PanelText>
            Panels set <code>background-color</code> and frame content.
          </PanelText>
        </Panel>
      </GuideExample>
      <GuideExample label="darkBlue">
        <Panel darkBlue>
          <PanelTitle>This is a panel.</PanelTitle>
          <PanelText>
            Panels set <code>background-color</code> and frame content.
          </PanelText>
        </Panel>
      </GuideExample>
    </div>
  ))
);
