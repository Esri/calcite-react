import styled, { css } from 'styled-components';
import { CalciteA, CalciteH1 } from '../Elements';
import {
  subNavUnderline,
  unitCalc,
  fontSize,
  backgroundGradient,
  transition
} from '../utils/helpers';

const StyledSubNav = styled.header`
  position: relative;
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

const StyledSubNavLeftContent = styled.div`
  display: flex;
  flex: 1 0 200px;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledSubNavLink = CalciteA.extend`
  padding: 0.25em 0.75em;
  margin: 0 0 0 0.25em;
  font-family: ${props => props.theme.avenirFamily};
  color: ${props => props.theme.palette.offWhite};
  ${fontSize(-1)};
  background-color: ${props => props.theme.palette.transparentOffBlack};
  box-sizing: border-box;
  transition: background-color ${transition()}, color ${transition('150ms')};
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

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `};
`;

const StyledSubNavList = styled.nav`
  display: flex;
  height: 32px;
  margin-top: 0em;
  padding-left: 0.25em;
  box-sizing: border-box;
`;

const StyledSubNavActions = styled.nav`
  margin: 0.5em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledSubNavTitle = CalciteH1.extend`
  ${fontSize(4)};
  padding-left: 0.25em;
  margin-top: ${props => unitCalc(props.theme.baseline, 2, '/')};
  margin-bottom: ${props => unitCalc(props.theme.baseline, 2, '/')};
  line-height: 1.25
  box-sizing: border-box;

  ${props =>
    props.blue &&
    css`
      color: ${props.theme.palette.white};
    `};
`;

const StyledMultiRowActions = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  StyledSubNav,
  StyledSubNavLeftContent,
  StyledSubNavLink,
  StyledSubNavList,
  StyledSubNavTitle,
  StyledSubNavActions,
  StyledMultiRowActions
};
