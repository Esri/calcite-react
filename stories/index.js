import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import GuideExample from './GuideExample';

import { ThemeProvider } from 'styled-components';
import CalciteTheme from '../src/theme/CalciteTheme';

import Button from '../src/components/Button';
import Label from '../src/components/Label';
import Loader from '../src/components/Loader';
import Alert from '../src/components/Alert';
import Panel, { PanelTitle, PanelText } from '../src/components/Panel';
import Breadcrumbs, { Crumb } from '../src/components/Breadcrumbs';
import TopNav, {
  TopNavTitle,
  TopNavList,
  TopNavLink
} from '../src/patterns/TopNav';

import './stories.css';

storiesOf('Button', module)
  .add('with text', () => {
    return (
      <ThemeProvider theme={CalciteTheme}>
        <Fragment>
          <GuideExample>
            <Button onClick={action('clicked')}>default</Button>
          </GuideExample>
          <GuideExample label="transparent">
            <Button transparent onClick={action('clicked')}>
              transparent
            </Button>
          </GuideExample>
          <GuideExample label="clear">
            <Button clear onClick={action('clicked')}>
              clear
            </Button>
          </GuideExample>
          <GuideExample label="clear-gray">
            <Button clear-gray onClick={action('clicked')}>
              clear-gray
            </Button>
          </GuideExample>
          <GuideExample label="clear-white">
            <Button clear-white onClick={action('clicked')}>
              clear-white
            </Button>
          </GuideExample>
          <GuideExample label="white">
            <Button white onClick={action('clicked')}>
              white
            </Button>
          </GuideExample>
          <GuideExample label="small">
            <Button small onClick={action('clicked')}>
              small
            </Button>
          </GuideExample>
          <GuideExample label="large">
            <Button large onClick={action('clicked')}>
              large
            </Button>
          </GuideExample>
          <GuideExample label="fill">
            <Button fill onClick={action('clicked')}>
              fill
            </Button>
          </GuideExample>
          <GuideExample label="half">
            <Button half onClick={action('clicked')}>
              half
            </Button>
          </GuideExample>
          <GuideExample label="red">
            <Button red onClick={action('clicked')}>
              red
            </Button>
          </GuideExample>
          <GuideExample label="green">
            <Button green onClick={action('clicked')}>
              green
            </Button>
          </GuideExample>
          <GuideExample label="disabled">
            <Button disabled onClick={action('clicked')}>
              disabled
            </Button>
          </GuideExample>
          <GuideExample label="grouped">
            <nav>
              <Button grouped onClick={action('clicked')}>
                One
              </Button>
              <Button grouped onClick={action('clicked')}>
                Two
              </Button>
              <Button grouped onClick={action('clicked')}>
                Three
              </Button>
            </nav>
          </GuideExample>

          <pre>
            <code>
              Button sample code here (also needs styling to match calcite-web?)
            </code>
          </pre>
        </Fragment>
      </ThemeProvider>
    );
  })
  .add('as a link', () => {
    return (
      <ThemeProvider theme={CalciteTheme}>
        <Fragment>
          <GuideExample label="href=&quot;&quot;">
            <Button
              href="https://google.com"
              target="_blank"
              onClick={action('clicked')}
            >
              link button
            </Button>
          </GuideExample>

          <pre>
            <code>
              Button (as a link) sample code here (also needs styling to match
              calcite-web?)
            </code>
          </pre>
        </Fragment>
      </ThemeProvider>
    );
  });

storiesOf('Label', module).add('default', () => {
  return (
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

        <pre>
          <code>
            Label sample code here (also needs styling to match calcite-web?)
          </code>
        </pre>
      </Fragment>
    </ThemeProvider>
  );
});

storiesOf('Loader', module).add('default', () => {
  return (
    <ThemeProvider theme={CalciteTheme}>
      <Fragment>
        <GuideExample>
          <Loader />
        </GuideExample>
        <GuideExample label="with text">
          <Loader text="Loading..." />
        </GuideExample>

        <pre>
          <code>
            Loader sample code here (also needs styling to match calcite-web?)
          </code>
        </pre>
      </Fragment>
    </ThemeProvider>
  );
});

storiesOf('Alert', module).add('default', () => {
  return (
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

        <pre>
          <code>
            Alert sample code here (also needs styling to match calcite-web?)
          </code>
        </pre>
      </Fragment>
    </ThemeProvider>
  );
});

storiesOf('Panel', module).add('default', () => {
  return (
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

        <pre>
          <code>
            Panel sample code here (also needs styling to match calcite-web?)
          </code>
        </pre>
      </Fragment>
    </ThemeProvider>
  );
});

storiesOf('Breadcrumbs', module).add('default', () => {
  return (
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
        <GuideExample label="white">
          <Breadcrumbs white>
            <Crumb href="#">Thing</Crumb>
            <Crumb>Thing</Crumb>
            <Crumb href="#">Thing</Crumb>
            <Crumb href="#">Current</Crumb>
          </Breadcrumbs>
        </GuideExample>

        <pre>
          <code>
            Alert sample code here (also needs styling to match calcite-web?)
          </code>
        </pre>
      </Fragment>
    </ThemeProvider>
  );
});

storiesOf('TopNav', module).add('default', () => {
  return (
    <ThemeProvider theme={CalciteTheme}>
      <Fragment>
        <GuideExample>
          <TopNav>
            <TopNavTitle href="#">ArcGIS for Developers</TopNavTitle>
            <TopNavList>
              <TopNavLink href="#">Plans</TopNavLink>
              <TopNavLink href="#">Community</TopNavLink>
              <TopNavLink href="#">Docs</TopNavLink>
            </TopNavList>
          </TopNav>
        </GuideExample>

        <pre>
          <code>
            Alert sample code here (also needs styling to match calcite-web?)
          </code>
        </pre>
      </Fragment>
    </ThemeProvider>
  );
});
