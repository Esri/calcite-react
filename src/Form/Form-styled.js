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
import { fontSize, unitCalc } from '../utils/helpers';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components

// Icons

// Third party libraries

const StyledForm = styled.form`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  ${props =>
    props.horizontal &&
    css`
      flex-direction: row;
    `};
`;
StyledForm.defaultProps = { theme };

const StyledFormControl = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 ${props => unitCalc(props.theme.baseline, 4, '/')}
    ${props => unitCalc(props.theme.baseline, 1.25, '*')}
    ${props => unitCalc(props.theme.baseline, 4, '/')};

  ${props =>
    props.horizontal &&
    css`
      flex-direction: row;
      align-items: baseline;
      margin: 0 ${props => unitCalc(props.theme.baseline, 4, '/')}
        ${props => unitCalc(props.theme.baseline, 2, '/')}
        ${props => unitCalc(props.theme.baseline, 4, '/')};

      ${StyledFormHelperText} {
        margin-left: ${props => unitCalc(props.theme.baseline, 4, '/')};

        html[dir='rtl'] & {
          margin-left: initial;
          margin-right: ${props => unitCalc(props.theme.baseline, 4, '/')};
        }
      }
    `};

  ${props =>
    props.noValidation &&
    css`
      margin-bottom: ${props => unitCalc(props.theme.baseline, 4, '/')};
    `};

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;
StyledFormControl.defaultProps = { theme };

const StyledFormControlLabel = styled.label`
  ${fontSize(0)}
  display: flex;
  flex-direction: column;

  ${props =>
    props.horizontal &&
    css`
      flex-direction: row;
      align-items: center;
    `};
`;
StyledFormControlLabel.defaultProps = { theme };

const StyledFormControlLabelText = styled.span`
  ${props =>
    props.horizontal &&
    css`
      margin-right: ${props => unitCalc(props.theme.baseline, 2, '/')};

      html[dir='rtl'] & {
        margin-right: initial;
        margin-left: ${props => unitCalc(props.theme.baseline, 2, '/')};
      }
    `};
`;
StyledFormControlLabelText.defaultProps = { theme };

const StyledFormHelperText = styled.span`
  ${fontSize(-3)};
  color: ${props => props.theme.palette.transparentBlack};
  min-height: 1.55em;
  margin-bottom: -1.55rem;

  ${props =>
    props.error &&
    css`
      color: ${props => props.theme.palette.darkRed200};
    `};

  ${props =>
    props.success &&
    css`
      color: ${props => props.theme.palette.darkerGreen};
    `};
`;
StyledFormHelperText.defaultProps = { theme };

const StyledLegend = styled.legend`
  ${fontSize(0)}
  position: relative;
  display: block;
  margin-bottom: 0.25rem;
  margin-right: ${props => unitCalc(props.theme.baseline, 2, '/')};

  html[dir='rtl'] & {
    margin-right: initial;
    margin-left: ${props => unitCalc(props.theme.baseline, 2, '/')};
  }

  ${props =>
    props.horizontal &&
    css`
      margin-bottom: 0;
    `};
`;
StyledLegend.defaultProps = { theme };

const StyledFieldset = styled.div`
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;

  ${props =>
    props.horizontal &&
    css`
      flex-direction: row;
    `};
`;
StyledFieldset.defaultProps = { theme };

export {
  StyledForm,
  StyledFormControl,
  StyledFormControlLabel,
  StyledFormControlLabelText,
  StyledFormHelperText,
  StyledLegend,
  StyledFieldset
};
