import styled, { css } from 'styled-components';
import { transition } from '../utils/helpers';

const StyledDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;
  background: ${props => props.theme.palette.transparentBlack};
  transition: ${transition('opacity')};
  z-index: 1001;

  ${props =>
    props.active &&
    css`
      visibility: visible;
      opacity: 1;
      background-color: ${props => props.theme.palette.transparentBlack};
    `};
`;

const StyledDrawerNav = styled.nav`
  position: absolute;
  top: 0;
  left: -${props => props.drawerWidth}px;
  height: 100%;
  width: ${props => props.drawerWidth}px;
  margin: 0;
  padding: 0;
  list-style: none;
  background: ${props => props.theme.palette.white};
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transition: ${transition('all')};

  ${props =>
    props.right &&
    css`
      left: auto;
      right: -${props => props.drawerWidth}px;
    `};

  ${props =>
    props.active &&
    css`
      left: 0;

      ${props.right &&
        css`
          left: auto;
          right: 0;
        `};
    `};
`;

export { StyledDrawer, StyledDrawerNav };
