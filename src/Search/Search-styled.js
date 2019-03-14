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
import { CalciteInput } from '../utils/commonElements';
import { fontSize, unitCalc, transition } from '../utils/helpers';

import XCircleIcon from 'calcite-ui-icons-react/XCircleIcon';

const StyledCloseCircleIcon = styled(XCircleIcon)`
  display: none;
  position: absolute;
  right: ${props => unitCalc(props.theme.baseline, 4, '/')};
  bottom: 0.55em;
  color: ${props => props.theme.palette.lighterGray};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.palette.gray};
  }
`;

const StyledSearchIconContainer = styled.span`
  position: absolute;
  bottom: 0.55em;
  left: 0.5em;
  color: ${props => props.theme.palette.darkerGray};
  z-index: 1;
  pointer-events: none;
  line-height: 0;
`;

const StyledShortcutCharacter = styled.div`
  position: absolute;
  right: ${props => unitCalc(props.theme.baseline, 4, '/')};
  bottom: 0.5em;
  border: 1px solid ${props => props.theme.palette.lighterGray};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: ${props => props.theme.palette.lightGray};
  border-radius: 1px;
`;

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
        bottom: 0.7em;
        left: 0.1rem;
      `};
  }

  ${StyledCloseCircleIcon} {
    ${props =>
      props.minimal &&
      css`
        bottom: auto;
      `};
  }

  &:hover {
    ${StyledCloseCircleIcon} {
      display: block;
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

const StyledSearchInputWrapper = styled.div`
  position: relative;
  flex: 1 0 50px;
`;

const StyledSearch = styled(CalciteInput)`
  padding-right: ${props => props.theme.baseline};
  background: transparent;

  ${props =>
    props.searchIcon &&
    css`
      padding-left: ${props => unitCalc(props.theme.baseline, 1.2, '*')};
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
  StyledCloseCircleIcon,
  StyledSearchIconContainer,
  ManagerStyle,
  PopperStyle
};
