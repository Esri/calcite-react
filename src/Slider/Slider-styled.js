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
import { CalciteInput } from '../utils/commonElements';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';
import colors from '@esri/calcite-colors/colors';

// Calcite components

// Icons

// Third party libraries
import { transparentize } from 'polished';

const rangeProps = {
  rangeBorder: '1px solid transparent',
  trackBgColor: theme.palette.lighterGray,
  trackErrorBgColor: theme.palette.lightRed,
  trackHeight: '2px',
  trackHoverBgcolor: theme.palette.lightGray,
  trackErrorHoverBgcolor: theme.palette.darkRed200,
  trackActiveBgcolor: theme.palette.gray,
  trackErrorActiveBgcolor: theme.palette.darkRed,
  thumbHeight: '18px',
  thumbWidth: '18px',
  thumbBorder: '2px solid',
  thumbBorderColor: theme.palette.gray,
  thumbErrorBorderColor: theme.palette.darkRed200,
  thumbBorderHoverColor: theme.palette.Brand_Blue_200,
  thumbErrorBorderHoverColor: theme.palette.darkRed200,
  thumbShadowHover: `0 0 4px 1px ${transparentize(
    0.1,
    theme.palette.lighterGray
  )}`,
  thumbShadowActive: `0 0 4px 1px ${transparentize(
    0.1,
    theme.palette.lightestGray
  )}`,
  thumbBgDefault: theme.palette.white,
  thumbBgHover: theme.palette.Brand_Blue_200,
  thumbErrorBgHover: theme.palette.darkRed200,
  thumbBgActive: colors['ui-blue-press'],
  thumbErrorBgActive: theme.palette.darkRed
};

const rangeStyle = () => {
  return `
    border: ${rangeProps.rangeBorder};
    background-color: transparent;
    box-shadow: none;
    margin-top: 0;
    padding: 0;
    z-index: 1;
    cursor: pointer;
  `;
};

const trackStyle = error => {
  return `
    width: 100%;
    height: ${rangeProps.trackHeight};
    z-index: 2;
    background-color: ${
      error ? rangeProps.trackErrorBgColor : rangeProps.trackBgColor
    };
  `;
};

const thumbStyle = error => {
  return `
  height: ${rangeProps.thumbHeight};
  width: ${rangeProps.thumbWidth};
  border-radius: 50px;
  margin-top: -8px;
  cursor: pointer;
  background-color: ${rangeProps.thumbBgDefault};
  border: ${rangeProps.thumbBorder};
  border-color: ${
    error ? rangeProps.thumbErrorBorderColor : rangeProps.thumbBorderColor
  };
  z-index: 3;
  -webkit-appearance: none;
  `;
};

const thumbHoverStyle = error => {
  return `
    background-color: ${
      error ? rangeProps.thumbErrorBgHover : rangeProps.thumbBgHover
    };
    border-color: ${
      error
        ? rangeProps.thumbErrorBorderHoverColor
        : rangeProps.thumbBorderHoverColor
    };
    box-shadow: ${rangeProps.thumbShadowHover};
  `;
};

const thumbFocusStyle = error => {
  return `
    background-color: ${
      error ? rangeProps.thumbErrorBgActive : rangeProps.thumbBgActive
    };
    border-color: ${
      error
        ? rangeProps.thumbErrorBorderHoverColor
        : rangeProps.thumbBorderHoverColor
    };
    box-shadow: ${rangeProps.thumbShadowActive};
  `;
};

const rangeHoverThumbStyle = error => {
  return `
    background-color: ${rangeProps.thumbBgDefault};
    border-color: ${
      error
        ? rangeProps.thumbErrorBorderHoverColor
        : rangeProps.thumbBorderHoverColor
    };
    box-shadow: ${rangeProps.thumbShadowHover};
  `;
};

const rangeFocusThumbStyle = error => {
  return `
    background-color: ${
      error ? rangeProps.thumbErrorBgHover : rangeProps.thumbBgHover
    };
    border-color: ${
      error
        ? rangeProps.thumbErrorBorderHoverColor
        : rangeProps.thumbBorderHoverColor
    };
    outline: none;
    box-shadow: ${rangeProps.thumbShadowActive};
  `;
};

const rangeFocusThumbHoverStyle = error => {
  return `
    background-color: ${
      error ? rangeProps.thumbErrorBgActive : rangeProps.thumbBgActive
    };
    border-color: ${
      error
        ? rangeProps.thumbErrorBorderHoverColor
        : rangeProps.thumbBorderHoverColor
    };
  `;
};

const thumbFocusHoverStyle = error => {
  return `
    background-color: ${
      error ? rangeProps.thumbErrorBgActive : rangeProps.thumbBgActive
    };
    border-color: ${
      error
        ? rangeProps.thumbErrorBorderHoverColor
        : rangeProps.thumbBorderHoverColor
    };
    box-shadow: ${rangeProps.thumbShadowActive};
  `;
};

