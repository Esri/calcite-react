import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const Table = ({ children, ...other }) => {
  const StyledTable = styled.table`
    width: 100%;
    background-color: ${props => props.theme.palette.white};
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid ${props => props.theme.palette.lighterGray};
    text-align: left;
    overflow: auto;
    font-size: 0.875rem;
    line-height: 1.55rem;

    ${props =>
      props.blue &&
      css`
        border-color: ${props => props.theme.palette.blue};
      `};

    ${props =>
      props.plain &&
      css`
        border: none;
      `};

    ${props =>
      props['no-table'] &&
      css`
        width: auto;
        background-color: transparent;
        border-collapse: auto;
        border-spacing: 0;
        border: none;
        text-align: left;
        overflow: auto;
        margin-bottom: 0;
      `};
  `;

  const table = <StyledTable {...other}>{children}</StyledTable>;

  return table;
};

Table.propTypes = {
  children: PropTypes.node
};

Table.defaultProps = {};

export default Table;
