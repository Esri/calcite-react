import styled, { css } from 'styled-components';
import { StyledSideNav } from '../SideNav/SideNav-styled';
import { CalciteA } from '../utils/elements';
import { unitCalc, fontSize } from '../utils/helpers';

const StyledMenu = StyledSideNav.extend`
  min-width: 200px;
  box-shadow: ${props => props.theme.boxShadow};
  z-index: 1000;
  overflow: auto;

  ${props =>
    props.right &&
    css`
      right: 0;
    `};
`;

const StyledMenuItem = CalciteA.extend`
  position: relative;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
  ${fontSize(-1)};
  color: ${props => props.theme.palette.darkerGray};
  background-color: ${props => props.theme.palette.white};
  border-top: 1px solid ${props => props.theme.palette.lightestGray};
  white-space: nowrap;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      background-color: ${props => props.theme.palette.offWhite};
      text-decoration: none;
      color: ${props => props.theme.palette.darkerGray};
    `};
  &:hover {
    background-color: ${props => props.theme.palette.offWhite};
    text-decoration: none;
    color: ${props => props.theme.palette.darkerGray};
  }

  ${props =>
    props.selected &&
    css`
      &,
      &:focus,
      &:hover {
        text-indent: -3px;
        border-left: 3px solid ${props => props.theme.palette.blue};
      }
    `};
`;

const StyledMenuTitleLink = StyledMenuItem.extend`
  background-color: ${props => props.theme.palette.offWhite};
  cursor: auto;
`;

const StyledMenuTitle = StyledMenuTitleLink.withComponent('span');

const StyledMenuItemSubtitle = styled.span`
  ${fontSize(-3)};
  color: ${props => props.theme.palette.lighterGray};

  *:hover > & {
    color: ${props => props.theme.palette.lightGray};
  }
`;

export { StyledMenu, StyledMenuItem, StyledMenuTitle, StyledMenuItemSubtitle };
