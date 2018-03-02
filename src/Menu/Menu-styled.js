import { css } from 'styled-components';
import { StyledSideNav } from '../SideNav/SideNav-styled';
import { a } from '../utils/elements';
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

const StyledMenuItem = a.extend`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
  ${fontSize(-2)};
  color: ${props => props.theme.palette.darkerGray};
  background-color: ${props => props.theme.palette.white};
  border-top: 1px solid ${props => props.theme.palette.lightestGray};
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.palette.offWhite};
    text-decoration: none;
    color: ${props => props.theme.palette.darkerGray};
  }

  ${props =>
    props.active &&
    css`
      &,
      &:focus {
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

export { StyledMenu, StyledMenuItem, StyledMenuTitle };
