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
import { transition } from '../utils/helpers';
import { CalciteSelect } from '../utils/commonElements';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import Menu from '../Menu';

// Icons

// Third party libraries

const StyledMultiSelectWrapper = styled.div`
  position: relative;
`;
StyledMultiSelectWrapper.defaultProps = { theme };

const StyledMultiSelectButton = styled(CalciteSelect)`
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
`;
StyledMultiSelectButton.defaultProps = { theme };

const StyledMultiSelectMenu = styled(Menu)`
  max-height: 300px;
  border-bottom: none;
  box-shadow: ${props => props.theme.boxShadow},
    0 1px 0 ${props => props.theme.palette.lightestGray};
  transition: opacity ${transition()};
  z-index: 2000;
  display: none;

  ${props =>
    props.isOpen &&
    css`
      display: block;
    `};

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;
StyledMultiSelectMenu.defaultProps = { theme };

export {
  StyledMultiSelectWrapper,
  StyledMultiSelectButton,
  StyledMultiSelectMenu
};
