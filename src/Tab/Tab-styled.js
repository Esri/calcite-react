import styled, { css } from 'styled-components';
import { fontSize } from '../utils/helpers';
import { CalciteA } from '../Elements';

const StyledTabMain = styled.div`
  padding: 0;
  flex: 1 0 auto;
  margin-left: -0.75em;
  ${props =>
    props.right &&
    css`
      float: right;
    `};
`;
const StyledTabLink = CalciteA.extend`
  padding: 5px 10px;
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

const StyledTabContainer = styled.div`
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const StyledTabChildContainer = styled.div`
  padding: 2px 4px;
  display: block;
  margin-top: 15px;
`;

const StyledTabItem = styled.div`
  background-color: ${props => props.theme.palette.darkGray};
  display: inline-block;
  margin-right: 1px;

  ${props =>
    props.children.props.active &&
    css`
      color: ${props => props.theme.palette.white};
      border: none;
      background-color: ${props => props.theme.palette.white};
    `};
`;

export {
  StyledTabMain,
  StyledTabLink,
  StyledTabContainer,
  StyledTabItem,
  StyledTabChildContainer
};
