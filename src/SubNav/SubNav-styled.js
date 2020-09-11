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

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';
import {
  StyledBreadcrumbs,
  StyledCrumb,
  StyledSpanCrumb
} from '../Breadcrumbs/Breadcrumbs-styled';
// Calcite components
import { CalciteA, CalciteH1 } from '../Elements';

// Icons

// Third party libraries

import {
  subNavUnderline,
  subNavLinkActive,
  unitCalc,
  fontSize,
  backgroundGradient,
  transition
} from '../utils/helpers';
import { linkColor } from '../utils/color';

const StyledSubNav = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  ${props =>
    props.legacy
      ? // ----- LEGACY STYLES -----
        css`
          flex-wrap: wrap;
          background-color: ${props.blue
            ? props.theme.palette.darkerBlue
            : props.theme.palette.lightestGray};
          ${props.backgroundImage &&
            backgroundGradient(
              props.backgroundImage,
              props.gradientFromColor,
              props.gradientToColor,
              props.overlayGradient
            )}
        `
      : // ----- MODERN STYLES -----
        css`
          background-color: ${props.theme.palette[props.backgroundColor] ||
            props.backgroundColor};
        `}
`;
StyledSubNav.defaultProps = { theme };

const StyledSubNavContent = styled.div`
  display: flex;
  justify-content: space-between;
  ${props =>
    props.legacy
      ? // ----- LEGACY STYLES -----
        css`
          flex-direction: column;
          flex: 1 0 200px;
        `
      : // ----- MODERN STYLES -----
        css`
          width: ${props.contentWidth || props.theme.contentWidth};
          max-width: ${props.contentMaxWidth || props.theme.contentMaxWidth};
          margin: 0 auto;
        `}
`;
StyledSubNavContent.defaultProps = { theme };

const StyledSubNavLink = styled(CalciteA)`
  font-family: ${props => props.theme.avenirFamily};
  transition: background-color ${transition()}, color ${transition('150ms')};
  box-sizing: border-box;
  display: inline-block;
  ${fontSize(-1)};

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}

  ${props =>
    props.legacy
      ? // ----- LEGACY STYLES -----
        css`
          padding: 0.25em 0.75em;
          margin: 0 0 0 0.25em;
          color: ${props.theme.palette.offWhite};
          background-color: ${props.theme.palette.transparentOffBlack};
          border-radius: ${props.theme.borderRadius} ${props.theme.borderRadius}
            0 0;

          html[dir='rtl'] & {
            margin: 0 0.25em 0 0;
          }

          &:hover,
          &:focus {
            background-color: ${props.theme.palette.transparentDarkerGray};
            color: ${props.theme.palette.white};
            text-decoration: none;
            ${subNavUnderline(props)};
          }
          ${props.active &&
            css`
              &,
              &:hover,
              &:focus {
                background-color: ${props.theme.palette.white};
                color: ${props.theme.palette.offBlack};
              }
            `} .active > &, .active > &:hover, .active > &:focus {
            background-color: ${props.theme.palette.white};
            color: ${props.theme.palette.offBlack};
          }
        `
      : // ----- MODERN STYLES -----
        css`
          color: ${props.theme.palette.white};
          box-shadow: inset 0px 0px 0px 4px transparent;
          border-bottom: 4px solid transparent;
          padding-top: ${unitCalc(props.theme.baseline, 1.5, '/')};
          padding-bottom: ${unitCalc(props.theme.baseline, 1.7, '/')};
          padding-right: ${props.theme.baseline};
          padding-left: ${props.theme.baseline};

          ${props.active &&
            css`
              &,
              &:hover,
              &:focus {
                ${subNavLinkActive(props)}
              }
            `}
          &:hover,
          &:focus, 
          .active > &, 
          .active > &:hover, 
          .active > &:focus {
            ${subNavLinkActive(props)}
          }
        `}
`;
StyledSubNavLink.defaultProps = { theme };

const StyledSubNavList = styled.nav`
  display: flex;
  margin-top: 0em;
  box-sizing: border-box;
  padding-left: 0.25em;

  html[dir='rtl'] & {
    padding-left: 0;
    padding-right: 0.25em;
  }

  ${props =>
    !props.legacy &&
    css`
      margin-left: auto;
      html[dir='rtl'] & {
        margin-left: 0;
        margin-right: auto;
      }
    `}
`;
StyledSubNavList.defaultProps = { theme };

const StyledSubNavTitle = styled(CalciteH1)`
  box-sizing: border-box;

  ${props =>
    props.legacy
      ? // ----- LEGACY STYLES -----
        css`
          ${fontSize(4)};
          line-height: 1.25;
          padding-left: 0.25em;
          margin-top: ${unitCalc(props.theme.baseline, 2, '/')};
          margin-bottom: ${unitCalc(props.theme.baseline, 2, '/')};
          ${props.blue &&
            css`
              color: ${props.theme.palette.white};
            `};

          html[dir='rtl'] & {
            padding-left: 0;
            padding-right: 0.25em;
          }
        `
      : // ----- MODERN STYLES -----
        css`
          ${fontSize(2)};
          display: flex;
          align-items: center;
          color: ${props.theme.palette.white};
          margin-bottom: 0;

          ${StyledSpanCrumb}, ${StyledCrumb} {
            color: ${props.theme.palette.white};
            ${linkColor(
              props.theme.palette.white,
              props.theme.palette.lightestGray
            )};

            &::before {
              color: ${props.theme.palette.white};
            }
          }

          ${StyledBreadcrumbs} {
            ${fontSize(1)};
          }

          html[dir='rtl'] & {
            padding-left: 0;
            padding-right: ${unitCalc(props.theme.baseline, 3, '/')};
          }
        `}
`;
StyledSubNavTitle.defaultProps = { theme };

const StyledSubNavActions = styled.nav`
  margin: 0.5em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
StyledSubNavActions.defaultProps = { theme };

const StyledMultiRowActions = styled.div`
  display: flex;
  flex-direction: column;
`;
StyledMultiRowActions.defaultProps = { theme };

export {
  StyledSubNav,
  StyledSubNavContent,
  StyledSubNavLink,
  StyledSubNavList,
  StyledSubNavTitle,
  StyledSubNavActions,
  StyledMultiRowActions
};
