import styled, { css } from 'styled-components';
import { linkColor } from '../../utils/color';
import { a } from '../../utils/elements';

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
`;

export { StyledBreadcrumbs, StyledCrumb, StyledSpanCrumb };
