import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { unitCalc } from '../../utils/helpers';

const TableHeaderCell = ({ children, ...other }) => {
  const StyledTableHeaderCell = styled.th`
    font-weight: 300;
    border-left: 1px solid ${props => props.theme.palette.lighterGray};
    border-right: 1px solid ${props => props.theme.palette.lighterGray};
    padding: ${props => unitCalc(props.theme.baseline, 3, '/')};

    ${props =>
      props.blue &&
      css`
        border-color: ${props => props.theme.palette.blue};
      `};

    ${props =>
      props.plain &&
      css`
        background-color: transparent;
        border: none;
      `};

    ${props =>
      props['no-table'] &&
      css`
        background-color: transparent;
        border: none;
      `};
  `;

  const tableHeaderCell = (
    <StyledTableHeaderCell {...other}>{children}</StyledTableHeaderCell>
  );

  return tableHeaderCell;
};

TableHeaderCell.propTypes = {
  children: PropTypes.node
};

TableHeaderCell.defaultProps = {};

export default TableHeaderCell;
