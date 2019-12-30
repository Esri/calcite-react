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
import { StyledAlertContent, StyledAlertIcon } from '../Alert/Alert-styled';
import Button from '../Button';

// Icons

// Third party libraries

const StyledToaster = styled.div`
  display: flex;

  ${StyledAlertContent} {
    flex: 1 0 50%;
    box-sizing: border-box;
    padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
    padding-right: 0;
  }

  ${StyledAlertIcon} {
    padding: 0 ${props => unitCalc(props.theme.baseline, 3, '/')};

    /* html[dir='rtl'] & {
      padding-left: 0;
      padding-right: ${props => unitCalc(props.theme.baseline, 3, '/')};
    } */

    svg {
      fill: ${props => props.theme.palette.blue};
    }
  }

  ${props =>
    props.type === 'error' &&
    css`
      border-top-color: ${props => props.theme.palette.red};

      ${StyledAlertIcon} svg {
        fill: ${props => props.theme.palette.red};
      }
    `};

  ${props =>
    props.type === 'warning' &&
    css`
      border-top-color: ${props => props.theme.palette.yellow};

      ${StyledAlertIcon} svg {
        fill: ${props => props.theme.palette.yellow};
      }
    `};

  ${props =>
    props.type === 'success' &&
    css`
      border-top-color: ${props => props.theme.palette.green};

      ${StyledAlertIcon} svg {
        fill: ${props => props.theme.palette.green};
      }
    `};
`;
StyledToaster.defaultProps = { theme };

const StyledCloseButton = styled(Button)`
  color: currentColor;

  &:hover {
    color: currentColor;
    opacity: 0.7;
  }
`;
StyledCloseButton.defaultProps = { theme };

export { StyledToaster, StyledCloseButton };
