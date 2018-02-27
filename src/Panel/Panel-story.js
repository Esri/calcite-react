import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import CalciteTheme from '../../src/theme/CalciteTheme';
import GuideExample from '../../stories/GuideExample';

import Panel, { PanelTitle, PanelText } from './';

const doc = `Panel doc is TBD`;

storiesOf('Panel', module).add(
  'Default',
  withInfo(doc)(() => (
    <ThemeProvider theme={CalciteTheme}>
      <Fragment>
        <GuideExample>
          <Panel>
            <PanelTitle>This is a panel.</PanelTitle>
            <PanelText>
              Panels set <code>background-color</code> and frame content.
            </PanelText>
          </Panel>
        </GuideExample>
        <GuideExample label="no-border">
          <Panel no-border>
            <PanelTitle>This is a panel.</PanelTitle>
            <PanelText>
              Panels set <code>background-color</code> and frame content.
            </PanelText>
          </Panel>
        </GuideExample>
        <GuideExample label="no-padding">
          <Panel no-padding>
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
        <GuideExample label="light-blue">
          <Panel light-blue>
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
        <GuideExample label="dark-blue">
          <Panel dark-blue>
            <PanelTitle>This is a panel.</PanelTitle>
            <PanelText>
              Panels set <code>background-color</code> and frame content.
            </PanelText>
          </Panel>
        </GuideExample>
      </Fragment>
    </ThemeProvider>
  ))
);
