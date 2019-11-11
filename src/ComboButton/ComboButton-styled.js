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
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { StyledButton } from '../Button/Button-styled';

// Icons

// Third party libraries

const StyledComboButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;

  ${props =>
    props.half &&
    css`
      width: 50%;
      text-align: center;

      & ${StyledButton} {
        flex: 1;
      }
    `};
`;
StyledComboButtonContainer.defaultProps = { theme };

const StyledComboButton = styled(StyledButton)`
  border-right-width: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
StyledComboButton.defaultProps = { theme };

const StyledComboButtonDropdown = styled(StyledButton)`
  height: 100%;
  fill: currentColor;
  padding-left: ${props => unitCalc(props.theme.baseline, 3, '/')};
  padding-right: ${props => unitCalc(props.theme.baseline, 3, '/')};
  display: flex;
  border-left: 1px solid ${props => props.theme.palette.darkBlue};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  ${props =>
    props.clear &&
    css`
      border-left-color: ${props => props.theme.palette.blue};
    `};

  ${props =>
    props.clearGray &&
    css`
      border-left-color: ${props => props.theme.palette.gray};
    `};

  ${props =>
    props.red &&
    css`
      border-left-color: ${props => props.theme.palette.red};
    `};

  ${props =>
    props.green &&
    css`
      border-left-color: ${props => props.theme.palette.darkGreen};
    `};
`;
StyledComboButtonDropdown.defaultProps = { theme };

export {
  StyledComboButtonContainer,
  StyledComboButton,
  StyledComboButtonDropdown
};
