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

// Calcite theme
import { CalciteTheme as theme } from '../CalciteThemeProvider';

import { unitCalc, fontSize } from '../utils/helpers';

const StyledList = styled(StyledSideNav)`
  min-width: 200px;
  overflow: hidden;
  max-height: ${props => props.maxHeight};
  flex-shrink: 0;
  transition: max-height 225ms cubic-bezier(0.4, 0, 0.2, 1);

  ${props =>
    props.nested &&
    css`
      border: none;
      border-top: 1px solid ${props => props.theme.palette.lightestGray};
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      padding-left: ${props => props.theme.baseline};

      ${props.open === false &&
        css`
          border-top: none;
        `};

      ${(props.minimal || props.multiSelect) &&
        props.open &&
        css`
          padding-bottom: ${unitCalc(props.theme.baseline, 2, '/')};
        `};
    `};

  ${props =>
    (props.minimal || props.selectable) &&
    css`
      background-color: unset;
      border: none;
    `};

  ${props =>
    props.selectable &&
    css`
      border-bottom: 1px solid ${props.theme.palette.lighterGray};

      ${props.nested &&
        css`
          border-bottom: none;
        `};
    `};
`;
StyledList.defaultProps = { theme };

const getActiveStyles = props => {
  return `
    background-color: ${props.theme.palette.offWhite};
    text-decoration: none;
    color: ${props.theme.palette.darkerGray};
  `;
};

const StyledListItem = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')}
    ${props => unitCalc(props.theme.baseline, 2, '/')};
  color: ${props => props.theme.palette.darkerGray};
  background-color: ${props => props.theme.palette.white};
  border-top: 1px solid ${props => props.theme.palette.lightestGray};
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
      ${props => getActiveStyles(props)};
    `};
  &:hover {
    ${props => getActiveStyles(props)};
  }

  ${props =>
    props.selected &&
    css`
      &,
      &:focus,
      &:hover {
        text-indent: -3px;
        border-left: 3px solid ${props.theme.palette.blue};
      }
    `};

  ${props =>
    (props.minimal || props.selectable) &&
    css`
      background-color: unset;
      padding: ${unitCalc(props.theme.baseline, 3, '/')}
        ${unitCalc(props.theme.baseline, 4, '/')};
      border-top-color: ${props.theme.palette.lighterGray};

      &:hover {
        background-color: unset;
        color: ${props.theme.palette.offBlack};
      }

      ${props.open &&
        css`
          font-weight: 600;
        `};
    `};

  ${props =>
    props.selectable &&
    css`
      border-top: none;
      box-shadow: inset 3px 0 0 transparent;
      padding-left: calc(${unitCalc(props.theme.baseline, 4, '/')} + 3px);

      &:hover {
        background-color: ${props.theme.palette.white};
      }

      ${props.active &&
        css`
          background-color: ${props.theme.palette.white};
          box-shadow: inset 3px 0 0 ${props.theme.palette.blue};
        `};

      ${props.filterItem &&
        css`
          padding: 0;

          &:hover {
            background-color: unset;
          }
        `};
    `};

  ${props =>
    props.nested &&
    css`
      &:first-child {
        border-top: none;
      }

      ${props.minimal &&
        css`
          border: none;
          padding: 0 0 0 ${unitCalc(props.theme.baseline, 2, '/')};
          position: relative;

          ${props.multiSelect &&
            css`
              padding: 0 0 0 ${unitCalc(props.theme.baseline, 1.5, '/')};
            `};

          ${props.filterItem &&
            css`
              padding: 0;
              margin-bottom: ${unitCalc(props.theme.baseline, 4, '/')};

              &:hover {
                background-color: unset;
              }
            `};

          &::before {
            position: absolute;
            color: #cccccc;
            opacity: 0;
            -webkit-transition: opacity 50ms linear;
            -o-transition: opacity 50ms linear;
            transition: opacity 50ms linear;
            pointer-events: none;
            content: '•';
            font-size: 0.8em;
            left: 0;

            ${props.multiSelect &&
              css`
                content: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2032%2032%22%20class%3D%22svg-icon%22%3E%3Cpath%20fill%3D%22%23cccccc%22%20d%3D%22M11.927%2022l-6.882-6.883-3%203L11.927%2028%2031.204%208.728l-3.001-3.001z%22%2F%3E%3C%2Fsvg%3E');
              `};
          }

          ${props.active &&
            css`
              font-weight: 600;
              background-color: unset;

              &::before {
                opacity: 1;
                color: #005e95;

                ${props.multiSelect &&
                  css`
                    color: unset;
                    content: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2032%2032%22%20class%3D%22svg-icon%22%3E%3Cpath%20fill%3D%22%23005e95%22%20d%3D%22M11.927%2022l-6.882-6.883-3%203L11.927%2028%2031.204%208.728l-3.001-3.001z%22%2F%3E%3C%2Fsvg%3E');
                  `};
              }
            `};

          &:hover {
            text-decoration: underline;

            ${props.filterItem &&
              css`
                text-decoration: none;
              `};

            &::before {
              opacity: 1;

              ${props.filterItem &&
                css`
                  opacity: 0;
                `};
            }
          }
        `};
    `};
`;
StyledListItem.defaultProps = { theme };

