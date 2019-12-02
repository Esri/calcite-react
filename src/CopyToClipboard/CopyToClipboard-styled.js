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
import styled, { keyframes } from 'styled-components';

// Utils, common elements
import { transition } from '../utils/helpers';
import { CalciteInput } from '../utils/commonElements';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import Button from '../Button';

// Icons

// Third party libraries

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledCopyToClipboard = styled.div`
  display: flex;

  svg {
    animation: ${FadeIn} ${props => transition(props.theme)};
  }
`;
StyledCopyToClipboard.defaultProps = { theme };

const StyledCopyToClipboardInput = styled(CalciteInput)`
  flex: 1 0 50px;
  width: auto;
  margin: 0;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  html[dir='rtl'] & {
    border-right: 1px solid ${props => props.theme.palette.lightGray};
    border-top-right-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};

    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
StyledCopyToClipboardInput.defaultProps = { theme };

const StyledCopyButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  html[dir='rtl'] & {
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-bottom-left-radius: ${props => props.theme.borderRadius};

    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  svg {
    margin: 0 !important;
  }
`;
StyledCopyButton.defaultProps = { theme };

export { StyledCopyToClipboard, StyledCopyToClipboardInput, StyledCopyButton };
