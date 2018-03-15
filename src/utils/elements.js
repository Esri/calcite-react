import styled, { css } from 'styled-components';
import { fontSize, unitCalc } from './helpers';

const a = styled.a`
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.linkHover};
    text-decoration: underline;
  }
`;

const h1 = styled.h1`
  font-weight: 300;
  font-style: normal;
  margin: 0 0 ${props => props.theme.baseline} 0;
  ${fontSize(5)};
`;

const h4 = styled.h4`
  font-weight: 300;
  font-style: normal;
  margin: 0 0 ${props => props.theme.baseline} 0;
  ${fontSize(2)};
`;

const p = styled.p`
  margin-top: 0;
  margin-bottom: 1.55rem;
`;

const figure = styled.figure`
  margin: 0 0 1.55rem 0;
`;

const formSelectInputTextarea = styled.select`
  position: relative;
  display: block;
  height: 2.25rem;
  width: 100%;
  max-width: 100%;
  margin: 0.25rem 0 0 0;
  padding: 0 ${props => unitCalc(props.theme.baseline, 5, '/')};
  box-sizing: border-box;
  font-family: inherit;
  ${fontSize(-1)};
  color: ${props => props.theme.palette.offBlack};
  vertical-align: baseline;
  outline: none;
  outline-offset: 0;
  background-color: ${props => props.theme.palette.white};
  border: 1px solid ${props => props.theme.palette.lightgray};
  border-radius: 0;
  transition: border-color 150ms linear;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  &:focus {
    border-color: ${props => props.theme.palette.blue};
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075),
      0 0 5px rgba(81, 167, 232, 0.5);
  }
`;

const baseSelect = formSelectInputTextarea.withComponent('select');
const select = baseSelect.extend`
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiM1OTU5NTkiIGQ9Ik03NS43NDksMzcuNDY2YzAuNDI1LDAuNDI1LDAuNTUyLDEuMDYzLDAuMzIyLDEuNjE4Qzc1Ljg0MSwzOS42MzksNzUuMzAxLDQwLDc0LjY5OSw0MGgtNDkuNA0KCQljLTAuNiwwLTEuMTQzLTAuMzYyLTEuMzcyLTAuOTE3Yy0wLjIzLTAuNTU1LTAuMTAzLTEuMTkzLDAuMzIyLTEuNjE4bDIzLjQ0LTIzLjQ0YzEuMjc2LTEuMjc2LDMuMzQzLTEuMjc2LDQuNjIsMEw3NS43NDksMzcuNDY2DQoJCUw3NS43NDksMzcuNDY2eiBNMjQuMjUsNjIuNTM0Yy0wLjQyNi0wLjQyNS0wLjU1My0xLjA2My0wLjMyMy0xLjYxOGMwLjIzLTAuNTU1LDAuNzctMC45MTYsMS4zNy0wLjkxNkg3NC43DQoJCWMwLjYwMiwwLDEuMTQzLDAuMzU5LDEuMzczLDAuOTE2YzAuMjMsMC41NTUsMC4xMDMsMS4xOTMtMC4zMjIsMS42MThMNTIuMzEsODUuOTc3Yy0xLjI3NSwxLjI3NS0zLjM0NCwxLjI3NC00LjYyLDBMMjQuMjUsNjIuNTM0eg0KCQkiLz4NCjwvZz4NCjwvc3ZnPg0K');
  background-position: center right;
  background-repeat: no-repeat;
  background-size: .9rem;
  width: auto;
  padding-right: ${props => props.theme.baseline};
  -webkit-appearance: none;
  -moz-appearance: none;

  &[multiple] {
    height: auto;
    background-image: none;
    padding: 0;

    option {
      padding: ${props => unitCalc(props.theme.baseline, 5, '/')};
    }
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};

  ${props =>
    props.minimal &&
    css`
      display: inline-block;
      border: none;
      box-shadow: none;
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTRweCIg
  aGVpZ2h0PSI3NHB4IiB2aWV3Qm94PSIwIDAgNTQgNzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0
  dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv
  MTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5ICg1MTAwMikgLSBodHRw
  Oi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+QXJ0Ym9hcmQg
  MiBDb3B5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAg
  PGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkFydGJvYXJkLTItQ29weSIgc3Ryb2tlPSJub25lIiBz
  dHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAg
  PGcgaWQ9ImRvd25BcnJvdyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE5LjAwMDAw
  MCkiIGZpbGw9IiM1OTU5NTkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwb2x5
  Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSI1NCAwIDU0IDExLjE3NjQ3MDYgMjcgMzggMCAxMS4xNzY0
  NzA2IDAgMCAyNyAyNi44MjM1Mjk0Ij48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8
  L3N2Zz4=');

      &:focus {
        border-color: none;
        box-shadow: none;
      }
      &:hover {
        text-decoration: underline;
      }
    `};

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    select::-ms-expand {
      display: none;
    }
    select:focus::-ms-value {
      background: transparent;
      color: ${props => props.theme.palette.darkestGray};
    }
  }
`;

