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
import { unitCalc, fontSize } from '../utils/helpers';
import { transparentize } from 'polished';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components

// Icons

// Third party libraries

// Just used to generate a unique className we can use on
// cloned instances of components
const StyledIconClass = styled.svg``;

const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => unitCalc(props.theme.baseline, 5, '/')} 0.9rem;
  width: auto;
  color: ${props => props.theme.palette.white};
  border: 1px solid ${props => props.theme.palette.blue};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.palette.blue};
  box-sizing: border-box;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  white-space: nowrap;
  ${fontSize(-1)};
  letter-spacing: 0em;
  font-family: inherit;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.palette.lightBlue};
    border-color: ${props => props.theme.palette.lightBlue};
    color: ${props => props.theme.palette.white};
  }

  .${StyledIconClass.styledComponentId} {
    fill: currentColor;
    vertical-align: bottom;

    ${props =>
      props.iconPosition === 'after' &&
      css`
        margin-left: 0.75em;
        margin-right: -0.25rem;

        html[dir='rtl'] & {
          margin-left: -0.25rem;
          margin-right: 0.75em;
        }
      `};

    ${props =>
      props.iconPosition === 'before' &&
      css`
        margin-left: -0.25rem;
        margin-right: 0.75em;

        html[dir='rtl'] & {
          margin-left: 0.75em;
          margin-right: -0.25rem;
        }
      `};

    ${props =>
      props.iconButton &&
      css`
        &,
        html[dir='rtl'] & {
          margin-left: 0;
          margin-right: 0;
        }
      `};
  }

  ${props =>
    props.isAdornment &&
    css`
      margin: ${unitCalc(props.theme.baseline, 6, '/')} 0 0 0;

      ${props =>
        props.minimal &&
        css`
          background: none;
          color: ${props.theme.linkColor};
          border: none;
          border-bottom: 1px solid ${props.theme.palette.lighterGray};

          &:hover {
            color: ${props.theme.linkHover};
            background: none;
            text-decoration: underline;
          }
        `};

      ${props =>
        props.adornmentDirection === 'left' &&
        css`
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        `};

      ${props =>
        props.adornmentDirection === 'right' &&
        css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        `};
    `};

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.3;
    `};

  ${props =>
    props.transparent &&
    css`
      background: none;
      color: ${props.theme.linkColor};
      border: none;

      &:hover {
        color: ${props.theme.linkHover};
        background: none;
        text-decoration: underline;
      }
    `};

  ${props =>
    props.inline &&
    css`
      display: inline;
      padding: 0;
      outline: none;
      border: none;
      font-weight: 500;
      white-space: initial;
      user-select: text;
      color: ${props.theme.linkColor};
      background-color: transparent;
      position: relative;
      background-image: linear-gradient(currentColor, currentColor),
        linear-gradient(
          ${transparentize(0.8, props.theme.linkColor)},
          ${transparentize(0.8, props.theme.linkColor)}
        );
      background-position: 0% 100%, 100% 100%;
      background-repeat: no-repeat, no-repeat;
      background-size: 0% 1px, 100% 1px;
      transition: all 0.15s ease-in-out, background-size 0.3s ease-in-out;

      &:hover,
      &:focus {
        color: ${props.theme.linkHover};
        background-color: transparent;
        background-size: 100% 1px, 100% 1px;

        .${StyledIconClass.styledComponentId} {
          fill: ${props.theme.linkHover};
        }
      }
      &:active {
        color: ${props.theme.linkColor};
        background-size: 100% 1px, 100% 1px;
      }

      .${StyledIconClass.styledComponentId} {
        fill: currentColor;
        vertical-align: middle;

        ${props =>
          props.iconPosition === 'after' &&
          css`
            margin-left: 0.33em;
            margin-right: 0;

            html[dir='rtl'] & {
              margin-left: 0;
              margin-right: 0.33em;
            }
          `};

        ${props =>
          props.iconPosition === 'before' &&
          css`
            margin-left: 0;
            margin-right: 0.33em;

            html[dir='rtl'] & {
              margin-left: 0.33em;
              margin-right: 0;
            }
          `};
      }
    `};

  ${props =>
    props.clear &&
    css`
      color: ${props.theme.palette.blue};
      background: ${props.theme.palette.white};
      border-color: ${props.theme.palette.blue};

      &:hover {
        color: ${props.theme.palette.white};
        background: ${props.theme.palette.darkBlue};
        border-color: ${props.theme.palette.darkBlue};
      }
    `};

  ${props =>
    props.clearGray &&
    css`
      background: none;
      color: ${props.theme.palette.gray};
      border-color: ${props.theme.palette.gray};
      &:hover {
        color: ${props.theme.palette.white};
        background: ${props.theme.palette.darkGray};
        border-color: ${props.theme.palette.darkGray};
      }
    `};

  ${props =>
    props.clearWhite &&
    css`
      background: none;
      color: ${props.theme.palette.white};
      border: 1px solid ${props.theme.palette.white};
      &:hover {
        color: ${props.theme.palette.gray};
        background: ${props.theme.palette.white};
        border-color: ${props.theme.palette.white};
      }
    `};

  ${props =>
    props.white &&
    css`
      background: ${props.theme.palette.white};
      color: ${props.theme.palette.offBlack};
      border: 1px solid ${props.theme.palette.white};
      &:hover {
        color: ${props.theme.palette.offBlack};
        background: ${props.theme.palette.lightestGray};
        border-color: ${props.theme.palette.lightestGray};
      }
    `};

  ${props =>
    props.halo &&
    css`
      color: ${props.theme.palette.blue};
      background: transparent;
      border-color: ${props.theme.palette.blue};
      box-shadow: inset 0 0 0 0 ${props.theme.palette.blue};

      &:hover {
        color: ${props.theme.palette.blue};
        background: transparent;
        border-color: ${props.theme.palette.blue};
        box-shadow: inset 0 0 0 2px ${props.theme.palette.blue};
      }
    `};

  ${props =>
    props.extraSmall &&
    css`
      ${fontSize(-3)};
      padding: 0.12rem 0.375rem;
    `};

  ${props =>
    props.small &&
    css`
      ${fontSize(-2)};
      padding: 0.2325rem 0.675rem;
    `};

  ${props =>
    props.large &&
    css`
      ${fontSize(0)};
      padding: 0.5rem 1rem 0.5rem;
    `};

  ${props =>
    props.extraLarge &&
    css`
      font-size: 17px;
      line-height: 20px;
      padding: 0.85rem 1.2rem 0.85rem;
      font-weight: 300;
    `};

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      text-align: center;
    `};

  ${props =>
    props.half &&
    css`
      width: 50%;
      text-align: center;
    `};

  ${props =>
    props.red &&
    css`
      color: ${props.theme.palette.red};
      background: transparent;
      border-color: ${props.theme.palette.red};

      &:hover {
        color: ${props.theme.palette.white};
        background: ${props.theme.palette.darkRed};
        border-color: ${props.theme.palette.darkRed};
      }
    `};

  ${props =>
    props.green &&
    css`
      color: ${props.theme.palette.white};
      background: ${props.theme.palette.green};
      border-color: ${props.theme.palette.green};

      &:hover {
        color: ${props.theme.palette.white};
        background: ${props.theme.palette.darkGreen};
        border-color: ${props.theme.palette.darkGreen};
      }
    `};

  ${props =>
    props.iconButton &&
    css`
      background: transparent;
      color: ${props.theme.palette.darkGray};
      border: none;
      padding: ${unitCalc(props.theme.baseline, 5, '/')};
      ${props =>
        props.white &&
        css`
          color: ${props.theme.palette.white};
        `};

      &:hover {
        color: ${props.theme.palette.offBlack};
        background: transparent;
        ${props =>
          props.white &&
          css`
            color: ${props.theme.palette.lightestGray};
          `};
      }
    `};

  ${props =>
    props.grouped &&
    css`
      margin-left: -1px;
      border-radius: 0;

      html[dir='rtl'] & {
        margin-right: -1px;
        margin-left: initial;
      }

      &:first-child {
        margin-left: 0;
        border-top-left-radius: ${props.theme.borderRadius};
        border-bottom-left-radius: ${props.theme.borderRadius};

        html[dir='rtl'] & {
          margin-right: 0;
          margin-left: initial;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-top-right-radius: ${props.theme.borderRadius};
          border-bottom-right-radius: ${props.theme.borderRadius};
        }
      }

      &:last-child {
        border-top-right-radius: ${props.theme.borderRadius};
        border-bottom-right-radius: ${props.theme.borderRadius};

        html[dir='rtl'] & {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-top-left-radius: ${props.theme.borderRadius};
          border-bottom-left-radius: ${props.theme.borderRadius};
        }
      }

      ${props =>
        props.isToggle &&
        !props.clear &&
        css`
          cursor: default;

          &:hover {
            background-color: ${props.theme.palette.blue};
          }
        `};

      ${props =>
        !props.isToggle &&
        !props.clear &&
        css`
          margin-left: 1px;

          html[dir='rtl'] & {
            margin-right: 1px;
            margin-left: initial;
          }

          &:first-of-type {
            margin-left: 0;

            html[dir='rtl'] & {
              margin-right: 0;
            }
          }
        `};
    `};

  ${props =>
    props.grouped &&
    props.half &&
    css`
      margin-left: 0;

      html[dir='rtl'] & {
        margin-left: inherit;
        margin-right: 0;
      }
    `};

  ${props =>
    props.noBorderRadius &&
    css`
      border-radius: 0;
    `};
`;
StyledButton.defaultProps = { theme };

const StyledButtonGroup = styled.nav`
  display: inline-flex;
  justify-content: space-between;
`;
StyledButtonGroup.defaultProps = { theme };

export { StyledButton, StyledButtonGroup, StyledIconClass };
