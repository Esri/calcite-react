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

// Calcite theme
import { CalciteTheme as theme } from '../CalciteThemeProvider';

const StyledAvatar = styled.div`
  width: ${props => props.aSize}px;
  height: ${props => props.aSize}px;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.palette.blue};
  color: ${props => props.theme.palette.white};
  font-size: 1.25rem;
  flex-shrink: 0;
  align-items: center;
  user-select: none;
  border-radius: 50%;
  justify-content: center;

  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `};
`;
StyledAvatar.defaultProps = { theme };

const StyledAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
`;
StyledAvatarImage.defaultProps = { theme };

const StyledAvatarSvg = {
  fill: 'currentColor',
  display: 'inline-block',
  fontSize: '24px',
  transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  userSelect: 'none',
  flexShrink: '0'
};

const StyledAvatarText = styled.span`
  font-weight: 300;
  font-family: ${props => props.theme.type.avenirFamily};
`;
StyledAvatarText.defaultProps = { theme };

export { StyledAvatar, StyledAvatarImage, StyledAvatarSvg, StyledAvatarText };
