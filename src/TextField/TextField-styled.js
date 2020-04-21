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

import React from 'react';

// styled-components
import styled, { css } from 'styled-components';

// Utils, common elements
import { unitCalc } from '../utils/helpers';
import { CalciteInput, CalciteTextarea } from '../utils/commonElements';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { StyledButton } from '../Button/Button-styled';
import { StyledSelectInput, StyledSelectButton } from '../Select/Select-styled';

// Icons
import XCircleIcon from 'calcite-ui-icons-react/XCircleIcon';

// Third party libraries

const StyledTextField = styled(CalciteInput)`
  ${props =>
    props.hasAdornmentLeft &&
    css`
      html:not([dir='rtl']) & {
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      html[dir='rtl'] & {
        border-right: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    `};

  ${props =>
    props.hasAdornmentRight &&
    css`
      html:not([dir='rtl']) & {
        border-right: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      html[dir='rtl'] & {
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    `};
`;
StyledTextField.defaultProps = { theme };

const StyledTextArea = styled(CalciteTextarea)`
  ${props =>
    props.hasAdornmentLeft &&
    css`
      html:not([dir='rtl']) & {
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      html[dir='rtl'] & {
        border-right: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    `};

  ${props =>
    props.hasAdornmentRight &&
    css`
      html:not([dir='rtl']) & {
        border-right: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      html[dir='rtl'] & {
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    `};
`;
StyledTextArea.defaultProps = { theme };

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

    html[dir='rtl'] & {
      border-right: initial;
      border-left: 1px solid ${props => props.theme.palette.lightGray};
    }
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
      html:not([dir='rtl']) & {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      html[dir='rtl'] & {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    `};

  ${props =>
    props.adornmentDirection === 'right' &&
    css`
      html:not([dir='rtl']) & {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      html[dir='rtl'] & {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    `};
`;
StyledAdornmentWrapper.defaultProps = { theme };

const StyledTextFieldAdornmentWrapper = styled.div`
  position: relative;
  display: flex;

  /* Ensure all adornments and inputs have the same margin with no rounding errors */
  ${StyledTextField},
  ${StyledTextArea},
  ${StyledButton},
  ${StyledAdornmentWrapper},
  ${StyledSelectInput},
  ${StyledSelectButton} {
    margin: ${props => unitCalc(props.theme.baseline, 6, '/')} 0 0 0;
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;
StyledTextFieldAdornmentWrapper.defaultProps = { theme };

const SearchClearIcon = styled(({ isSuccess, isError, ...rest }) => (
  <XCircleIcon {...rest} />
))`
  display: none;
  position: absolute;
  right: ${props => unitCalc(props.theme.baseline, 4, '/')};
  bottom: ${unitCalc('2.25rem', 2, '/')};
  transform: translateY(50%);
  color: ${props => props.theme.palette.darkerGray};
  opacity: 0.5;
  cursor: pointer;

  ${StyledTextFieldAdornmentWrapper}:hover & {
    display: block;
  }

  ${props =>
    (props.isSuccess || props.isError) &&
    css`
      right: ${props => unitCalc(props.theme.baseline, 1.5, '/')};
    `};

  html[dir='rtl'] & {
    right: auto;
    left: ${props => unitCalc(props.theme.baseline, 4, '/')};

    ${props =>
      (props.isSuccess || props.isError) &&
      css`
        left: ${props => unitCalc(props.theme.baseline, 1.5, '/')};
      `};
  }

  &:hover {
    opacity: 0.8;
  }
`;

export {
  StyledTextField,
  StyledTextArea,
  StyledTextFieldAdornmentWrapper,
  StyledAdornmentWrapper,
  SearchClearIcon
};
