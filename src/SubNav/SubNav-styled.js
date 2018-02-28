import styled, { css } from 'styled-components';
import { a, h1 } from '../utils/elements';
import { subNavUnderline, unitCalc, fontSize } from '../utils/helpers';

const StyledSubNav = styled.header`
  background-color: ${props => props.theme.palette.lightestGray};
  display: flex;
  flex-wrap: wrap;

  ${props =>
    props.blue &&
    css`
      background-color: ${props.theme.palette.darkerBlue};
    `};
`;

const StyledSubNavLink = a.extend`
  padding: .25em .75em;
  margin: 0 0 0 .25em;
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

const StyledSubNavList = styled.nav`
  flex: 1 0 auto;
  display: flex;
  align-items: flex-end;
  margin-top: ${props => unitCalc(props.theme.baseline, 2, '/')};
`;

const StyledSubNavActions = styled.nav`
  margin: ${props => unitCalc(props.theme.baseline, 2, '/')} 0.5em 0.5em;
`;

const StyledSubNavTitle = h1.extend`
  ${fontSize(4)}
  padding-left: .25em;
  margin-top: ${props => unitCalc(props.theme.baseline, 2, '/')};
  margin-bottom: 0;
  display: inline-block;
  line-height: 1.25;
  width: 100%;
  box-sizing: border-box;

  ${props =>
    props.blue &&
    css`
      color: ${props.theme.palette.white};
    `};
`;

export {
  StyledSubNav,
  StyledSubNavLink,
  StyledSubNavList,
  StyledSubNavTitle,
  StyledSubNavActions
};
