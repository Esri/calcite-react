import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { linkColor } from '../../utils/color';

const Breadcrumbs = ({ children, ...other }) => {
  const StyledBreadcrumbs = styled.nav`
    font-size: 0.875rem;
    line-height: 1.55rem;
    color: ${props => props.theme.palette.darkerGray};

    ${props =>
      props.white &&
      css`
        > a,
        > span {
          color: ${props.theme.palette.white};
          ${linkColor(
            props.theme.palette.white,
            props.theme.palette.lightestGray
          )};

          &::before {
            color: theme.palette.white;
          }
        }
      `};
  `;

  const breadcrumbs = (
    <StyledBreadcrumbs {...other}>{children}</StyledBreadcrumbs>
  );

  return breadcrumbs;
};

Breadcrumbs.propTypes = {
  children: PropTypes.node
};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
