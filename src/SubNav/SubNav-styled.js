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

// Calcite components
import { CalciteA, CalciteH1 } from '../Elements';

// Icons

// Third party libraries

import {
  subNavUnderline,
  unitCalc,
  fontSize,
  backgroundGradient,
  transition
} from '../utils/helpers';

const StyledSubNav = styled.header`
  position: relative;
  background-color: ${props => props.theme.palette.lightestGray};
  display: flex;
  flex-wrap: wrap;

  ${props =>
    props.blue &&
    css`
      background-color: ${props.theme.palette.darkerBlue};
    `};

  ${props =>
    props.backgroundImage &&
    css`
      ${backgroundGradient(
        props.backgroundImage,
        props.gradientFromColor,
        props.gradientToColor,
        props.overlayGradient
      )};
    `};
`;
StyledSubNav.defaultProps = { theme };

const StyledSubNavLeftContent = styled.div`
  display: flex;
  flex: 1 0 200px;
  justify-content: space-between;
  flex-direction: column;
`;
StyledSubNavLeftContent.defaultProps = { theme };

const StyledSubNavLink = styled(CalciteA)`
  padding: 0.25em 0.75em;
  margin: 0 0 0 0.25em;
  font-family: ${props => props.theme.avenirFamily};
  color: ${props => props.theme.palette.offWhite};
  ${fontSize(-1)};
  background-color: ${props => props.theme.palette.transparentOffBlack};
  box-sizing: border-box;
  border-radius: ${props => props.theme.borderRadius}
    ${props => props.theme.borderRadius} 0 0;
  transition: background-color ${transition()}, color ${transition('150ms')};
  display: inline-block;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.transparentDarkerGray};
    color: ${props => props.theme.palette.white};
    text-decoration: none;
    ${props => subNavUnderline(props)};
  }

  ${props =>
    props.active &&
    css`
      &,
      &:hover,
      &:focus {
        background-color: ${props.theme.palette.white};
        color: ${props.theme.palette.offBlack};
      }
    `} .active > &, .active > &:hover, .active > &:focus {
    background-color: ${props => props.theme.palette.white};
    color: ${props => props.theme.palette.offBlack};
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `};
`;
StyledSubNavLink.defaultProps = { theme };

const StyledSubNavList = styled.nav`
  display: flex;
  height: 32px;
  margin-top: 0em;
  padding-left: 0.25em;
  box-sizing: border-box;
`;
StyledSubNavList.defaultProps = { theme };

const StyledSubNavActions = styled.nav`
  margin: 0.5em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
StyledSubNavActions.defaultProps = { theme };

const StyledSubNavTitle = styled(CalciteH1)`
  ${fontSize(4)};
  padding-left: 0.25em;
  margin-top: ${props => unitCalc(props.theme.baseline, 2, '/')};
  margin-bottom: ${props => unitCalc(props.theme.baseline, 2, '/')};
  line-height: 1.25;
  box-sizing: border-box;

  ${props =>
    props.blue &&
    css`
      color: ${props.theme.palette.white};
    `};
`;
StyledSubNavTitle.defaultProps = { theme };

const StyledMultiRowActions = styled.div`
  display: flex;
  flex-direction: column;
`;
StyledMultiRowActions.defaultProps = { theme };

export {
  StyledSubNav,
  StyledSubNavLeftContent,
  StyledSubNavLink,
  StyledSubNavList,
  StyledSubNavTitle,
  StyledSubNavActions,
  StyledMultiRowActions
};
