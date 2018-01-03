import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

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
          <div className="guide-example">
            <Button onClick={action('clicked')}>Hello Button</Button>
            <code className="guide-example-label">default</code>
          </div>
          <div className="guide-example">
            <Button red onClick={action('clicked')}>
              Hello Button
            </Button>
            <code className="guide-example-label">red</code>
          </div>
          <div className="guide-example">
            <Button disabled onClick={action('clicked')}>
              Hello Button
            </Button>
            <code className="guide-example-label">disabled</code>
          </div>

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
          <div className="guide-example">
            <Button
              href="https://google.com"
              target="_blank"
              onClick={action('clicked')}
            >
              link button
            </Button>
            <code className="guide-example-label">href</code>
          </div>

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
        <div className="guide-example">
          <Label>label</Label>
          <code className="guide-example-label">default</code>
        </div>
        <div className="guide-example">
          <Label red>label</Label>
          <code className="guide-example-label">red</code>
        </div>

        <pre>
          <code>
            Label sample code here (also needs styling to match calcite-web?)
          </code>
        </pre>
      </Fragment>
    </ThemeProvider>
  );
});
