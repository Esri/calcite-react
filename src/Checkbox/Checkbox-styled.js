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
import styled from 'styled-components';

// Utils, common elements
import { fontSize, unitCalc } from '../utils/helpers';
import { baseRadioCheckbox } from '../utils/commonElements';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components

// Icons

// Third party libraries

const StyledDisplayCheckbox = styled.div`
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.palette.white};
  border: 1px solid ${props => props.theme.palette.gray};
  color: ${props => props.theme.palette.white};
  border-radius: 2px;
  box-sizing: border-box;
  margin-top: 0.135rem;
  margin-bottom: 3px;
  margin-right: ${props => unitCalc(props.theme.baseline, 4, '/')};
  margin-left: 0.125rem;
  cursor: pointer;

  html[dir='rtl'] & {
    margin-right: 0.125rem;
    margin-left: ${props => unitCalc(props.theme.baseline, 4, '/')};
  }

  > * {
    display: none;
  }

  input:hover ~ &,
  input:focus ~ & {
    box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 2px inset,
      rgba(81, 167, 232, 0.5) 0px 0px 5px, rgba(81, 167, 232, 0.5) 0px 0px 5px;
  }

  input:checked ~ & {
    background: ${props => props.theme.palette.blue};
    border-color: ${props => props.theme.palette.blue};

    > * {
      display: inline-block;
    }
  }

  input:disabled ~ & {
    opacity: 0.3;
    background: ${props => props.theme.palette.lightestGray};
  }

  input:disabled:checked ~ & {
    background: ${props => props.theme.palette.blue};
  }
`;

const StyledCheckboxInput = styled(baseRadioCheckbox)`
  position: absolute;
  left: 0;
  opacity: 0;
  -webkit-appearance: checkbox;
  width: 16px;
  height: 16px;
  cursor: pointer;

  html[dir='rtl'] & {
    margin-right: initial;
    margin-left: ${props => unitCalc(props.theme.baseline, 4, '/')};
  }
`;
StyledCheckboxInput.defaultProps = { theme };

const StyledCheckboxLabel = styled.span`
  ${fontSize(-1)};
  color: ${props => props.theme.palette.darkestGray};
  width: auto;
  margin-right: ${props => props.theme.baseline};
  cursor: pointer;

  html[dir='rtl'] & {
    margin-right: initial;
    margin-left: ${props => props.theme.baseline};
  }
`;
StyledCheckboxLabel.defaultProps = { theme };

const StyledCheckboxGroup = styled.label`
  display: flex;
  align-items: center;
  position: relative;
`;
StyledCheckboxGroup.defaultProps = { theme };

export {
  StyledDisplayCheckbox,
  StyledCheckboxInput,
  StyledCheckboxLabel,
  StyledCheckboxGroup
};
