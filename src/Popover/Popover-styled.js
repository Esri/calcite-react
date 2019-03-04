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

const StyledTargetWrapper = styled.div`
  display: inline-block;
`;

const StyledPopover = styled.div`
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.05);
  opacity: 0;
  transition: opacity ${props => props.transitionDuration}ms
    cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2000;
  pointer-events: none;

  &[data-x-out-of-boundaries] {
    display: none;
  }

  ${props =>
    props.transitionState === 'entering' &&
    css`
      opacity: 0;
      pointer-events: auto;
    `};

  ${props =>
    props.transitionState === 'entered' &&
    css`
      opacity: 1;
      pointer-events: auto;
    `};
`;

export { StyledTargetWrapper, StyledPopover };
