import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import CalciteTheme from '../../src/theme/CalciteTheme';
import GuideExample from '../../stories/GuideExample';

import Table, {
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell
} from './';

const doc = `Table doc is TBD`;

storiesOf('Table', module).add(
  'Default',
  withInfo(doc)(() => (
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

        <GuideExample label="striped">
          <Table striped>
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

        <GuideExample label="plain">
          <Table plain>
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

        <GuideExample label="blue striped">
          <Table blue striped>
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

        <GuideExample label="noTable">
          <Table noTable>
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
      </Fragment>
    </ThemeProvider>
  ))
);
