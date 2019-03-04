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

import styled, { css, keyframes } from 'styled-components';
import { unitCalc } from '../utils/helpers';
import { CalciteTheme } from '../CalciteThemeProvider';

const loaderVariables = {
  loaderWidth: '0.85em',
  loaderHeight: '2em',
  loaderZoom: '0.5em',
  loaderSpacing: '1.25em',
  loaderSpeed: '0.8s',
  loaderDelay: '0.16s',
  loaderBlue: CalciteTheme.palette.blue
};

const loadKeyframes = color => keyframes`
  0%,
  80%,
  100% {
   opacity: .75;
   box-shadow: 0 0 ${color || loaderVariables.loaderBlue};
   height: ${loaderVariables.loaderHeight};
  }
  40% {
   opacity: 1;
   box-shadow: 0 -0.5em ${color || loaderVariables.loaderBlue};
   height: ${unitCalc(
     loaderVariables.loaderHeight,
     loaderVariables.loaderZoom,
     '+'
   )};
  }
`;

const loadAnimation = color => css`
  ${loadKeyframes(color)} ${loaderVariables.loaderSpeed} infinite ease-in-out;
`;

const loaderStyles = color => css`
  background: ${color || loaderVariables.loaderBlue};
  animation: ${loadAnimation(color)};
  width: ${loaderVariables.loaderWidth};
  height: ${loaderVariables.loaderHeight};
`;

const loaderPseudoElements = color => css`
  ${loaderStyles(color)};
  position: absolute;
  top: 0;
  content: '';
`;

const StyledLoader = styled.div`
  position: relative;
  min-height: ${props => props.sizeRatio * 3}px;
`;

const StyledLoaderBars = styled.div`
  ${props => loaderStyles(props.color)};

  text-indent: -9999em;
  margin: auto;
  position: absolute;
  right: ${props =>
    `calc(50% - ${parseFloat(loaderVariables.loaderWidth) / 2}em)`};
  font-size: ${props => props.sizeRatio}px;
  animation-delay: ${loaderVariables.loaderDelay};
  margin: ${props => unitCalc(loaderVariables.loaderHeight, 0.25, '*')} 0 0;

  &:before {
    ${props => loaderPseudoElements(props.color)};
    left: -${loaderVariables.loaderSpacing};
  }

  &:after {
    ${props => loaderPseudoElements(props.color)};
    left: ${loaderVariables.loaderSpacing};
    animation-delay: ${unitCalc(loaderVariables.loaderDelay, 2, '*')};
  }
`;

const StyledLoaderText = styled.div`
  text-align: center;
  padding-top: ${props => props.sizeRatio * 3.5}px;
`;

export { StyledLoader, StyledLoaderBars, StyledLoaderText };
