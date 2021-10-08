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
import { baseRadioCheckbox } from '../utils/commonElements';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';
import { colors } from '@esri/calcite-colors';

// Calcite components
import { StyledFormControlLabel } from '../Form/Form-styled';

// Icons

// Third party libraries
import { transparentize, lighten, darken } from 'polished';

const switchProps = {
  switchWidth: '36px',
  switchHeight: '20px',
  switchBg: colors['blk-010'],
  switchBorderColor: colors['blk-040'],
  switchHoverBg: colors['blk-020'],
  switchHoverBorderColor: colors['blk-060'],
  switchCheckedBg: theme.palette.blue,
  switchCheckedBorderColor: theme.palette.darkBlue,
  switchFocusShadow: `0 0 4px 2px ${transparentize(0.1, colors['blk-050'])}`,
  switchFocusCheckedShadow: `0 0 4px 2px ${transparentize(
    0.1,
    colors['h-bb-030']
  )}`,
  switchFocusDestructiveCheckedShadow: `0 0 4px 2px ${transparentize(
    0.1,
    colors['h-rr-030']
  )}`,
  handleSize: '18px',
  handleTopDistance: '-1px',
  handleEdgeDistance: '-1px',
  handleActiveEdgeDistance: '1px',
  handleBg: theme.palette.white,
  handleBorderColor: colors['blk-100'],
  handleShadow: `0 1px 1px 0px ${transparentize(
    0.8,
    theme.palette.darkestGray
  )}`,
  handleHoverBorderColor: colors['h-bb-050'],
  handleHoverShadow: `0 1px 2px 0px ${transparentize(
    0.8,
    theme.palette.darkestGray
  )}`,
  handleCheckedBorderColor: theme.palette.darkBlue,
  handleCheckedShadow: `0 2px 1px 0px {transparentize(.8,CalciteTheme.palette.darkestGray)}`,
  handleActiveShadow: `0 3px 1px 0px {transparentize(.8,CalciteTheme.palette.darkestGray)}`,
  switchDestructiveCheckedBg: colors['h-ro-060'],
  switchDestructiveCheckedBorderColor: colors['h-ro-070'],
  handleDestructiveHoverBorderColor: colors['h-ro-060'],
  handleDestructiveCheckedBorderColor: colors['h-ro-070']
};

const StyledSwitch = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;
  user-select: none;
  tap-highlight-color: transparent;
  margin: 0 0 ${props => props.theme.baseline} 0;

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;
StyledSwitch.defaultProps = { theme };

const StyledSwitchInput = styled(baseRadioCheckbox)`
  opacity: 0;
  height: 0;
  width: 0;
  margin: 0;
  position: absolute;
`;
StyledSwitchInput.defaultProps = { theme };

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
  flex-shrink: 0;

  html[dir='rtl'] & {
    margin-right: 0;
    margin-left: 1rem;
  }

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

    html[dir='rtl'] & {
      left: auto;
      right: ${switchProps.handleEdgeDistance};
    }
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

      html[dir='rtl'] & {
        left: auto;
        right: ${switchProps.handleActiveEdgeDistance};
      }
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

      html[dir='rtl'] & {
        left: auto;
        right: 100%;
        transform: translateX(${unitCalc(switchProps.switchHeight, 1, '+')});
      }
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

      html[dir='rtl'] & {
        left: auto;
        right: 100%;
        transform: translateX(${unitCalc(switchProps.switchHeight, 1, '+')});
      }
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

  ${props =>
    props.color &&
    css`
      input:hover + &:after {
        border-color: ${lighten(0.2, props.color)};
      }

      input:active + &:after {
        border-color: ${lighten(0.2, props.color)};
      }

      input:checked:active + & {
        box-shadow: 0 0 4px 2px
          ${transparentize(0.6, lighten(0.2, props.color))};

        &:after {
          border-color: ${lighten(0.2, props.color)};
        }
      }

      input:checked + & {
        background-color: ${props.color};
        border-color: ${darken(0.2, props.color)};

        &:after {
          border-color: ${darken(0.2, props.color)};
        }
      }

      input:focus + &:after {
        border-color: ${lighten(0.2, props.color)};
      }

      input:checked:focus + & {
        box-shadow: 0 0 4px 2px
          ${transparentize(0.6, lighten(0.2, props.color))};

        &:after {
          border-color: ${lighten(0.2, props.color)};
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
StyledSwitchTrack.defaultProps = { theme };

const StyledSwitchLabel = styled(StyledFormControlLabel)`
  vertical-align: top;
  text-align: right;

  &:first-child {
    margin-right: 1rem;
    text-align: initial;

    html[dir='rtl'] & {
      margin-right: 0;
      margin-left: 1rem;
    }
  }

  ${props =>
    props.fullWidth &&
    css`
      flex: 1 0 auto;
    `};
`;
StyledSwitchLabel.defaultProps = { theme };

export {
  StyledSwitch,
  StyledSwitchInput,
  StyledSwitchTrack,
  StyledSwitchLabel
};
