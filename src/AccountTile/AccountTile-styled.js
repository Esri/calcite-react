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
  position: relative;
  max-width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 60px calc(100% - 156px) 60px;
  grid-gap: 1rem;
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

const StyledAvatarContainer = styled.div`
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: -4px;
`;

const StyledIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > :nth-child(1) {
    margin-right: 0.5rem;
  }
`;

const StyledTextWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0.5rem;
`;

export {
  StyledAccountTile,
  StyledAvatarContainer,
  StyledIconWrapper,
  StyledTextWrapper,
  StyledP
};
