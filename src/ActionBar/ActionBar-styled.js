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
import { unitCalc } from '../utils/helpers';

// Calcite theme and Esri colors

// Calcite components
import Button from '../Button';

// Icons

// Third party librarie
const StyledActionGroup = styled.div`
  width: 100%;
  flex: 0 0 auto;
  border-bottom: 1px solid ${props => props.theme.palette.lightestGray};
`;

const StyledBottomActionGroup = styled.div`
  width: 100%;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledActionBar = styled.div`
  height: 100%;
  width: 180px;
  flex: 0 0 180px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette.white};
  border-right: 1px solid ${props => props.theme.palette.lightestGray};
  align-items: flex-start;

  html[dir='rtl'] & {
    border-right: none;
    border-left: 1px solid ${props => props.theme.palette.lightestGray};
  }

  ${props =>
    props.dark &&
    css`
      background-color: ${props => props.theme.palette.offBlack};

      ${StyledActionGroup} {
        border-bottom-color: ${props => props.theme.palette.black};
      }
    `};

  ${props =>
    props.collapsed &&
    css`
      width: 49px;
      flex: 0 0 49px;
    `};
`;

const StyledActionBarCollapseContainer = styled.div`
  width: 100%;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${StyledBottomActionGroup} + & {
    flex: 0 0 auto;
  }
`;

const StyledCollapseAction = styled(Button).attrs(({ collapsed }) => {
  return {
    white: true,
    iconButton: collapsed,
    iconPosition: 'before',
    fullWidth: true,
    extraSmall: true
  };
})`
  height: 48px;
  color: ${props => props.theme.palette.black};
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
  border: none;
  white-space: normal;
  text-align: start;
  line-height: 1rem;
  background: transparent;

  ${props =>
    props.dark &&
    css`
      color: ${props => props.theme.palette.white};
    `};

  &:hover {
    color: ${props => props.theme.palette.black};
    background: ${props => props.theme.palette.lightestGray};

    ${props =>
      props.dark &&
      css`
        color: ${props => props.theme.palette.white};
        background: ${props => props.theme.palette.black};
      `};
  }

  ${props =>
    !props.collapsed &&
    css`
      display: flex;
      justify-content: flex-start;
      padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
      padding-left: ${props => unitCalc(props.theme.baseline, 1.5, '/')};

      html[dir='rtl'] & {
        padding-left: ${props => unitCalc(props.theme.baseline, 3, '/')};
        padding-right: ${props => unitCalc(props.theme.baseline, 1.5, '/')};
      }
    `};

  svg {
    flex-shrink: 0;
    margin-left: 0 !important;

    ${props =>
      props.position === 'end' &&
      css`
        transform: rotate(180deg);
      `};

    html[dir='rtl'] & {
      margin-left: ${props =>
        unitCalc(props.theme.baseline, 2, '/')} !important;
      margin-right: 0 !important;
      transform: rotate(180deg);

      ${props =>
        props.position === 'end' &&
        css`
          transform: rotate(0deg);
        `};

      ${props =>
        props.collapsed &&
        css`
          margin-left: 0 !important;
        `};
    }
  }
`;

const StyledAction = styled(StyledCollapseAction)`
  ${props =>
    props.active &&
    css`
      &,
      &:hover {
        color: ${props.theme.palette.darkBlue};
        background: ${props.theme.palette.lightestBlue};

        ${props.dark &&
          css`
            color: ${props.theme.palette.Brand_Blue_120};
            background: #151515;
          `};
      }
    `};

  & {
    position: relative;

    ${props =>
      props.hasNotification &&
      css`
        &::after {
          content: '';
          border: 3px solid ${props => props.theme.palette.blue};
          position: absolute;
          bottom: 6px;
          right: 6px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: ${props => props.theme.palette.white};

          html[dir='rtl'] & {
            right: auto;
            left: 6px;
          }
        }
      `};
  }

  svg {
    transform: rotate(0deg) !important;
  }
`;

const TooltipWrapperStyles = {
  width: '100%'
};

export {
  StyledActionBar,
  StyledActionGroup,
  StyledBottomActionGroup,
  StyledActionBarCollapseContainer,
  StyledCollapseAction,
  StyledAction,
  TooltipWrapperStyles
};
