import styled, { css } from 'styled-components';
import { fontSize, unitCalc } from '../utils/helpers';
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
  padding: ${props => unitCalc(props.theme.baseline, 4, '/')}
    ${props => unitCalc(props.theme.baseline, 2, '/')};
  font-family: ${props => props.theme.avenirFamily};
  color: ${props => props.theme.palette.offWhite};
  ${fontSize(-1)};
  box-sizing: border-box;
  transition: background-color 150ms linear, color 150ms 150ms linear;
  display: inline-block;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.transparentDarkerGray};
    color: ${props => props.theme.palette.white};
    text-decoration: none;
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

const StyledTabNav = styled.div`
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const StyledTabContents = styled.div`
  padding: 2px 4px;
  display: block;
  margin-top: ${props => unitCalc(props.theme.baseline, 2, '/')};
`;

const StyledTabSection = styled.div`
  background-color: ${props => props.theme.palette.darkGray};
  display: inline-block;
  margin-right: ${props => unitCalc(props.theme.baseline, 28, '/')};
`;

export {
  StyledTab,
  StyledTabTitle,
  StyledTabNav,
  StyledTabSection,
  StyledTabContents
};
