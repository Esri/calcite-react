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
import { CalciteFigure, CalciteH4 } from '../Elements';
import { fontSize } from '../utils/helpers';

// Calcite theme
import { CalciteTheme as theme } from '../CalciteThemeProvider';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${props => props.theme.palette.white};
  box-shadow: 0 0 0 1px ${props => props.theme.palette.transparentOffWhite},
    ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};

  ${props =>
    props.wide &&
    css`
      flex-direction: row;
    `};

  ${props =>
    props.bar &&
    css`
      border-top: 3px solid
        ${props.theme.palette[props.bar] || props.theme.palette.blue};
    `};

  ${props =>
    props.shaped &&
    css`
      box-shadow: none;
      background: transparent;
    `};
`;
StyledCard.defaultProps = { theme };

const StyledCardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  word-wrap: break-word;

  ${props =>
    props.wide &&
    css`
      display: block;
      flex: 1 1 75%;
    `};

  ${props =>
    props.shaped &&
    css`
      border: 1px solid ${props => props.theme.palette.transparentOffWhite};
      box-shadow: ${props => props.theme.boxShadow};
      padding-top: 4rem;
      border-radius: ${props => props.theme.borderRadius};
    `};
`;
StyledCardContent.defaultProps = { theme };

const StyledCardImageWrap = styled(CalciteFigure)`
  width: 100%;
  position: relative;
  margin-bottom: 0;
  flex: 0 0 auto;

  ${props =>
    props.shaped &&
    css`
      margin-bottom: -3rem;
      padding: 0 1.25rem;
      box-sizing: border-box;
    `};

  ${props =>
    props.wide &&
    css`
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      width: 25%;
      overflow: hidden;
      margin-bottom: 0;
    `};
`;
StyledCardImageWrap.defaultProps = { theme };

const StyledCardImage = styled.img`
  width: 100%;
  display: block;

  ${props =>
    props.wide &&
    css`
      width: auto;
      min-width: 100%;
      max-width: none;
      height: 100%;
      margin: 0;
      display: block;
      position: absolute;
    `};
`;
StyledCardImage.defaultProps = { theme };

const StyledCardImageCaption = styled.figcaption`
  background: ${props => props.theme.palette.opaqueWhite};
  color: ${props => props.theme.palette.offBlack};
  font-style: normal;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  ${fontSize(-2)};
  padding: 0.35rem 1.25rem 0.35rem 1.25rem;
`;
StyledCardImageCaption.defaultProps = { theme };

const StyledCardTitle = styled(CalciteH4)`
  margin-bottom: 0.775rem;
`;
StyledCardTitle.defaultProps = { theme };

export {
  StyledCard,
  StyledCardContent,
  StyledCardImageWrap,
  StyledCardImage,
  StyledCardImageCaption,
  StyledCardTitle
};
