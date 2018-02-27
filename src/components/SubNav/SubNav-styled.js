import styled, { css } from 'styled-components';
import { a, h1 } from '../../utils/elements';
import { subNavUnderline, unitCalc, fontSize } from '../../utils/helpers';

const StyledSubNav = styled.header`
  background-color: ${props => props.theme.palette.lightestGray};

  ${props =>
    props.blue &&
    css`
      background-color: ${props.theme.palette.darkerBlue};
    `};
`;

const StyledSubNavLink = a.extend`
  padding: .25em .75em;
  margin: 0 .25em 0 0;
  font-family: ${props => props.theme.avenirFamily};
  color: ${props => props.theme.palette.offWhite};
  ${fontSize(-1)};
  background-color: ${props => props.theme.palette.transparentOffBlack};
  box-sizing: border-box;
  transition: background-color 150ms linear, color 150ms 150ms linear;
  display: inline-block;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.transparentDarkerGray};
    color: ${props => props.theme.palette.white};
    text-decoration: none;
    ${props => subNavUnderline(props)};
  }

  ${props =>
    props.active &&
    css`
      &,
      &:hover,
      &:focus {
        background-color: ${props.theme.palette.white};
        color: ${props.theme.palette.offBlack};
      }
    `}
`;

const StyledSubNavList = styled.nav``;

const StyledSubNavTitle = h1.extend`
  ${fontSize(4)}
  margin-top: ${props => unitCalc(props.theme.baseline, 2, '/')};
  margin-bottom: ${props => unitCalc(props.theme.baseline, 2, '/')};
  display: inline-block;
  line-height: 1.25;

  ${props =>
    props.blue &&
    css`
      color: ${props.theme.palette.white};
    `};
`;

export { StyledSubNav, StyledSubNavLink, StyledSubNavList, StyledSubNavTitle };
