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

import colors from '@esri/calcite-colors/colors.json';

const CalciteTheme = {
  palette: {
    // ┌───────────┐
    // │ Grayscale │
    // └───────────┘
    white: colors['blk-000'],
    offWhite: colors['blk-005'],
    lightestGray: colors['blk-020'],
    lighterGray: colors['blk-050'],
    lightGray: colors['blk-080'],
    gray: colors['blk-100'],
    darkGray: colors['blk-120'],
    darkerGray: colors['blk-140'],
    darkestGray: colors['blk-160'],
    offBlack: colors['blk-180'],
    black: colors['blk-200'],

    transparentWhite: 'rgba(255, 255, 255, 0.7)',
    opaqueWhite: 'rgba(255, 255, 255, 0.8)',
    transparentOffWhite: 'rgba(0, 0, 0, 0.1)',

    transparentDarkerGray: 'rgba(0, 0, 0, 0.3)',
    transparentOffBlack: 'rgba(0, 0, 0, 0.45)',
    transparentBlack: 'rgba(0, 0, 0, 0.75)',
    opaqueBlack: 'rgba(0, 0, 0, 0.85)',

    // ┌────────────┐
    // │ Brand Blue │
    // └────────────┘
    Brand_Blue_100: colors['h-bb-020'], //  previously blue 14
    Brand_Blue_120: colors['v-bb-120'],
    Brand_Blue_140: colors['v-bb-140'],
    Brand_Blue_150: colors['h-bb-040'], // previously blue 13
    Brand_Blue_160: colors['v-bb-160'],
    Brand_Blue_200: colors['h-bb-060'], // "Esri Blue", previously blue 12
    Brand_Blue_250: colors['h-bb-080'], // previously blue 11

    // ┌───────────┐
    // │ UI Colors │
    // └───────────┘
    lightestBlue: colors['h-bb-010'],
    lighterBlue: colors['h-bb-030'],
    lightBlue: colors['h-bb-050'],
    blue: colors['h-bb-060'],
    darkBlue: colors['h-bb-080'],
    darkerBlue: colors['h-bb-100'],

    lightestGreen: colors['h-gg-010'],
    lighterGreen: colors['h-gg-020'],
    lightGreen: colors['h-gg-040'],
    green: colors['h-gg-060'],
    darkGreen: colors['h-gg-080'],
    darkerGreen: colors['h-gg-100'],

    lightestRed: colors['h-rr-010'],
    lighterRed: colors['h-rr-020'],
    lightRed: colors['h-rr-040'],
    red: colors['h-rr-060'],
    darkRed: colors['h-rr-080'],
    darkerRed: colors['h-rr-100'],

    lightestOrange: colors['h-oo-010'],
    lighterOrange: colors['h-oo-020'],
    lightOrange: colors['h-oo-040'],
    orange: colors['h-oo-060'],
    darkOrange: colors['h-oo-080'],
    darkerOrange: colors['h-oo-100'],

    lightestYellow: colors['h-yy-010'],
    lighterYellow: colors['h-yy-020'],
    lightYellow: colors['h-yy-040'],
    yellow: colors['h-yy-060'],
    darkYellow: colors['h-yy-080'],
    darkerYellow: colors['h-yy-100'],

    lightestPurple: colors['h-vv-010'],
    lighterPurple: colors['h-vv-020'],
    lightPurple: colors['h-vv-040'],
    purple: colors['h-vv-060'],
    darkPurple: colors['h-vv-080'],
    darkerPurple: colors['h-vv-100'],

    lightestBrown: colors['h-br-010'],
    lighterBrown: colors['h-br-020'],
    lightBrown: colors['h-br-040'],
    brown: colors['h-br-060'],
    darkBrown: colors['h-br-080'],
    darkerBrown: colors['h-br-100']
  },
  type: {
    // Header Family
    avenirTracking: 0,
    avenirFamily:
      '"Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif',

    // Code Family
    codeTracking: 0,
    codeFamily:
      '"Consolas", "Andale Mono", "Lucida Console", "Monaco", monospace',

    // Icon Family
    iconTracking: 0,
    iconFamily: `
      font-family: 'calcite-ui';
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      display: inline-block;
      text-decoration: none;
    }`,

    // Structural
    ratio: 1.414,
    mediumRatio: 1.33,
    smallRatio: 1.25,
    bodySize: '1rem',
    smallSize: '0.85rem',
    indent: '1em'
  },

  // ┌──────────────┐
  // │ UI Variables │
  // └──────────────┘
  transition: '150ms linear',
  transitionDuration: '150ms',
  easingFunc: 'linear',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 16px 0px',
  drawerWidth: '280px',
  borderRadius: 0,

  // ┌─────────────┐
  // │ Type Colors │
  // └─────────────┘
  typeColor: colors['ui-text-1'],
  linkColor: colors['ui-blue'],
  linkHover: colors['ui-blue-hover'],

  // ┌─────────────┐
  // │ Breakpoints │
  // └─────────────┘
  small: '480px',
  medium: '860px',
  large: '1450px',

  // ┌──────────────────────┐
  // │ SCREEN CONTENT WIDTH │
  // └──────────────────────┘
  contentWidth: '1440px',
  contentMaxWidth: '96vw',

  // ┌────────────────────┐
  // │ Grid Configuration │
  // └────────────────────┘
  prefix: '',

  // ┌───────────────────┐
  // │ Tooltip Variables │
  // └───────────────────┘
  tooltipBackgroundColor: colors['blk-200'],
  tooltipBorderRadius: 0,
  tooltipEnterDelay: 0,

  // ┌─────────┐
  // │ Toaster │
  // └─────────┘
  toasterWidth: '450px',

  vwRatio: '0.95',
  containerWidth: '1450px',
  maxWidth: '0.95 * 100vw',
  columnGutter: '1rem',

  // Grid Fallback Options
  ie8Support: false,
  columnGutterFallback: '20px',
  containerWidthFallback: '960px',

  // Large
  largeClass: 'large',
  largeColumnCount: '24',

  // Default
  defaultColumnCount: '24',

  // Medium
  mediumClass: 'tablet',
  mediumColumnCount: '12',

  // Small
  smallClass: 'phone',
  smallColumnCount: '6',

  // Rhythm
  horizontalRange: '4',
  verticalRange: '6',
  baseline: '1.55rem'
};

export default CalciteTheme;
