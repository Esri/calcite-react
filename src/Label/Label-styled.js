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

// Calcite theme
import { CalciteTheme as theme } from '../CalciteThemeProvider';

import { fontSize } from '../utils/helpers';

const StyledLabel = styled.mark`
  background-color: ${props => props.theme.palette.lightestGray};
  padding: 0.25em 0.5em;
  border-radius: ${props => props.theme.borderRadius || '3px'};
  ${fontSize(-2)};
  white-space: nowrap;

  ${props =>
    props.red &&
    css`
      background-color: ${props => props.theme.palette.red};
      color: ${props => props.theme.palette.white};
    `};

  ${props =>
    props.yellow &&
    css`
      background-color: ${props => props.theme.palette.lightYellow};
      color: ${props => props.theme.palette.offBlack};
    `};

  ${props =>
    props.green &&
    css`
      background-color: ${props => props.theme.palette.green};
      color: ${props => props.theme.palette.white};
    `};

  ${props =>
    props.blue &&
    css`
      background-color: ${props => props.theme.palette.blue};
      color: ${props => props.theme.palette.white};
    `};
`;
StyledLabel.defaultProps = { theme };

export { StyledLabel };
