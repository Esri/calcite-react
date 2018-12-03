import EsriColors from './EsriColors';

const CalciteTheme = {
  palette: {
    // ┌───────────┐
    // │ Grayscale │
    // └───────────┘
    white: '#ffffff',
    offWhite: EsriColors.Calcite_Gray_100,
    lightestGray: EsriColors.Calcite_Gray_200,
    lighterGray: EsriColors.Calcite_Gray_350,
    lightGray: EsriColors.Calcite_Gray_400,
    gray: EsriColors.Calcite_Gray_450,
    darkGray: EsriColors.Calcite_Gray_500,
    darkerGray: EsriColors.Calcite_Gray_550,
    darkestGray: EsriColors.Calcite_Gray_600,
    offBlack: EsriColors.Calcite_Gray_650,
    black: EsriColors.Calcite_Gray_700,

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
    Brand_Blue_100: EsriColors.Brand_Blue_100, //  previously blue 14
    Brand_Blue_150: EsriColors.Brand_Blue_150, // previously blue 13
    Brand_Blue_200: EsriColors.Brand_Blue_200, // "Esri Blue", previously blue 12
    Brand_Blue_250: EsriColors.Brand_Blue_250, // previously blue 11

    // ┌───────────┐
    // │ UI Colors │
    // └───────────┘
    lightestBlue: EsriColors.Calcite_Blue_100,
    lighterBlue: EsriColors.Calcite_Blue_150,
    lightBlue: EsriColors.Calcite_Blue_250,
    blue: EsriColors.Calcite_Highlight_Blue_350,
    darkBlue: EsriColors.Calcite_Highlight_Blue_400,
    darkerBlue: '#052942',

    lightestGreen: EsriColors.Calcite_Green_100,
    lightGreen: EsriColors.Calcite_Green_150,
    green: EsriColors.Calcite_Green_250,
    darkGreen: EsriColors.Calcite_Green_a200,
    darkGreen200: EsriColors.Calcite_Green_200,

    lightestRed: EsriColors.Calcite_Red_100,
    lightRed: EsriColors.Calcite_Red_150,
    red: EsriColors.Brand_Red_100,
    darkRed: EsriColors.Calcite_Red_a200,
    darkRed200: EsriColors.Calcite_Red_200,

    lightestOrange: EsriColors.Calcite_Orange_a100,
    lightOrange: EsriColors.Calcite_Orange_a150,
    orange: EsriColors.Calcite_Orange_a200,
    darkOrange: EsriColors.Calcite_Orange_a250,

    lightestYellow: EsriColors.Calcite_Yellow_100,
    lightYellow: EsriColors.Calcite_Yellow_150,
    yellow: EsriColors.Calcite_Yellow_200,
    darkYellow: EsriColors.Calcite_Yellow_a150,

    lightestPurple: EsriColors.Calcite_Purple_100,
    lightPurple: EsriColors.Calcite_Purple_150,
    purple: EsriColors.Calcite_Purple_200,
    darkPurple: EsriColors.Calcite_Purple_a150,

    lightestBrown: EsriColors.Calcite_Brown_100,
    lightBrown: EsriColors.Calcite_Brown_150,
    brown: EsriColors.Calcite_Brown_250,
    darkBrown: EsriColors.Calcite_Brown_a200
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
  boxShadow: '0 0 16px 0 rgba(0,0,0,.05)',
  drawerWidth: '280px',
  borderRadius: 0,

  // ┌─────────────┐
  // │ TYPE COLORS │
  // └─────────────┘
  typeColor: EsriColors.Calcite_Gray_650,
  linkColor: EsriColors.Calcite_Highlight_Blue_350,
  linkHover: EsriColors.Calcite_Highlight_Blue_400,

  // ┌──────────────┐
  // │ Breakpoints  │
  // └──────────────┘
  small: '480px',
  medium: '860px',
  large: '1450px',

  // ┌────────────────────┐
  // │ Grid Configuration │
  // └────────────────────┘
  prefix: '',

  vwRatio: '0.95',
  containerWidth: '1450px',
  maxWidth: '0.95 * 100vw',
  columnGutter: '1rem',

  // Grid Fallback Options
  ie8Support: false,
  columnGutterFallback: '20px',
  containerWidthFallback: '960px',

  // Medium
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
