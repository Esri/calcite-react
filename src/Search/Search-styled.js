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
import { fontSize, unitCalc, transition } from '../utils/helpers';
import { CalciteInput } from '../utils/commonElements';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components

// Icons

// Third party libraries

const StyledClearIconContainer = styled.div`
  display: none;
  position: absolute;
  right: ${props => unitCalc(props.theme.baseline, 4, '/')};
  bottom: auto;
  margin-top: 2px;
  opacity: 0.5;
  cursor: pointer;

  html[dir='rtl'] & {
    right: auto;
    left: ${props => unitCalc(props.theme.baseline, 4, '/')};
  }

  &:hover {
    opacity: 0.8;
  }
`;
StyledClearIconContainer.defaultProps = { theme };

const StyledSearchIconContainer = styled.span`
  position: absolute;
  bottom: auto;
  left: 0.5em;
  margin-top: 2px;
  color: ${props => props.theme.palette.darkerGray};
  z-index: 1;
  pointer-events: none;
  line-height: 0;

  html[dir='rtl'] & {
    left: auto;
    right: 0.5em;
  }
`;
StyledSearchIconContainer.defaultProps = { theme };

const StyledShortcutCharacter = styled.div`
  position: absolute;
  right: ${props => unitCalc(props.theme.baseline, 4, '/')};
  bottom: auto;
  margin-top: 2px;
  border: 1px solid ${props => props.theme.palette.lighterGray};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: ${props => props.theme.palette.lightGray};
  border-radius: 1px;

  html[dir='rtl'] & {
    right: auto;
    left: ${props => unitCalc(props.theme.baseline, 4, '/')};
  }
`;
StyledShortcutCharacter.defaultProps = { theme };

const StyledSearchContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};

  ${StyledSearchIconContainer} {
    ${props =>
      props.minimal &&
      css`
        bottom: auto;
        left: 0.1rem;
        margin-top: 0;

        html[dir='rtl'] & {
          left: auto;
          right: 0.1rem;
        }
      `};
  }

  ${StyledClearIconContainer} {
    ${props =>
      props.minimal &&
      css`
        bottom: auto;
        margin-top: 0;
      `};
  }

  &:hover {
    ${StyledClearIconContainer} {
      display: inherit;
    }
  }

  &:active,
  &:focus,
  &:focus-within {
    ${StyledShortcutCharacter} {
      display: none;
    }
  }
`;
StyledSearchContainer.defaultProps = { theme };

const StyledSearchInputWrapper = styled.div`
  position: relative;
  flex: 1 0 50px;
`;
StyledSearchInputWrapper.defaultProps = { theme };

const StyledSearch = styled(CalciteInput)`
  padding-right: ${props => props.theme.baseline};
  background: transparent;

  &::-ms-clear {
    display: none;
  }

  html[dir='rtl'] & {
    padding-right: ${props => unitCalc(props.theme.baseline, 5, '/')};
    padding-left: ${props => props.theme.baseline};
  }

  ${props =>
    props.searchIcon &&
    css`
      padding-left: ${props => unitCalc(props.theme.baseline, 1.2, '*')};

      html[dir='rtl'] & {
        padding-left: ${props => props.theme.baseline};
        padding-right: ${props => unitCalc(props.theme.baseline, 1.2, '*')};
      }
    `};

  ${props =>
    props.minimal &&
    css`
      height: 2.35rem;
      border-bottom: 2px solid ${props => props.theme.palette.lighterGray};
      ${fontSize(0)};

      &:focus {
        box-shadow: none;
        border-bottom-color: ${props => props.theme.palette.blue};
      }
    `};

  ${props =>
    props.selectableListFilter &&
    css`
      margin: 0;
      width: 100%;
      border-color: ${props => props.theme.palette.lighterGray};
      box-shadow: none;

      &:focus {
        background-color: ${props => props.theme.palette.white};
      }
    `};
`;
StyledSearch.defaultProps = { theme };

const ManagerStyle = {
  width: '100%'
};

const PopperStyle = {
  transition: `opacity ${transition()}`,
  zIndex: 2000
};

export {
  StyledSearchContainer,
  StyledSearchInputWrapper,
  StyledSearch,
  StyledShortcutCharacter,
  StyledClearIconContainer,
  StyledSearchIconContainer,
  ManagerStyle,
  PopperStyle
};
