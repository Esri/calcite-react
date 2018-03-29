import styled, { css } from 'styled-components';
import { CalciteA, CalciteH1 } from '../Elements';
import {
  subNavUnderline,
  unitCalc,
  fontSize,
  backgroundGradient
} from '../utils/helpers';

const StyledSubNav = styled.header`
  background-color: ${props => props.theme.palette.lightestGray};
  display: flex;
  flex-wrap: wrap;

  ${props =>
    props.blue &&
    css`
      background-color: ${props.theme.palette.darkerBlue};
    `};

  ${props =>
    props.backgroundImage &&
    css`
      ${backgroundGradient(
        props.backgroundImage,
        props.gradientFromColor,
        props.gradientToColor,
        props.overlayGradient
      )};
    `};
`;

const StyledSubNavLink = CalciteA.extend`
  padding: 0.25em 0.75em;
  margin: 0 0 0 0.25em;
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
    `} .active > &, .active > &:hover, .active > &:focus {
    background-color: ${props => props.theme.palette.white};
    color: ${props => props.theme.palette.offBlack};
  }
`;

const StyledSubNavList = styled.nav`
  display: flex;
  align-items: flex-end;
  height: 32px;
  margin-top: 0em;
  flex: 1 0 75%;
  padding-left: 0.25em;
  box-sizing: border-box;
`;

const StyledSubNavActions = styled.nav`
  margin: 0.5em;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  nav + & {
    margin-top: -0.5em;
    height: 32px;
  }
`;

const StyledSubNavTitle = CalciteH1.extend`
  ${fontSize(4)};
  padding-left: 0.25em;
  margin-top: ${props => unitCalc(props.theme.baseline, 2, '/')};
  margin-bottom: ${props => unitCalc(props.theme.baseline, 2, '/')};
  display: inline-block;
  line-height: 1.25;
  flex: 1 0 75%;
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
