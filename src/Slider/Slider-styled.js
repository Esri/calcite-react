import styled from 'styled-components';
import { transparentize } from 'polished';

import CalciteTheme from '../theme/CalciteTheme';
import EsriColors from '../theme/EsriColors';

import { CalciteInput } from '../utils/commonElements';

const rangeProps = {
  rangeBorder: '1px solid transparent',
  trackBgcolor: CalciteTheme.palette.lighterGray,
  trackHeight: '2px',
  trackHoverBgcolor: CalciteTheme.palette.lightGray,
  trackActiveBgcolor: CalciteTheme.palette.gray,
  thumbHeight: '18px',
  thumbWidth: '18px',
  thumbBorder: '2px solid',
  thumbBorderColor: CalciteTheme.palette.gray,
  thumbBorderHoverColor: CalciteTheme.palette.Brand_Blue_200,
  thumbShadowHover: `0 0 4px 1px ${transparentize(
    0.1,
    CalciteTheme.palette.lighterGray
  )}`,
  thumbShadowActive: `0 0 4px 1px ${transparentize(
    0.1,
    CalciteTheme.palette.lightestGray
  )}`,
  thumbBgDefault: CalciteTheme.palette.white,
  thumbBgHover: CalciteTheme.palette.Brand_Blue_200,
  thumbBgActive: EsriColors.Calcite_Blue_a250
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

const trackStyle = () => {
  return `
    width: 100%;
    height: ${rangeProps.trackHeight};
    border-radius: 0;
    z-index: 2;
    background-color: ${rangeProps.trackBgcolor};
  `;
};

const thumbStyle = () => {
  return `
    height: ${rangeProps.thumbHeight};
    width: ${rangeProps.thumbWidth};
    border-radius: 50px;
    margin-top: -8px;
    cursor: pointer;
    background-color: ${rangeProps.thumbBgDefault};
    border: ${rangeProps.thumbBorder};
    border-color: ${rangeProps.thumbBorderColor};
    z-index: 3;
    -webkit-appearance: none;
  `;
};

const thumbHoverStyle = () => {
  return `
    background-color: ${rangeProps.thumbBgHover};
    border-color: ${rangeProps.thumbBorderHoverColor};
    box-shadow: ${rangeProps.thumbShadowHover};
  `;
};

const thumbFocusStyle = () => {
  return `
    background-color: ${rangeProps.thumbBgActive};
    border-color: ${rangeProps.thumbBorderHoverColor};
    box-shadow: ${rangeProps.thumbShadowActive};
  `;
};

const rangeHoverThumbStyle = () => {
  return `
    background-color: ${rangeProps.thumbBgDefault};
    border-color: ${rangeProps.thumbBorderHoverColor};
    box-shadow: ${rangeProps.thumbShadowHover};
  `;
};

const rangeFocusThumbStyle = () => {
  return `
    background-color: ${rangeProps.thumbBgHover};
    border-color: ${rangeProps.thumbBorderHoverColor};
    outline: none;
    box-shadow: ${rangeProps.thumbShadowActive};
  `;
};

const rangeFocusThumbHoverStyle = () => {
  return `
    background-color: ${rangeProps.thumbBgActive};
    border-color: ${rangeProps.thumbBorderHoverColor};
  `;
};

const thumbFocusHoverStyle = () => {
  return `
    background-color: ${rangeProps.thumbBgActive};
    border-color: ${rangeProps.thumbBorderHoverColor};
    box-shadow: ${rangeProps.thumbShadowActive};
  `;
};

const StyledSlider = styled(CalciteInput)`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${rangeStyle()};

  &:hover {
    // webkit
    &::-webkit-slider-runnable-track {
      background-color: ${rangeProps.trackHoverBgcolor};
    }
    &::-webkit-slider-thumb {
      ${rangeHoverThumbStyle()};
    }
    // ff
    &::-moz-range-track {
      background-color: ${rangeProps.trackHoverBgcolor};
    }
    &::-moz-range-thumb {
      ${rangeHoverThumbStyle()};
    }
    // ie
    &::-ms-fill-upper {
      background-color: ${rangeProps.trackHoverBgcolor};
    }
    &::-ms-fill-lower {
      background-color: ${rangeProps.trackHoverBgcolor};
    }
    &::-ms-thumb {
      ${rangeHoverThumbStyle()};
    }
  }

  &:focus,
  &:active {
    border-color: transparent;
    box-shadow: none;

    // webkit
    &::-webkit-slider-runnable-track {
      background-color: ${rangeProps.trackHoverBgcolor};
    }
    &::-webkit-slider-thumb {
      ${rangeFocusThumbStyle()};
    }
    &::-webkit-slider-thumb:hover {
      ${rangeFocusThumbHoverStyle()};
    }
    // ff
    &::-moz-range-track {
      background-color: ${rangeProps.trackHoverBgcolor};
    }
    &::-moz-range-thumb {
      ${rangeFocusThumbStyle()};
    }
    &::-moz-range-thumb:hover {
      ${rangeFocusThumbHoverStyle()};
    }
    // ie
    &::-ms-fill-upper {
      background-color: ${rangeProps.trackHoverBgcolor};
    }
    &::-ms-fill-lower {
      background-color: ${rangeProps.trackHoverBgcolor};
    }
    &::-ms-thumb {
      ${rangeFocusThumbStyle()};
    }
    &::-ms-thumb:hover {
      ${rangeFocusThumbHoverStyle()};
    }
  }

  //webkit styles
  &::-webkit-slider-runnable-track {
    background-color: red;
    ${trackStyle()};
  }
  &::-webkit-slider-thumb {
    ${thumbStyle()};
    &:hover {
      ${thumbHoverStyle()};
    }
    &:focus,
    &:active {
      ${thumbFocusStyle()};
      &:hover {
        ${thumbFocusHoverStyle()};
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
    ${trackStyle()};
  }
  &::-moz-range-thumb {
    ${trackStyle()};
    height: 14px;
    width: 14px;
    &:hover {
      ${thumbHoverStyle()};
    }
    &:focus,
    &:active {
      ${thumbFocusStyle()};
      &:hover {
        ${thumbFocusHoverStyle()};
      }
    }
  }

  // ie styles
  &::-ms-fill-upper,
  &::-ms-fill-lower {
    background-color: ${rangeProps.trackBgcolor};
  }
  &::-ms-track {
    ${trackStyle()};
    height: ${rangeProps.trackHeight};
    border: 0px solid transparent;
    color: transparent;
  }

  &::-ms-thumb {
    ${thumbStyle()};
    height: 14px;
    width: 14px;
    margin-top: 0px;
    &:hover {
      ${thumbHoverStyle()};
    }
    &:focus,
    &:active {
      ${thumbFocusStyle()};
      &:hover {
        ${thumbFocusHoverStyle()};
      }
    }
  }
`;

export { StyledSlider };
