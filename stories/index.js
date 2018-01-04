import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import GuideExample from './GuideExample';

import { ThemeProvider } from 'styled-components';
import CalciteTheme from '../src/theme/CalciteTheme';

import Button from '../src/components/Button';
import Label from '../src/components/Label';

import './stories.css';

storiesOf('Button', module)
  .add('with text', () => {
    return (
      <ThemeProvider theme={CalciteTheme}>
        <Fragment>
          <GuideExample label="default">
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
        <GuideExample label="default">
          <Label>default</Label>
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
