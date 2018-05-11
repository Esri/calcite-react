import styled, { css } from 'styled-components';
import {
  subNavUnderline,
  fontSize,
  unitCalc,
  transition
} from '../utils/helpers';
import { CalciteA } from '../Elements';

const StyledTab = styled.div`
  padding: 0;
  flex: 1 0 auto;
  margin-left: ${props => unitCalc(props.theme.baseline, 2, '/')};
  ${props =>
    props.right &&
    css`
      float: right;
    `};
`;

const StyledTabTitle = CalciteA.extend`
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

const StyledTabNav = styled.nav`
  display: flex;
  align-items: flex-end;
  height: 32px;
  margin-top: 0em;
  flex: 1 0 75%;
  padding-left: 0.25em;
  box-sizing: border-box;
`;

const StyledTabContents = styled.div`
  padding: 2px 4px;
  display: block;
  margin-top: ${props => unitCalc(props.theme.baseline, 2, '/')};
`;

export { StyledTab, StyledTabTitle, StyledTabNav, StyledTabContents };
