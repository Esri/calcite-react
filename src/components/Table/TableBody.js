import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const TableBody = ({ children, ...other }) => {
  const StyledTableBody = styled.tbody`
    overflow: auto;
    width: 100%;

    ${props =>
      props['no-table'] &&
      css`
        border: none;
        background-color: transparent;
        overflow: auto;
        width: 100%;
        font-size: 1rem;
        line-height: 1.55rem;
      `};
  `;

  const tableBody = <StyledTableBody {...other}>{children}</StyledTableBody>;

  return tableBody;
};

TableBody.propTypes = {
  children: PropTypes.node
};

TableBody.defaultProps = {};

export default TableBody;
