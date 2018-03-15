import PropTypes from 'prop-types';
import React from 'react';

import Table, {
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell
} from '../../src/Table';

import PropVal from '@storybook/addon-info/dist/components/PropVal';
import PrettyPropType from './types/PrettyPropType';

export const multiLineText = input => {
  if (!input) return input;
  const text = String(input);
  const arrayOfText = text.split(/\r?\n|\r/g);
  const isSingleLine = arrayOfText.length < 2;
  return isSingleLine
    ? text
    : arrayOfText.map((
        lineOfText,
        i // note: lineOfText is the closest we will get to a unique key
      ) => (
        <span key={lineOfText}>
          {i > 0 && <br />} {lineOfText}
        </span>
      ));
};

export default function PropTable(props) {
  const {
    type,
    maxPropObjectKeys,
    maxPropArrayLength,
    maxPropStringLength,
    propDefinitions
  } = props;

  if (!type) {
    return null;
  }

  if (!propDefinitions.length) {
    return <small>No propTypes defined!</small>;
  }

  const propValProps = {
    maxPropObjectKeys,
    maxPropArrayLength,
    maxPropStringLength
  };

  return (
    <Table striped>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderCell bordered>Name</TableHeaderCell>
          <TableHeaderCell bordered>Type</TableHeaderCell>
          <TableHeaderCell bordered>Required</TableHeaderCell>
          <TableHeaderCell bordered>Default Value</TableHeaderCell>
          <TableHeaderCell bordered>Description</TableHeaderCell>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {propDefinitions.map(row => (
          <TableRow key={row.property}>
            <TableCell bordered code>
              {row.property}
            </TableCell>
            <TableCell bordered code>
              <PrettyPropType propType={row.propType} />
            </TableCell>
            <TableCell bordered>{row.required ? 'Yes' : 'No'}</TableCell>
            <TableCell bordered>
              {row.defaultValue === undefined ? (
                '-'
              ) : (
                <PropVal val={row.defaultValue} {...propValProps} />
              )}
            </TableCell>
            <TableCell bordered>{multiLineText(row.description)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

PropTable.displayName = 'PropTable';
PropTable.defaultProps = {
  type: null,
  propDefinitions: []
};
PropTable.propTypes = {
  type: PropTypes.func,
  maxPropObjectKeys: PropTypes.number.isRequired,
  maxPropArrayLength: PropTypes.number.isRequired,
  maxPropStringLength: PropTypes.number.isRequired,
  propDefinitions: PropTypes.arrayOf(
    PropTypes.shape({
      property: PropTypes.string.isRequired,
      propType: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      required: PropTypes.bool,
      description: PropTypes.string,
      defaultValue: PropTypes.any
    })
  )
};
