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
import { CalciteSelect } from '../utils/commonElements';
import { transition } from '../utils/helpers';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import Menu from '../Menu';
import { StyledMenuItem } from '../Menu/Menu-styled';

// Icons

// Third party libraries

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
  text-align: initial;
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

  ${StyledMenuItem} {
    -moz-padding-inline-end: ${props => props.theme.baseline};
    -moz-padding-end: ${props => props.theme.baseline};
  }

  /* Handles iframe styling from react-resize-aware */
  iframe {
    border: none;
  }
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