const baseInput = formSelectInputTextarea.withComponent('input');
const input = baseInput.extend`
  -webkit-appearance: none;

  ${props =>
    props.search &&
    css`
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0iIzZENkU3MSI+ICAgIDxwYXRoIGQ9Ik0zMS42MDcgMjcuODM4bC02LjEzMy02LjEzN2ExLjMzNiAxLjMzNiAwIDAgMC0xLjg4NyAwbC0uMDM1LjAzNS0yLjUzMy0yLjUzMy0uMDE0LjAxNGMzLjY1Mi00LjU1NiAzLjQyMi0xMS4xOTUtLjgwMy0xNS40Mi00LjUyOS00LjUyNy0xMS44NzUtNC41MzEtMTYuNDA0IDAtNC41MzEgNC41MzEtNC41MjkgMTEuODc1IDAgMTYuNDA2IDQuMjA1IDQuMjA0IDEwLjgxMSA0LjQ1NSAxNS4zNjUuODQ4bC4wMDQuMDAzLS4wMzMuMDMzIDIuNTQxIDIuNTRhMS4zMyAxLjMzIDAgMCAwIC4wMjUgMS44NDhsNi4xMzUgNi4xMzNhMS4zMyAxLjMzIDAgMCAwIDEuODg3IDBsMS44ODUtMS44ODNhMS4zMzIgMS4zMzIgMCAwIDAgMC0xLjg4N3pNMTcuODExIDE3LjgwOWE4LjIxMyA4LjIxMyAwIDAgMS0xMS42MTkgMCA4LjIxNyA4LjIxNyAwIDAgMSAwLTExLjYyMiA4LjIxOSA4LjIxOSAwIDAgMSAxMS42MTkuMDA0IDguMjE2IDguMjE2IDAgMCAxIDAgMTEuNjE4eiIvPjwvc3ZnPg==');
      background-size: 0.875em;
      background-position: 0.25em center;
      background-repeat: no-repeat;
      padding-left: 1.5em;
    `};

  ${props =>
    props.minimal &&
    css`
      background-color: transparent;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom-color: ${props => props.theme.palette.lighterGray};
      box-shadow: none;

      &:focus {
        border-bottom-color: ${props => props.theme.palette.gray};
        box-shadow: none;
      }
    `};

  ${props =>
    props.error &&
    css`
      border-color: ${props => props.theme.palette.darkRed200};
      padding-right: 24px;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeD0iMiIgeT0iMCI+PHBhdGggZmlsbD0iI2M4NmE0YSIgZD0iTTExLjIyNSwwSDQuNjQ4TDAsNC42NXY2LjU3Nmw0LjY0OCw0LjY0OWg2LjU3Nmw0LjY1LTQuNjQ5VjQuNjVMMTEuMjI1LDB6IE05LjA3MSwxMy42MDdINi44MDR2LTIuMjY5aDIuMjY4VjEzLjYwN3ogTTkuMDcxLDkuMDcxSDYuODA0VjMuNDAyaDIuMjY4VjkuMDcxeiIvPjwvc3ZnPg==');
      background-position: right center;
      background-repeat: no-repeat;

      &:focus {
        border-color: ${props => props.theme.palette.darkRed200};
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075),
          0 0 5px rgba(200, 106, 75, 0.5);
      }
    `};

  ${props =>
    props.success &&
    css`
      padding-right: 24px;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjQgMTYiPjxwb2x5Z29uIGZpbGw9IiM1QTkzNTkiIHBvaW50cz0iOC4xODgsMTEuMDgyIDQuMDU5LDYuOTUyIDIuMjU4LDguNzUyIDguMTg4LDE0LjY4MyAxOS43NTQsMy4xMTkgMTcuOTU0LDEuMzE3ICIvPjwvc3ZnPg==');
      background-position: right center;
      background-repeat: no-repeat;
    `};

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};

  &[type='file'] {
    height: auto;
  }
`;

const fieldset = styled.fieldset`
  label {
    margin-bottom: 0.25rem;
    ${fontSize(-1)};
    color: ${props => props.theme.palette.darkestGray};
    width: auto;
  }
`;

const baseTextarea = formSelectInputTextarea.withComponent('textarea');
const textarea = baseTextarea.extend`
  height: auto;
  padding-top: ${props => unitCalc(props.theme.baseline, 5, '/')};
`;

const baseRadioCheckbox = styled.input`
  float: left;
  width: 1rem;
  height: 1rem;
  margin-top: 0.135rem;
  margin-right: 0.125rem;
  margin-left: 0.125rem;
  line-height: 1.25rem;
  box-shadow: none;
  box-sizing: content-box;

  &:focus {
    box-shadow: none;
    border: none;
    outline: 1px dotted;
    outline: auto -webkit-focus-ring-color;
  }
`;

const checkbox = baseRadioCheckbox.extend`
  -webkit-appearance: checkbox;
`;

export {
  a as CalciteA,
  h1 as CalciteH1,
  h4 as CalciteH4,
  p as CalciteP,
  figure as CalciteFigure,
  select as CalciteSelect,
  input as CalciteInput,
  textarea as CalciteTextarea,
  fieldset as CalciteFieldset,
  baseRadioCheckbox
};