const StyledSlider = styled(CalciteInput)`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${rangeStyle()};

  ${props =>
    (props.error || props.success) &&
    css`
      border-color: transparent;
      padding-right: 0;
      background-image: none;

      html[dir='rtl'] & {
        padding-left: 0;
      }

      &:focus {
        border-color: transparent;
        box-shadow: none;
      }
    `};

  &:hover {
    // webkit
    &::-webkit-slider-runnable-track {
      background-color: ${props =>
        props.error
          ? rangeProps.trackErrorHoverBgcolor
          : rangeProps.trackHoverBgcolor};
    }
    &::-webkit-slider-thumb {
      ${props => rangeHoverThumbStyle(props.error)};
    }
    // ff
    &::-moz-range-track {
      background-color: ${props =>
        props.error
          ? rangeProps.trackErrorHoverBgcolor
          : rangeProps.trackHoverBgcolor};
    }
    &::-moz-range-thumb {
      ${props => rangeHoverThumbStyle(props.error)};
    }
    // ie
    &::-ms-fill-upper {
      background-color: ${props =>
        props.error
          ? rangeProps.trackErrorHoverBgcolor
          : rangeProps.trackHoverBgcolor};
    }
    &::-ms-fill-lower {
      background-color: ${props =>
        props.error
          ? rangeProps.trackErrorHoverBgcolor
          : rangeProps.trackHoverBgcolor};
    }
    &::-ms-thumb {
      ${props => rangeHoverThumbStyle(props.error)};
    }
  }

  &:focus,
  &:active {
    border-color: transparent;
    box-shadow: none;

    // webkit
    &::-webkit-slider-runnable-track {
      background-color: ${props =>
        props.error
          ? rangeProps.trackErrorHoverBgcolor
          : rangeProps.trackHoverBgcolor};
    }
    &::-webkit-slider-thumb {
      ${props => rangeFocusThumbStyle(props.error)};
    }
    &::-webkit-slider-thumb:hover {
      ${props => rangeFocusThumbHoverStyle(props.error)};
    }
    // ff
    &::-moz-range-track {
      background-color: ${props =>
        props.error
          ? rangeProps.trackErrorHoverBgcolor
          : rangeProps.trackHoverBgcolor};
    }
    &::-moz-range-thumb {
      ${props => rangeFocusThumbStyle(props.error)};
    }
    &::-moz-range-thumb:hover {
      ${props => rangeFocusThumbHoverStyle(props.error)};
    }
    // ie
    &::-ms-fill-upper {
      background-color: ${props =>
        props.error
          ? rangeProps.trackErrorHoverBgcolor
          : rangeProps.trackHoverBgcolor};
    }
    &::-ms-fill-lower {
      background-color: ${props =>
        props.error
          ? rangeProps.trackErrorHoverBgcolor
          : rangeProps.trackHoverBgcolor};
    }
    &::-ms-thumb {
      ${props => rangeFocusThumbStyle(props.error)};
    }
    &::-ms-thumb:hover {
      ${props => rangeFocusThumbHoverStyle(props.error)};
    }
  }

  //webkit styles
  &::-webkit-slider-runnable-track {
    background-color: red;
    ${props => trackStyle(props.error)};
  }
  &::-webkit-slider-thumb {
    ${props => thumbStyle(props.error)};
    &:hover {
      ${props => thumbHoverStyle(props.error)};
    }
    &:focus,
    &:active {
      ${props => thumbFocusStyle(props.error)};
      &:hover {
        ${props => thumbFocusHoverStyle(props.error)};
      }
    }
  }
  // make tap target larger on touch devices
  @supports (-webkit-overflow-scrolling: touch) {
    &::-webkit-slider-thumb {
      height: 20px;
      width: 20px;
      margin-top: -9px;
    }
  }

  // ff styles
  &::-moz-range-track {
    ${props => trackStyle(props.error)};
  }
  &::-moz-range-thumb {
    ${props => trackStyle(props.error)};
    height: 14px;
    width: 14px;
    &:hover {
      ${props => thumbHoverStyle(props.error)};
    }
    &:focus,
    &:active {
      ${props => thumbFocusStyle(props.error)};
      &:hover {
        ${props => thumbFocusHoverStyle(props.error)};
      }
    }
  }

  // ie styles
  &::-ms-fill-upper,
  &::-ms-fill-lower {
    background-color: ${rangeProps.trackBgcolor};
  }
  &::-ms-track {
    ${props => trackStyle(props.error)};
    height: ${rangeProps.trackHeight};
    border: 0px solid transparent;
    color: transparent;
  }

  &::-ms-thumb {
    ${props => thumbStyle(props.error)};
    height: 14px;
    width: 14px;
    margin-top: 0px;
    &:hover {
      ${props => thumbHoverStyle(props.error)};
    }
    &:focus,
    &:active {
      ${props => thumbFocusStyle(props.error)};
      &:hover {
        ${props => thumbFocusHoverStyle(props.error)};
      }
    }
  }
`;
StyledSlider.defaultProps = { theme };

export { StyledSlider };
