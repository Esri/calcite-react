import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Table.md';
import Table, {
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell
} from '../';

storiesOf('Table', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
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
    </div>
  ))
);
