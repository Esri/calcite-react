import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const TableHeader = ({ children, ...other }) => {
  const StyledTableHeader = styled.thead`
    background-color: ${props => props.theme.palette.lightestGray};
    border-bottom: 1px solid ${props => props.theme.palette.lighterGray};
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.55rem;

    ${props =>
      props.blue &&
      css`
        background-color: ${props => props.theme.palette.blue};
        border: none;
        border-bottom: 1px solid ${props => props.theme.palette.blue};
        color: ${props => props.theme.palette.white};
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
        border: none;
        background-color: transparent;
        overflow: auto;
        width: 100%;
      `};
  `;

  const tableHeader = (
    <StyledTableHeader {...other}>{children}</StyledTableHeader>
  );

  return tableHeader;
};

TableHeader.propTypes = {
  children: PropTypes.node
};

TableHeader.defaultProps = {};

export default TableHeader;