const StyledListHeader = styled(StyledListItem)`
  flex-shrink: 0;
  background-color: ${props => props.theme.palette.offWhite};
  cursor: auto;

  ${props =>
    (props.minimal || props.selectable) &&
    css`
      border: none;
      background-color: unset;
      padding: ${unitCalc(props.theme.baseline, 3, '/')} 0;
      font-weight: 600;
      ${fontSize(0)};

      &:hover {
        background-color: unset;
        color: ${props.theme.palette.darkerGray};
      }
    `};
`;
StyledListHeader.defaultProps = { theme };

const StyledListTitle = styled.p`
  ${fontSize(-1)};
  flex-shrink: 0;
  margin: 0;
`;
StyledListTitle.defaultProps = { theme };

const StyledListSubtitle = styled.span`
  ${fontSize(-3)};
  flex-shrink: 0;
  line-height: 1.2rem;
  color: ${props => props.theme.palette.gray};
`;
StyledListSubtitle.defaultProps = { theme };

const StyledListTextContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  flex: 1 0 100px;
  flex-direction: column;
  justify-content: center;
`;
StyledListTextContainer.defaultProps = { theme };

const StyledListSideContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-right: ${props => unitCalc(props.theme.baseline, 2, '/')};

    ${props =>
      (props.minimal || props.selectable) &&
      css`
        margin-right: ${props => unitCalc(props.theme.baseline, 4, '/')};
      `};
  }

  &:last-child {
    margin-left: ${props => unitCalc(props.theme.baseline, 2, '/')};

    ${props =>
      (props.minimal || props.selectable) &&
      css`
        margin-left: ${unitCalc(props.theme.baseline, 4, '/')};
        font-size: 0.9rem;
        font-weight: 400;

        a {
          color: ${props.theme.palette.darkerGray};

          &:hover {
            color: ${props.theme.palette.offBlack};
          }
        }
      `};
  }

  svg {
    ${props =>
      (props.minimal || props.selectable) &&
      css`
        width: auto;
        height: auto;
      `};

    ${props =>
      props.selectable &&
      props.active &&
      css`
        fill: ${props.theme.palette.blue};
      `};
  }

  .mdi-icon {
    width: 28px;
    height: 28px;
    fill: currentColor;

    ${props =>
      props.nested &&
      css`
        width: 22px;
        height: 22px;
      `};
  }
`;
StyledListSideContainer.defaultProps = { theme };

export {
  StyledList,
  StyledListItem,
  StyledListHeader,
  StyledListTitle,
  StyledListSubtitle,
  StyledListTextContainer,
  StyledListSideContainer
};
