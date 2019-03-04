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
import { CalciteInput, CalciteTextarea } from '../utils/commonElements';
import { unitCalc } from '../utils/helpers';

const StyledTextField = styled(CalciteInput)`
  ${props =>
    props.hasAdornmentLeft &&
    css`
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `};

  ${props =>
    props.hasAdornmentRight &&
    css`
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `};
`;

const StyledTextArea = styled(CalciteTextarea)`
  ${props =>
    props.hasAdornmentLeft &&
    css`
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `};

  ${props =>
    props.hasAdornmentRight &&
    css`
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `};
`;

const StyledTextFieldAdornmentWrapper = styled.div`
  display: flex;

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;

const StyledAdornmentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => unitCalc(props.theme.baseline, 6, '/')} 0 0 0;
  padding: 0 ${props => unitCalc(props.theme.baseline, 4, '/')};
  background: ${props => props.theme.palette.lightestGray};
  color: ${props => props.theme.palette.darkerGray};
  fill: currentColor;
  border: 1px solid ${props => props.theme.palette.lightGray};
  border-radius: ${props => props.theme.borderRadius};
  min-width: ${props => props.theme.baseline};

  input + & {
    border-right: 1px solid ${props => props.theme.palette.lightGray};
  }

  ${props =>
    props.minimal &&
    css`
      padding: 0 ${props => unitCalc(props.theme.baseline, 6, '/')};
      min-width: auto;
      background: transparent;
      border: none;
      border-bottom: 1px solid ${props => props.theme.palette.lighterGray};
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
`;

export {
  StyledTextField,
  StyledTextArea,
  StyledTextFieldAdornmentWrapper,
  StyledAdornmentWrapper
};
