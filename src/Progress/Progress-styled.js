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

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components

// Icons

// Third party libraries

export const StyledProgress = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
StyledProgress.defaultProps = { theme };

export const Track = styled.div`
  position: absolute;
  top: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.lightestGray};
  z-index: 0;
  width: 100%;
  overflow: hidden;
`;
Track.defaultProps = { theme };

export const Bar = styled.div`
  position: absolute;
  top: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.blue};
  z-index: 0;

  ${({ type }) =>
    type === 'indeterminate' &&
    css`
      width: 20%;
      animation: looping-progress-bar-ani 2200ms linear infinite;

      [dir='rtl'] & {
        animation: looping-progress-bar-ani-rtl 2200ms linear infinite;
      }

      @keyframes looping-progress-bar-ani {
        0% {
          transform: translate3d(-100%, 0, 0);
        }
        50% {
          width: 40%;
        }
        100% {
          transform: translate3d(600%, 0, 0);
        }
      }

      @keyframes looping-progress-bar-ani-rtl {
        0% {
          transform: translate3d(100%, 0, 0);
        }
        50% {
          width: 40%;
        }
        100% {
          transform: translate3d(-600%, 0, 0);
        }
      }
    `}

  ${({ type, value }) =>
    type === 'determinate' &&
    css`
      width: ${value * 100}%;
    `}

  ${({ reversed }) =>
    reversed &&
    css`
      animation-direction: reverse !important;
    `}
`;
Bar.defaultProps = { theme };

export const Text = styled.div`
  padding: ${({ theme }) => theme.baseline} 0 0 0;
`;
Text.defaultProps = { theme };
