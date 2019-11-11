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
import { linkColor } from '../utils/color';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { CalciteA } from '../Elements';

// Icons

// Third party libraries

const StyledAlert = styled.div`
  padding: ${props => unitCalc(props.theme.baseline, 2, '/')};
  color: ${props => props.theme.palette.offBlack};
  background-color: ${props => props.theme.palette.lightestBlue};
  position: relative;
  z-index: 100;
  max-width: 40em;
  border: 1px solid ${props => props.theme.palette.blue};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};

  ${props =>
    linkColor(props.theme.palette.offBlack, props.theme.palette.black)};

  ${props =>
    props.red &&
    css`
      background-color: ${props => props.theme.palette.lightestRed};
      border-color: ${props => props.theme.palette.red};
    `};

  ${props =>
    props.yellow &&
    css`
      background-color: ${props => props.theme.palette.lightestYellow};
      border-color: ${props => props.theme.palette.yellow};
    `};

  ${props =>
    props.green &&
    css`
      background-color: ${props => props.theme.palette.lightestGreen};
      border-color: ${props => props.theme.palette.green};
    `};

  ${props =>
    props.full &&
    css`
      max-width: none;
    `};
`;
StyledAlert.defaultProps = { theme };

const StyledAlertClose = styled(CalciteA)`
  position: absolute;
  right: ${props => unitCalc(props.theme.baseline, 2, '/')};
  color: ${props => props.theme.palette.offBlack};

  html[dir='rtl'] & {
    right: auto;
    left: ${props => unitCalc(props.theme.baseline, 2, '/')};
  }

  &:hover {
    color: ${props => props.theme.palette.black};
  }

  svg {
    fill: currentColor;
  }
`;
StyledAlertClose.defaultProps = { theme };

export { StyledAlert, StyledAlertClose };
