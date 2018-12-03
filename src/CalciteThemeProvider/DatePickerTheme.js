import CalciteTheme from './CalciteTheme';
import EsriColors from './EsriColors';

const core = {
  white: '#fff',
  gray: '#565a5c',
  grayLight: '#82888a',
  grayLighter: '#cacccd',
  grayLightest: '#f2f2f2',

  borderMedium: '#c4c4c4',
  border: CalciteTheme.palette.lighterGray,
  borderLight: '#e4e7e7',
  borderLighter: '#eceeee',
  borderBright: '#f4f5f5',

  primary: CalciteTheme.palette.blue,
  primaryShade_1: CalciteTheme.palette.darkBlue,
  primaryShade_2: CalciteTheme.palette.lightBlue,
  primaryShade_3: CalciteTheme.palette.lighterBlue,
  primaryShade_4: CalciteTheme.palette.lightestBlue,
  primary_dark: CalciteTheme.palette.darkerBlue,

  secondary: CalciteTheme.palette.Brand_Blue_200,

  yellow: '#ffe8bc',
  yellow_dark: '#ffce71'
};

const DatePickerTheme = {
  reactDates: {
    zIndex: 0,
    border: {
      input: {
        border: 0,
        borderTop: 0,
        borderRight: 0,
        borderBottom: '2px solid transparent',
        borderLeft: 0,
        outlineFocused: 0,
        borderFocused: 0,
        borderTopFocused: 0,
        borderLeftFocused: 0,
        borderBottomFocused: `2px solid ${CalciteTheme.palette.blue}`,
        borderRightFocused: 0,
        borderWidth: 1,
        borderRadius: CalciteTheme.borderRadius
      },
      pickerInput: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: CalciteTheme.borderRadius
      }
    },

    color: {
      core,

      disabled: core.grayLightest,

      background: core.white,
      backgroundDark: '#f2f2f2',
      backgroundFocused: core.white,
      border: CalciteTheme.palette.lightGray,
      text: core.gray,
      textDisabled: core.border,
      textFocused: CalciteTheme.palette.blue,
      placeholderText: '#757575',

      outside: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        color: core.gray,
        color_active: core.gray,
        color_hover: core.gray
      },

      highlighted: {
        backgroundColor: core.yellow,
        backgroundColor_active: core.yellow_dark,
        backgroundColor_hover: core.yellow_dark,
        color: core.gray,
        color_active: core.gray,
        color_hover: core.gray
      },

      minimumNights: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        borderColor: core.borderLighter,
        color: core.grayLighter,
        color_active: core.grayLighter,
        color_hover: core.grayLighter
      },

      hoveredSpan: {
        backgroundColor: EsriColors.Calcite_Blue_150,
        backgroundColor_active: EsriColors.Calcite_Blue_200,
        backgroundColor_hover: EsriColors.Calcite_Blue_200,
        borderColor: EsriColors.Calcite_Blue_200,
        borderColor_active: EsriColors.Calcite_Blue_200,
        borderColor_hover: EsriColors.Calcite_Blue_200,
        color: CalciteTheme.palette.darkerBlue,
        color_active: CalciteTheme.palette.darkerBlue,
        color_hover: CalciteTheme.palette.darkerBlue
      },

      selectedSpan: {
        backgroundColor: EsriColors.Calcite_Blue_150,
        backgroundColor_active: EsriColors.Calcite_Blue_200,
        backgroundColor_hover: EsriColors.Calcite_Blue_200,
        borderColor: EsriColors.Calcite_Blue_200,
        borderColor_active: EsriColors.Calcite_Blue_200,
        borderColor_hover: EsriColors.Calcite_Blue_200,
        color: CalciteTheme.palette.darkBlue,
        color_active: CalciteTheme.palette.darkBlue,
        color_hover: CalciteTheme.palette.darkBlue
      },

      selected: {
        backgroundColor: CalciteTheme.palette.blue,
        backgroundColor_active: CalciteTheme.palette.blue,
        backgroundColor_hover: CalciteTheme.palette.blue,
        borderColor: CalciteTheme.palette.blue,
        borderColor_active: CalciteTheme.palette.blue,
        borderColor_hover: CalciteTheme.palette.blue,
        color: core.white,
        color_active: core.white,
        color_hover: core.white
      },

      blocked_calendar: {
        backgroundColor: core.grayLighter,
        backgroundColor_active: core.grayLighter,
        backgroundColor_hover: core.grayLighter,
        borderColor: core.grayLighter,
        borderColor_active: core.grayLighter,
        borderColor_hover: core.grayLighter,
        color: core.grayLight,
        color_active: core.grayLight,
        color_hover: core.grayLight
      },

      blocked_out_of_range: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        borderColor: core.borderLight,
        borderColor_active: core.borderLight,
        borderColor_hover: core.borderLight,
        color: core.grayLighter,
        color_active: core.grayLighter,
        color_hover: core.grayLighter
      }
    },

    spacing: {
      dayPickerHorizontalPadding: 9,
      captionPaddingTop: 22,
      captionPaddingBottom: 37,
      inputPadding: 0,
      displayTextPaddingVertical: undefined,
      displayTextPaddingTop: 9,
      displayTextPaddingBottom: 7,
      displayTextPaddingHorizontal: undefined,
      displayTextPaddingLeft: '0.31rem',
      displayTextPaddingRight: '0.31rem',
      displayTextPaddingVertical_small: undefined,
      displayTextPaddingTop_small: 4,
      displayTextPaddingBottom_small: 2,
      displayTextPaddingHorizontal_small: undefined,
      displayTextPaddingLeft_small: '0.31rem',
      displayTextPaddingRight_small: '0.31rem'
    },

    sizing: {
      inputWidth: 100,
      inputWidth_small: 80,
      arrowWidth: 19,
      arrowWidth_small: 15
    },

    noScrollBarOnVerticalScrollable: false,

    font: {
      size: '0.875rem',
      captionSize: '0.9375rem',
      input: {
        size: '0.9375rem',
        lineHeight: '0rem',
        size_small: '0rem',
        lineHeight_small: '0rem',
        letterSpacing_small: '0.2px',
        styleDisabled: 'italic'
      }
    }
  }
};

export default DatePickerTheme;
