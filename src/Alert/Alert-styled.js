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
import { unitCalc, fontSize } from '../utils/helpers';
import { linkColor } from '../utils/color';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { CalciteA, CalciteP, CalciteH6 } from '../Elements';

// Icons

// Third party libraries

const StyledAlertIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${props => props.theme.baseline};

  html[dir='rtl'] & {
    padding-left: 0;
    padding-right: ${props => props.theme.baseline};
  }
`;
StyledAlertIcon.defaultProps = { theme };

const StyledAlert = styled.div`
  display: flex;
  align-items: stretch;
  color: ${props => props.theme.palette.black};
  background-color: ${props => props.theme.palette.white};
  position: relative;
  z-index: 100;
  max-width: 40em;
  border-top: 3px solid ${props => props.theme.palette.blue};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 3px;

  ${StyledAlertIcon} svg {
    fill: ${props => props.theme.palette.blue};
  }

  ${props =>
    linkColor(props.theme.palette.offBlack, props.theme.palette.black)};

  ${props =>
    props.red &&
    css`
      border-top-color: ${props => props.theme.palette.red};

      ${StyledAlertIcon} svg {
        fill: ${props => props.theme.palette.red};
      }
    `};

  ${props =>
    props.yellow &&
    css`
      border-top-color: ${props => props.theme.palette.yellow};

      ${StyledAlertIcon} svg {
        fill: ${props => props.theme.palette.yellow};
      }
    `};

  ${props =>
    props.green &&
    css`
      border-top-color: ${props => props.theme.palette.green};

      ${StyledAlertIcon} svg {
        fill: ${props => props.theme.palette.green};
      }
    `};

  ${props =>
    props.full &&
    css`
      max-width: none;
    `};
`;
StyledAlert.defaultProps = { theme };

const StyledAlertContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: ${props => unitCalc(props.theme.baseline, 1.5, '/')}
    ${props => props.theme.baseline};
  padding-right: 0;
`;
StyledAlertContent.defaultProps = { theme };

const StyledAlertTitle = styled(CalciteH6)`
  ${fontSize(-1)};
  font-weight: 600;
  margin: 0;
`;
StyledAlertTitle.defaultProps = { theme };

const StyledAlertMessage = styled(CalciteP)`
  ${fontSize(-1)};
  margin: 0;
`;
StyledAlertMessage.defaultProps = { theme };

const StyledAlertClose = styled(CalciteA)`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.baseline};
  ${fontSize(-1)};
  line-height: 0;

  &:hover {
    color: ${props => props.theme.palette.black};
    background: ${props => props.theme.palette.offWhite};

    svg {
      fill: ${props => props.theme.palette.black};
    }
  }

  svg {
    fill: ${props => props.theme.palette.offBlack};
  }
`;
StyledAlertClose.defaultProps = { theme };

export {
  StyledAlert,
  StyledAlertContent,
  StyledAlertTitle,
  StyledAlertMessage,
  StyledAlertIcon,
  StyledAlertClose
};
