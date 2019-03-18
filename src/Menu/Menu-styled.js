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

import styled, { css } from 'styled-components';
import { StyledSideNav } from '../SideNav/SideNav-styled';
import { CalciteA } from '../Elements';
import { unitCalc, fontSize } from '../utils/helpers';

const StyledMenu = styled(StyledSideNav)`
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

const StyledMenuItem = styled(CalciteA)`
  position: relative;
  display: flex;
  justify-content: space-between;
  min-height: 42px;
  box-sizing: border-box;
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
  ${fontSize(-1)};
  color: ${props => props.theme.palette.darkerGray};
  background-color: ${props => props.theme.palette.white};
  border-top: 1px solid ${props => props.theme.palette.lightestGray};
  white-space: nowrap;
  cursor: pointer;

  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `};

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

const StyledMenuTitle = styled(StyledMenuItem)`
  background-color: ${props => props.theme.palette.offWhite};
  cursor: auto;
`;

const StyledMenuItemSubtitle = styled.span`
  ${fontSize(-3)};
  color: ${props => props.theme.palette.lighterGray};

  *:hover > & {
    color: ${props => props.theme.palette.lightGray};
  }
`;

export { StyledMenu, StyledMenuItem, StyledMenuTitle, StyledMenuItemSubtitle };
