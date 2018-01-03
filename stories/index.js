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
            <Button onClick={action('clicked')}>default</Button>
            <code className="guide-example-label">default</code>
          </div>
          <div className="guide-example">
            <Button transparent onClick={action('clicked')}>
              transparent
            </Button>
            <code className="guide-example-label">transparent</code>
          </div>
          <div className="guide-example">
            <Button clear onClick={action('clicked')}>
              clear
            </Button>
            <code className="guide-example-label">clear</code>
          </div>
          <div className="guide-example">
            <Button clear-gray onClick={action('clicked')}>
              clear-gray
            </Button>
            <code className="guide-example-label">clear-gray</code>
          </div>
          <div className="guide-example">
            <Button clear-white onClick={action('clicked')}>
              clear-white
            </Button>
            <code className="guide-example-label">clear-white</code>
          </div>
          <div className="guide-example">
            <Button white onClick={action('clicked')}>
              white
            </Button>
            <code className="guide-example-label">white</code>
          </div>
          <div className="guide-example">
            <Button small onClick={action('clicked')}>
              small
            </Button>
            <code className="guide-example-label">small</code>
          </div>
          <div className="guide-example">
            <Button large onClick={action('clicked')}>
              large
            </Button>
            <code className="guide-example-label">large</code>
          </div>
          <div className="guide-example">
            <Button half onClick={action('clicked')}>
              half
            </Button>
            <code className="guide-example-label">half</code>
          </div>
          <div className="guide-example">
            <Button red onClick={action('clicked')}>
              red
            </Button>
            <code className="guide-example-label">red</code>
          </div>
          <div className="guide-example">
            <Button green onClick={action('clicked')}>
              green
            </Button>
            <code className="guide-example-label">green</code>
          </div>
          <div className="guide-example">
            <Button disabled onClick={action('clicked')}>
              disabled
            </Button>
            <code className="guide-example-label">disabled</code>
          </div>
          <div className="guide-example">
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
            <code className="guide-example-label">grouped</code>
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
