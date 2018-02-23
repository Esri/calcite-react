import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import CalciteTheme from '../../../src/theme/CalciteTheme';
import GuideExample from '../../../stories/GuideExample';

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
      </Fragment>
    </ThemeProvider>
  ))
);
