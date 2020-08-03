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

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { CalciteP } from '../Elements';

const StyledAccountTile = styled.div`
  max-width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  transition: 0.2s;
  background-color: ${props =>
    props.open ? props.theme.palette.offWhite : props.theme.palette.white};
  &:hover {
    background-color: ${props => props.theme.palette.offWhite};
    cursor: pointer;
  }
`;
StyledAccountTile.defaultProps = { theme };

const StyledContentWrapper = styled.div`
  max-width: 100%;
  width: auto;
  display: flex;
  margin-right: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledAvatarContainer = styled.div`
  margin-right: 1.5rem;
  & > :nth-child(2) {
    position: absolute;
    transform: translate(120%, -60px);
    border: 2px solid;
    border-color: ${props => props.theme.palette.white};
  }
`;
StyledAvatarContainer.defaultProps = { theme };

const StyledP = styled(CalciteP)`
  font-weight: ${props => (props.demi ? '500' : '300')};
  font-size: ${props => (props.small ? '0.75rem' : '1rem')};
  margin-bottom: -4px;
  max-width: 100%;
  width: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledIconWrapper = styled.span`
  width: 48px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > :nth-child(1) {
    margin-right: 0.5rem;
  }
`;

const StyledTextWrapper = styled.span`
  max-width: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  StyledAccountTile,
  StyledContentWrapper,
  StyledAvatarContainer,
  StyledIconWrapper,
  StyledTextWrapper,
  StyledP
};
