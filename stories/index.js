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
import Card, {
  CardTitle,
  CardContent,
  CardImage
} from '../src/components/Card';
import Table, {
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell
} from '../src/components/Table';
import TopNav, {
  TopNavBrand,
  TopNavTitle,
  TopNavList,
  TopNavLink,
  TopNavActionsList
} from '../src/components/TopNav';

import EsriLogo from './images/ESRI_Logo_Black.svg';
import cardImage from './images/bridge3.jpg';
import cardImageCircle from './images/bridge-circle.png';

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

storiesOf('Card', module)
  .add('default', () => {
    return (
      <ThemeProvider theme={CalciteTheme}>
        <Fragment>
          <GuideExample>
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
          </GuideExample>

          <GuideExample label="shaped">
            <Card shaped style={{ maxWidth: '320px' }}>
              <CardImage shaped src={cardImageCircle} alt="Bridge Club, 1942" />
              <CardContent shaped>
                <p>
                  Another class <code>shaped</code> allows for a stylized
                  version of the card meant to work with geometrically-shaped
                  images.
                </p>
                <Button clear>View Examples</Button>
              </CardContent>
            </Card>
          </GuideExample>

          <GuideExample
            label="bar"
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Card bar="blue" style={{ margin: '0 5px' }}>
              <CardContent>
                <CardTitle>Card with Colored Bar</CardTitle>
                <p>
                  Every color in calcite can be used as a colored "bar" along
                  the top of a card to provide a bit of visual punch with{' '}
                  <code>bar="{'{color}'}"</code>
                </p>
                <Button clear>What Colors?</Button>
              </CardContent>
            </Card>
            <Card bar="green" style={{ margin: '0 5px' }}>
              <CardContent>
                <CardTitle>Card with Colored Bar</CardTitle>
                <p>
                  Every color in calcite can be used as a colored "bar" along
                  the top of a card to provide a bit of visual punch with{' '}
                  <code>bar="{'{color}'}"</code>
                </p>
                <Button clear>What Colors?</Button>
              </CardContent>
            </Card>
            <Card bar="yellow" style={{ margin: '0 5px' }}>
              <CardContent>
                <CardTitle>Card with Colored Bar</CardTitle>
                <p>
                  Every color in calcite can be used as a colored "bar" along
                  the top of a card to provide a bit of visual punch with{' '}
                  <code>bar="{'{color}'}"</code>
                </p>
                <Button clear>What Colors?</Button>
              </CardContent>
            </Card>
            <Card bar="red" style={{ margin: '0 5px' }}>
              <CardContent>
                <CardTitle>Card with Colored Bar</CardTitle>
                <p>
                  Every color in calcite can be used as a colored "bar" along
                  the top of a card to provide a bit of visual punch with{' '}
                  <code>bar="{'{color}'}"</code>
                </p>
                <Button clear>What Colors?</Button>
              </CardContent>
            </Card>
          </GuideExample>

          <pre>
            <code>
              Alert sample code here (also needs styling to match calcite-web?)
            </code>
          </pre>
        </Fragment>
      </ThemeProvider>
    );
  })
  .add('wide', () => {
    return (
      <ThemeProvider theme={CalciteTheme}>
        <Fragment>
          <GuideExample label="wide">
            <Card wide>
              <CardImage
                wide
                src={cardImage}
                caption="Florida, January 1954"
                alt="Bridge Club, 1954"
              />
              <CardContent wide>
                <CardTitle>Wide Cards</CardTitle>
                <p>
                  Wide cards are just like standard cards except that they are
                  displayed in landscape orientation. This is useful in
                  situations where there is too much content to display well in
                  a standard card.
                </p>
                <p>
                  Generally wide cards are meant to be displayed one-up, not
                  grouped.
                </p>
              </CardContent>
            </Card>
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

storiesOf('Table', module).add('default', () => {
  return (
    <ThemeProvider theme={CalciteTheme}>
      <Fragment>
        <GuideExample>
          <Table>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>Thing 1</TableHeaderCell>
                <TableHeaderCell>Thing 2</TableHeaderCell>
                <TableHeaderCell>Thing 3</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>a</TableCell>
                <TableCell>b</TableCell>
                <TableCell>c</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>x</TableCell>
                <TableCell>y</TableCell>
                <TableCell>z</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GuideExample>

        <GuideExample label="blue">
          <Table blue>
            <TableHeader blue>
              <TableHeaderRow blue>
                <TableHeaderCell blue>Thing 1</TableHeaderCell>
                <TableHeaderCell blue>Thing 2</TableHeaderCell>
                <TableHeaderCell blue>Thing 3</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody blue>
              <TableRow blue>
                <TableCell blue>a</TableCell>
                <TableCell blue>b</TableCell>
                <TableCell blue>c</TableCell>
              </TableRow>
              <TableRow blue>
                <TableCell blue>x</TableCell>
                <TableCell blue>y</TableCell>
                <TableCell blue>z</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GuideExample>

        <GuideExample label="striped">
          <Table striped>
            <TableHeader striped>
              <TableHeaderRow striped>
                <TableHeaderCell striped>Thing 1</TableHeaderCell>
                <TableHeaderCell striped>Thing 2</TableHeaderCell>
                <TableHeaderCell striped>Thing 3</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody striped>
              <TableRow striped>
                <TableCell striped>a</TableCell>
                <TableCell striped>b</TableCell>
                <TableCell striped>c</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell striped>x</TableCell>
                <TableCell striped>y</TableCell>
                <TableCell striped>z</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GuideExample>

        <GuideExample label="plain">
          <Table plain>
            <TableHeader plain>
              <TableHeaderRow plain>
                <TableHeaderCell plain>Thing 1</TableHeaderCell>
                <TableHeaderCell plain>Thing 2</TableHeaderCell>
                <TableHeaderCell plain>Thing 3</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody plain>
              <TableRow plain>
                <TableCell plain>a</TableCell>
                <TableCell plain>b</TableCell>
                <TableCell plain>c</TableCell>
              </TableRow>
              <TableRow plain>
                <TableCell plain>x</TableCell>
                <TableCell plain>y</TableCell>
                <TableCell plain>z</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GuideExample>

        <GuideExample label="blue striped">
          <Table blue striped>
            <TableHeader blue striped>
              <TableHeaderRow blue striped>
                <TableHeaderCell blue striped>
                  Thing 1
                </TableHeaderCell>
                <TableHeaderCell blue striped>
                  Thing 2
                </TableHeaderCell>
                <TableHeaderCell blue striped>
                  Thing 3
                </TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody blue striped>
              <TableRow blue striped>
                <TableCell blue striped>
                  a
                </TableCell>
                <TableCell blue striped>
                  b
                </TableCell>
                <TableCell blue striped>
                  c
                </TableCell>
              </TableRow>
              <TableRow blue striped>
                <TableCell blue striped>
                  x
                </TableCell>
                <TableCell blue striped>
                  y
                </TableCell>
                <TableCell blue striped>
                  z
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GuideExample>

        <GuideExample label="no-table">
          <Table no-table>
            <TableHeader no-table>
              <TableHeaderRow no-table>
                <TableHeaderCell no-table>Thing 1</TableHeaderCell>
                <TableHeaderCell no-table>Thing 2</TableHeaderCell>
                <TableHeaderCell no-table>Thing 3</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody no-table>
              <TableRow no-table>
                <TableCell no-table>a</TableCell>
                <TableCell no-table>b</TableCell>
                <TableCell no-table>c</TableCell>
              </TableRow>
              <TableRow no-table>
                <TableCell no-table>x</TableCell>
                <TableCell no-table>y</TableCell>
                <TableCell no-table>z</TableCell>
              </TableRow>
            </TableBody>
          </Table>
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
            <TopNavBrand src={EsriLogo} />
            <TopNavTitle href="#">ArcGIS for Developers</TopNavTitle>
            <TopNavList>
              <TopNavLink href="#">Plans</TopNavLink>
              <TopNavLink href="#">Community</TopNavLink>
              <TopNavLink href="#">Docs</TopNavLink>
            </TopNavList>
            <TopNavActionsList>
              <TopNavLink href="#">Sign In</TopNavLink>
              <Button clear>Sign Up</Button>
            </TopNavActionsList>
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
