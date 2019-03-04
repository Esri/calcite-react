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
import { transparentize } from 'polished';

import { CalciteTheme, EsriColors } from '../CalciteThemeProvider';

import { baseRadioCheckbox } from '../utils/commonElements';

import { fontSize, unitCalc } from '../utils/helpers';

const switchProps = {
  switchWidth: '36px',
  switchHeight: '20px',
  switchBg: EsriColors.Calcite_Gray_150,
  switchBorderColor: EsriColors.Calcite_Gray_350,
  switchHoverBg: EsriColors.Calcite_Gray_250,
  switchHoverBorderColor: EsriColors.Calcite_Gray_350,
  switchCheckedBg: CalciteTheme.palette.blue,
  switchCheckedBorderColor: CalciteTheme.palette.darkBlue,
  switchFocusShadow: `0 0 4px 2px ${transparentize(
    0.1,
    EsriColors.Calcite_Gray_350
  )}`,
  switchFocusCheckedShadow: `0 0 4px 2px ${transparentize(
    0.1,
    EsriColors.Calcite_Blue_200
  )}`,
  switchFocusDestructiveCheckedShadow: `0 0 4px 2px ${transparentize(
    0.1,
    EsriColors.Calcite_Red_200
  )}`,
  handleSize: '18px',
  handleTopDistance: '-1px',
  handleEdgeDistance: '-1px',
  handleActiveEdgeDistance: '1px',
  handleBg: CalciteTheme.palette.white,
  handleBorderColor: EsriColors.Calcite_Gray_450,
  handleShadow: `0 1px 1px 0px ${transparentize(
    0.8,
    CalciteTheme.palette.darkestGray
  )}`,
  handleHoverBorderColor: EsriColors.Calcite_Blue_a200,
  handleHoverShadow: `0 1px 2px 0px ${transparentize(
    0.8,
    CalciteTheme.palette.darkestGray
  )}`,
  handleCheckedBorderColor: CalciteTheme.palette.darkBlue,
  handleCheckedShadow: `0 2px 1px 0px {transparentize(.8,CalciteTheme.palette.darkestGray)}`,
  handleActiveShadow: `0 3px 1px 0px {transparentize(.8,CalciteTheme.palette.darkestGray)}`,
  switchDestructiveCheckedBg: EsriColors.Calcite_Red_a200,
  switchDestructiveCheckedBorderColor: EsriColors.Calcite_Red_a250,
  handleDestructiveHoverBorderColor: EsriColors.Calcite_Red_a200,
  handleDestructiveCheckedBorderColor: EsriColors.Calcite_Red_a250
};

const StyledSwitch = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  tap-highlight-color: transparent;
  margin: 0 0 ${props => props.theme.baseline} 0;
`;

const StyledSwitchInput = styled(baseRadioCheckbox)`
  opacity: 0;
  height: 0;
  width: 0;
  margin: 0;
  position: absolute;
`;

const StyledSwitchTrack = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: ${switchProps.switchWidth};
  height: ${switchProps.switchHeight};
  top: 0.05em;
  background-color: ${switchProps.switchBg};
  border-radius: 30px;
  border: 1px solid ${switchProps.switchBorderColor};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: 1rem;

  &:after {
    position: absolute;
    display: block;
    content: '';
    width: ${switchProps.handleSize};
    height: ${switchProps.handleSize};
    top: ${switchProps.handleTopDistance};
    left: ${switchProps.handleEdgeDistance};
    background-color: ${switchProps.handleBg};
    border-radius: 30px;
    border: 2px solid ${switchProps.handleBorderColor};
    box-shadow: ${switchProps.handleShadow};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  // hover
  input:hover + & {
    border-color: ${switchProps.switchHoverBorderColor};
    background-color: ${switchProps.switchHoverBg};

    &:after {
      border-color: ${switchProps.handleHoverBorderColor};
      box-shadow: ${switchProps.handleHoverShadow};
    }
  }

  // active
  input:active + & {
    box-shadow: ${switchProps.switchFocusShadow};

    &:after {
      left: ${switchProps.handleActiveEdgeDistance};
      border-color: ${switchProps.handleCheckedBorderColor};
      box-shadow: ${switchProps.handleActiveShadow};
    }
  }

  // checked
  input:checked + & {
    border-color: ${switchProps.switchCheckedBorderColor};
    background-color: ${switchProps.switchCheckedBg};

    &:after {
      left: 100%;
      transform: translateX(-${unitCalc(switchProps.switchHeight, 1, '+')});
      border-color: ${switchProps.handleCheckedBorderColor};
      box-shadow: ${switchProps.handleCheckedShadow};
    }
  }

  // checked and active
  input:checked:active + & {
    box-shadow: ${switchProps.switchFocusCheckedShadow};

    &:after {
      left: 100%;
      transform: translateX(-${unitCalc(switchProps.switchHeight, 1, '+')});
      border-color: ${switchProps.handleCheckedBorderColor};
      box-shadow: ${switchProps.handleActiveShadow};
    }
  }

  // unchecked focus
  input:focus + & {
    box-shadow: ${switchProps.switchFocusShadow};

    &:after {
      border-color: ${switchProps.handleHoverBorderColor};
    }
  }

  // checked focus
  input:checked:focus + & {
    box-shadow: ${switchProps.switchFocusCheckedShadow};

    &:after {
      border-color: ${switchProps.handleCheckedBorderColor};
    }
  }

  ${props =>
    props.destructive &&
    css`
      input:hover + &:after {
        border-color: ${switchProps.handleDestructiveHoverBorderColor};
      }

      input:active + &:after {
        border-color: ${switchProps.handleDestructiveCheckedBorderColor};
      }

      input:checked:active + & {
        box-shadow: ${switchProps.switchFocusDestructiveCheckedShadow};

        &:after {
          border-color: ${switchProps.handleDestructiveCheckedBorderColor};
        }
      }

      input:checked + & {
        background-color: ${switchProps.switchDestructiveCheckedBg};
        border-color: ${switchProps.switchDestructiveCheckedBorderColor};

        &:after {
          border-color: ${switchProps.handleDestructiveCheckedBorderColor};
        }
      }

      input:focus + &:after {
        border-color: ${switchProps.handleDestructiveHoverBorderColor};
      }

      input:checked:focus + & {
        box-shadow: ${switchProps.switchFocusDestructiveCheckedShadow};

        &:after {
          border-color: ${switchProps.handleDestructiveCheckedBorderColor};
        }
      }
    `};

  // alignment fixes for edge
  @supports (-ms-ime-align: auto) {
    & {
      top: 0.4em;
    }
  }
  // alignment fixes for ff
  @supports (-moz-appearance: none) {
    & {
      top: 0.1em;
    }
  }
  // alignment fixes for ios
  @supports (-webkit-overflow-scrolling: touch) {
    & {
      top: 0.15em;
    }
  }
`;

const StyledSwitchLabel = styled.span`
  ${fontSize(-1)};
  width: calc((100% - 3em) - 0.5em);
  padding: 0 0.1em;
  vertical-align: top;

  &:first-child {
    margin-right: 1rem;
  }
`;

export {
  StyledSwitch,
  StyledSwitchInput,
  StyledSwitchTrack,
  StyledSwitchLabel
};
