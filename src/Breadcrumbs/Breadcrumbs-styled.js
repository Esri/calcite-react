import styled, { css } from 'styled-components';
import { linkColor } from '../utils/color';
import { a } from '../utils/elements';
import { fontSize } from '../utils/helpers';

const StyledBreadcrumbs = styled.nav`
  ${fontSize(-2)};
  color: ${props => props.theme.palette.darkerGray};
`;

const StyledCrumb = a.extend`
  color: ${props => props.theme.palette.darkerGray};

  &::before {
    content: '/';
    color: ${props => props.theme.palette.darkerGray};
    font-weight: 400;
    display: inline-block;
    padding: 0 0.5rem;
  }

  &:first-child::before {
    display: none;
  }

  &:last-child {
    font-weight: 600;
  }

  ${props =>
    props.white &&
    css`
      color: ${props.theme.palette.white};
      ${linkColor(props.theme.palette.white, props.theme.palette.lightestGray)};

      &::before {
        color: ${props.theme.palette.white};
      }
    `};
`;

const StyledSpanCrumb = styled.span`
  color: ${props => props.theme.palette.darkerGray};

  &::before {
    content: '/';
    color: ${props => props.theme.palette.darkerGray};
    font-weight: 400;
    display: inline-block;
    padding: 0 0.5rem;
  }

  &:first-child::before {
    display: none;
  }

  &:last-child {
    font-weight: 600;
  }

  ${props =>
    props.white &&
    css`
      color: ${props.theme.palette.white};
      ${linkColor(props.theme.palette.white, props.theme.palette.lightestGray)};

      &::before {
        color: ${props.theme.palette.white};
      }
    `};
`;

export { StyledBreadcrumbs, StyledCrumb, StyledSpanCrumb };
