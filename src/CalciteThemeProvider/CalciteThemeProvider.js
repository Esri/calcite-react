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

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css, ThemeProvider, createGlobalStyle } from 'styled-components';
import { unitCalc, fontSize } from '../utils/helpers';

import CalciteTheme from './CalciteTheme';

//Do the global styles stuff
const CalciteReactGlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    font-size: 100%;
  }

  body {
    min-height: 100%;
    margin: 0;

    tracking: 0;
    font-family: ${props => props.theme.type.avenirFamily};
    line-height: 1.55rem;
    color: #4c4c4c;
    background-color: #ffffff;

    -webkit-font-smoothing: subpixel-antialiased;

    font-feature-settings: "kern";

    font-kerning: normal;
    text-rendering: optimizeLegibility;
    font-feature-settings : "liga" 1,"calt" 0;
  }

  .wrapper {
    overflow: hidden;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden] {
    display: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  video,
  img {
    max-width: 100%;
    height: auto;
  }

  .ie {
    main {
      display: block;
    }

    select {
      padding-right: 8px;
    }
  }

  /* DatePicker */

  .SingleDatePicker_picker,
  .DateRangePicker_picker {
    margin-top: -20px;
    z-index: 101 !important;

    .DayPickerKeyboardShortcuts_buttonReset {
      font-size: 0.875rem;
    }
    .DayPickerKeyboardShortcuts_show__bottomRight::before {
      border-right-color: ${props => props.theme.palette.blue};
    }
    .DayPickerKeyboardShortcuts_show__bottomRight:hover::before {
      border-right-color: ${props => props.theme.palette.blue};
    }
    .DayPickerKeyboardShortcuts_show__topRight::before {
      border-right-color: ${props => props.theme.palette.blue};
    }
    .DayPickerKeyboardShortcuts_show__topRight:hover::before {
      border-right-color: ${props => props.theme.palette.blue};
    }
    .DayPickerKeyboardShortcuts_show__topLeft::before {
      border-left-color: ${props => props.theme.palette.blue};
    }
    .DayPickerKeyboardShortcuts_show__topLeft:hover::before {
      border-left-color: ${props => props.theme.palette.blue};
    }
    .DayPickerKeyboardShortcuts_panel {
      border: 1px solid ${props => props.theme.palette.lighterGray};
      border-radius: ${props => props.theme.borderRadius};
    }
    .DayPickerKeyboardShortcuts_list {
      font-size: 0.875rem;
    }
    .CalendarDay {
      font-size: 0.875rem;
    }
    .CalendarDay__default {
      color: #565a5c;
    }
    .CalendarDay__outside {
      color: #565a5c;
    }
    .CalendarDay__highlighted_calendar {
      color: #565a5c;
    }
    .CalendarDay__highlighted_calendar:active,
    .CalendarDay__highlighted_calendar:hover {
      color: #565a5c;
    }
    .CalendarDay__selected_span {
      background: ${props => props.theme.palette.lightestBlue};
      border: 1px double ${props => props.theme.palette.lighterBlue};
      color: ${props => props.theme.palette.darkBlue};
    }
    .CalendarDay__selected_span:active,
    .CalendarDay__selected_span:hover {
      background: ${props => props.theme.palette.darkBlue};
      border: 1px double ${props => props.theme.palette.darkBlue};
      color: #fff;
    }
    .CalendarDay__selected,
    .CalendarDay__selected:active,
    .CalendarDay__selected:hover {
      background: ${props => props.theme.palette.blue};
      border: 1px double ${props => props.theme.palette.blue};
      color: #fff;
    }
    .CalendarDay__hovered_span,
    .CalendarDay__hovered_span:hover {
      background: ${props => props.theme.palette.lightestBlue};
      border: 1px double ${props => props.theme.palette.lighterBlue};
      color: ${props => props.theme.palette.Brand_Blue_200};
    }
    .CalendarDay__hovered_span:active {
      background: ${props => props.theme.palette.lighterBlue};
      border: 1px double ${props => props.theme.palette.lighterBlue};
      color: ${props => props.theme.palette.Brand_Blue_200};
    }
    .CalendarDay__blocked_calendar,
    .CalendarDay__blocked_calendar:active,
    .CalendarDay__blocked_calendar:hover {
      color: #82888a;
    }
    .CalendarDay__blocked_out_of_range,
    .CalendarDay__blocked_out_of_range:active,
    .CalendarDay__blocked_out_of_range:hover {
      color: #cacccd;
    }
    .CalendarMonth_caption {
      color: #565a5c;
      font-size: 0.9375rem;
    }
    .DayPickerNavigation_button__horizontalDefault {
      border-radius: ${props => props.theme.borderRadius};
    }
    .DayPickerNavigation_svg__vertical {
      fill: #565a5c;
    }
    .DayPicker__withBorder {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05),
        0 0 0 1px ${props => props.theme.palette.lightestGray};
      border-radius: ${props => props.theme.borderRadius};
    }
    .DayPicker_weekHeaders {
      display: none;
    }
    .DayPicker_weekHeader__verticalScrollable {
      border-bottom: 1px solid ${props => props.theme.palette.lighterGray};
    }
    .DayPicker_weekHeader_ul {
      font-size: 0.875rem;
    }
    .DayPicker_transitionContainer {
      border-radius: ${props => props.theme.borderRadius};
    }
  }

  /* Toastify */

  .Toastify__toast-container.Toastify__toast-container {
    width: ${props => props.theme.toasterWidth};

    &--top-center,
    &--bottom-center {
      margin-left: ${props => unitCalc(props.theme.toasterWidth, -0.5, '*')};
    }
  }

  .Toastify__toast.Toastify__toast {
    padding: 0.775rem;
    box-shadow: ${CalciteTheme.boxShadow};
    border-top: 3px solid ${CalciteTheme.palette.blue};
    border-radius: 3px;
    font-family: ${CalciteTheme.type.avenirFamily};
    color: ${CalciteTheme.palette.offBlack};
    background: ${CalciteTheme.palette.white};

    &--info {
      border-top-color: ${CalciteTheme.palette.blue};
      background: ${CalciteTheme.palette.white};
    }
    &--success {
      border-top-color: ${CalciteTheme.palette.green};
      background: ${CalciteTheme.palette.white};
    }
    &--warning {
      border-top-color: ${CalciteTheme.palette.yellow};
      background: ${CalciteTheme.palette.white};
    }
    &--error {
      border-top-color: ${CalciteTheme.palette.red};
      background: ${CalciteTheme.palette.white};
    }
  }

  .Toastify__toast .Toastify__toast-body {
    ${() => fontSize(-1)};
  }

  .Toastify__progress-bar.Toastify__progress-bar {
    visibility: hidden;

    &--default {
      background: ${CalciteTheme.palette.blue};
    }

    &.progress-visible {
      visibility: visible;
    }

    ${props =>
      props.showProgress &&
      css`
        visibility: visible;

        &.progress-hidden {
          visibility: hidden;
        }
      `};
  }

  /* FORM PSEUDO ELEMENTS */

  :placeholder {
    color: #767676;
  }
  :input-placeholder {
    color: #767676;
  }
  ::-webkit-input-placeholder {
    color: #767676;
  }
  ::-moz-placeholder {
    color: #767676;
  }
  :-ms-input-placeholder {
    color: #767676;
  }
  ::-ms-value {
    border: none;
    background-color: transparent;
  }

  /* Type */
  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/77156710-6a58-4606-b189-b4185e75967b.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/3d5260a1-e4cd-4567-80ed-69d23c40355f.woff')
        format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/77caabd3-1877-4634-85c8-8e398a093b99.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/e388ac99-8c6a-4451-8690-1d15b4d45adb.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/014f2daa-c310-4a36-b9fd-79a8e0c48d44.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/12b00842-ec20-4c7f-aa72-802fb00f6cc4.woff')
        format('woff');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/e78b17bb-11fb-4860-8d66-4ee0d0c1e117.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/d4ffabb3-dd7c-472a-bdfb-6700383c6354.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/77156710-6a58-4606-b189-b4185e75967b-ext.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/3d5260a1-e4cd-4567-80ed-69d23c40355f-ext.woff')
        format('woff');
    font-weight: 300;
    font-style: normal;
    unicode-range: U+0100-017f, U+0180-024f, U+1-1eff, U+02b0-02ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/77caabd3-1877-4634-85c8-8e398a093b99-ext.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/e388ac99-8c6a-4451-8690-1d15b4d45adb-ext.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
    unicode-range: U+0100-017f, U+0180-024f, U+1-1eff, U+02b0-02ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/014f2daa-c310-4a36-b9fd-79a8e0c48d44-ext.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/12b00842-ec20-4c7f-aa72-802fb00f6cc4-ext.woff')
        format('woff');
    font-weight: 400;
    font-style: italic;
    unicode-range: U+0100-017f, U+0180-024f, U+1-1eff, U+02b0-02ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/9851da0a-2481-4687-bbeb-ed4ab170dc38-ext.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/cebce072-9561-4c6d-8c89-f0cefec63289-ext.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
    unicode-range: U+0100-017f, U+0180-024f, U+1-1eff, U+02b0-02ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/e78b17bb-11fb-4860-8d66-4ee0d0c1e117-ext.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/d4ffabb3-dd7c-472a-bdfb-6700383c6354-ext.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
    unicode-range: U+0100-017f, U+0180-024f, U+1-1eff, U+02b0-02ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/77156710-6a58-4606-b189-b4185e75967b-greek.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/3d5260a1-e4cd-4567-80ed-69d23c40355f-greek.woff')
        format('woff');
    font-weight: 300;
    font-style: normal;
    unicode-range: U+0370-03ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/77caabd3-1877-4634-85c8-8e398a093b99-greek.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/e388ac99-8c6a-4451-8690-1d15b4d45adb-greek.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
    unicode-range: U+0370-03ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/014f2daa-c310-4a36-b9fd-79a8e0c48d44-greek.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/12b00842-ec20-4c7f-aa72-802fb00f6cc4-greek.woff')
        format('woff');
    font-weight: 400;
    font-style: italic;
    unicode-range: U+0370-03ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/e78b17bb-11fb-4860-8d66-4ee0d0c1e117-greek.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/d4ffabb3-dd7c-472a-bdfb-6700383c6354-greek.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
    unicode-range: U+0370-03ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/174d458a-81e0-4174-9473-35e3bf0a613c.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/57a79aa3-9b06-4ba7-a9a4-2b766d826ecf.woff')
        format('woff');
    font-weight: 300;
    font-style: normal;
    unicode-range: U+0400-04ff;
  }
  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/7db1f672-3a8f-4d19-9c49-7f61aed450b5.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/4ab86b35-c0c2-42b5-98ad-4b6eba66b197.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
    unicode-range: U+0400-04ff;
  }
  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/b17468ea-cf53-4635-984b-4d930a68ed4d.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/4d1d0d0d-9ea6-4117-901f-8b32ca1ab936.woff')
        format('woff');
    font-weight: 400;
    font-style: italic;
    unicode-range: U+0400-04ff;
  }
  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/40d36b4a-60c6-460a-bf43-4c948c23563e.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/45b78f45-e639-4836-8612-e0892e120f14.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
    unicode-range: U+0400-04ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/281f890c-8412-4ee3-84ed-8b5d062d2ab8.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/5729f02e-f6b0-4f35-8ee5-c2cffa65fa76.woff')
        format('woff');
    font-weight: 300; // there is no 300 in georgian, so use the same files as 400 instead
    font-style: normal;
    unicode-range: U+10a0-10ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/281f890c-8412-4ee3-84ed-8b5d062d2ab8.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/5729f02e-f6b0-4f35-8ee5-c2cffa65fa76.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
    unicode-range: U+10a0-10ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/2200dfff-da50-40b0-bc12-5e4b872a1998.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/dc10b3bd-5076-4df5-a5f5-e5961f4a6938.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
    unicode-range: U+10a0-10ff;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/2a1ae9a5-b6b5-405c-b660-bbdf1b356952.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/a8aeea1b-1a9d-45b7-8ad9-7c71824599e2.woff')
        format('woff');
    font-weight: 300;
    font-style: normal;
    unicode-range: U+0600-06ff, U+FB50-FDFF, U+FE70-FEFF;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/6ea5fa46-5311-450b-8744-288a30c55348.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/d9e4040d-32ff-4a1c-ac04-927a781da1f5.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
    unicode-range: U+0600-06ff, U+FB50-FDFF, U+FE70-FEFF;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/97694c53-4e94-4f9e-969b-a148adfcdcfd.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/8b01637a-f445-4f10-92ea-b84a355f7690.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
    unicode-range: U+0600-06ff, U+FB50-FDFF, U+FE70-FEFF;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/31da4b04-f98a-4b5f-b545-a31d26da99e5.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/d98fb015-7ef6-404f-a58a-5c9242d79770.woff')
        format('woff');
    font-weight: 300; // there is no 300 in hebrew, so use the same files as 400 instead
    font-style: normal;
    unicode-range: U+0590-05ff, U+FB00-FB4F;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/31da4b04-f98a-4b5f-b545-a31d26da99e5.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/d98fb015-7ef6-404f-a58a-5c9242d79770.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
    unicode-range: U+0590-05ff, U+FB00-FB4F;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/32a2c5cf-6736-44a6-a276-49ba7e030944.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/fa71df11-7b19-4baf-8ff7-3537dea718f0.woff')
        format('woff');
    font-weight: 400;
    font-style: italic;
    unicode-range: U+0590-05ff, U+FB00-FB4F;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/a9eaf4d3-6427-42df-9306-3ea1270f7b1a.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/f4a085c3-1c64-4fc0-a598-26f3e658c2b0.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
    unicode-range: U+0590-05ff, U+FB00-FB4F;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/94aa531e-7746-4df0-bb6e-349891f2eda5.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/121524c1-8d82-4155-bfb3-fd2f15f09e93.woff')
        format('woff');
    font-weight: 300;
    font-style: normal;
    unicode-range: U+0900-097f;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/3ae1e25e-3aa6-4061-a016-a079159f9d65.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/f1799750-0952-403f-8108-b2402eed0f62.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
    unicode-range: U+0900-097f;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/41331c3c-3759-4462-8695-33c9a21b6a5b.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/31e0c094-e345-4a54-a797-d5f1a5885572.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
    unicode-range: U+0900-097f;
  }

  @font-face {
    font-family: 'SST Vietnamese';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/c4cc9032-7eee-4a6e-ae8b-f384b1349bcf.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/1b3078ef-2971-4c95-b6ca-13ab528758cb.woff')
        format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'SST Vietnamese';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/c1905e2e-a1cb-49de-9bb0-ce3c5ffc85ae.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/341bcc5e-7ac0-44ff-819d-5887892eab1b.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'SST Vietnamese';
    src: url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/4daa2125-53c6-4da8-9614-8a1049eaccc2.woff2')
        format('woff2'),
      url('https://webapps-cdn.esri.com/CDN/fonts/v1.0.0/0763eab1-d6ed-4c73-afb0-895f930df099.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
  }
`;

const CalciteThemeProvider = ({ children, theme, ...other }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <CalciteReactGlobalStyles />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

CalciteThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object
};

CalciteThemeProvider.defaultProps = {
  theme: CalciteTheme
};

export default CalciteThemeProvider;
