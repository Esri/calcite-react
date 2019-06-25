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
  display: inline-block;
  box-shadow: ${props => props.theme.boxShadow};
  z-index: 1000;
  overflow: auto;
  ${fontSize(0)}

  ${props =>
    props.right &&
    css`
      right: 0;
    `};
  ${props =>
    props.extraSmall &&
    css`
      width: 200px;
      ${fontSize(-3)};
    `};

  ${props =>
    props.small &&
    css`
      width: 220px;
      ${fontSize(-2)};
    `};

  ${props =>
    props.large &&
    css`
      width: 240px;
      ${fontSize(1)};
    `};

  ${props =>
    props.extraLarge &&
    css`
      width: 280px;
      ${fontSize(2)};
    `};
`;

const StyledMenuItem = styled(CalciteA)`
  position: relative;
  display: flex;
  justify-content: space-between;
  min-height: 42px;
  box-sizing: border-box;
  font-size: 0.9em;
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
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

  ${props =>
    props.extraSmall &&
    css`
      min-height: auto;
      padding-top: 0;
      padding-bottom: 0;
      padding-left: ${props => unitCalc(props.theme.baseline, 6, '/')};
      padding-right: ${props => unitCalc(props.theme.baseline, 6, '/')};
    `};

  ${props =>
    props.small &&
    css`
      min-height: ${props => unitCalc(props.theme.baseline, 4, '/')};
      padding-top: ${props => unitCalc(props.theme.baseline, 6, '/')};
      padding-bottom: ${props => unitCalc(props.theme.baseline, 6, '/')};
      padding-left: ${props => unitCalc(props.theme.baseline, 4, '/')};
      padding-right: ${props => unitCalc(props.theme.baseline, 4, '/')};
    `};

  ${props =>
    props.large &&
    css`
      min-height: ${props => unitCalc(props.theme.baseline, 2, '/')};
      padding: ${props => unitCalc(props.theme.baseline, 2, '/')};
    `};

  ${props =>
    props.extraLarge &&
    css`
      line-height: 20px;
      padding: ${props => unitCalc(props.theme.baseline, 1.5, '/')};
      font-weight: 300;
    `};
`;

const StyledMenuTitle = styled(StyledMenuItem)`
  background-color: ${props => props.theme.palette.offWhite};
  cursor: auto;
`;

const StyledMenuItemSubtitle = styled.span`
  font-size: 0.85em;
  color: ${props => props.theme.palette.lighterGray};

  *:hover > & {
    color: ${props => props.theme.palette.lightGray};
  }
`;

export { StyledMenu, StyledMenuItem, StyledMenuTitle, StyledMenuItemSubtitle };
