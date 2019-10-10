// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

// styled-components
import styled, { css } from 'styled-components';

// Utils, common elements
import { transition } from '../utils/helpers';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components

// Icons

// Third party libraries

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
StyledDrawer.defaultProps = { theme };

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
StyledDrawerNav.defaultProps = { theme };

export { StyledDrawer, StyledDrawerNav };
