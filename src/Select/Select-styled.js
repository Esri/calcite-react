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
import { CalciteSelect } from '../utils/commonElements';
import Menu from '../Menu';

// Calcite theme
import { CalciteTheme as theme } from '../CalciteThemeProvider';

import { transition } from '../utils/helpers';

const StyledSelectWrapper = styled.div`
  position: relative;

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;
StyledSelectWrapper.defaultProps = { theme };

const StyledSelectInput = styled(CalciteSelect)`
  cursor: pointer;
  text-overflow: ellipsis;
`;
StyledSelectInput.defaultProps = { theme };

const StyledSelectButton = styled(CalciteSelect)`
  cursor: pointer;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
StyledSelectButton.defaultProps = { theme };

const StyledSelectMenu = styled(Menu)`
  max-height: 300px;
  display: none;
  border-bottom: none;
  box-shadow: ${props => props.theme.boxShadow},
    0 1px 0 ${props => props.theme.palette.lightestGray};
  transition: opacity ${transition()};
  z-index: 2000;

  ${props =>
    props.isOpen &&
    css`
      display: block;
    `};

  ${props =>
    props.fullWidth &&
    css`
      min-width: 100%;
    `};
`;
StyledSelectMenu.defaultProps = { theme };

const PopperManagerStyles = {
  width: '100%'
};

export {
  StyledSelectWrapper,
  StyledSelectInput,
  StyledSelectButton,
  StyledSelectMenu,
  PopperManagerStyles
};
