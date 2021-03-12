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
import { unitCalc, fontSize } from '../utils/helpers';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { CalciteP } from '../Elements';
import Avatar from '../Avatar';

const StyledAccountTile = styled.div`
  max-width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: ${props => unitCalc(props.theme.baseline, 1.5, '/')};
  transition: ${props => props.theme.transition};
  background-color: ${props =>
    props.open ? props.theme.palette.offWhite : props.theme.palette.white};

  ${props => props.clickable &&
    css`
      &:hover {
        background-color: ${props.theme.palette.offWhite};
        cursor: pointer;
      }
    `};
`;
StyledAccountTile.defaultProps = { theme };

const StyledContentWrapper = styled.div`
  max-width: 100%;
  display: flex;
  margin-right: ${props => props.theme.baseline};
  white-space: nowrap;
  overflow: hidden;
`;

const StyledAvatarContainer = styled.div`
  margin-right: ${props => props.theme.baseline};
`;
StyledAvatarContainer.defaultProps = { theme };

const StyledOrgAvatar = styled(Avatar)`
  position: absolute;
  transform: translate(120%, -60px);
  border: 2px solid;
  border-color: ${props => props.theme.palette.white};
`;
StyledOrgAvatar.defaultProps = { theme };

const StyledP = styled(CalciteP)`
  font-weight: ${props => (props.demi ? '500' : '300')};
  font-size: ${props => (props.small ? '0.75rem' : '1rem')};
  margin-bottom: -4px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledIconWrapper = styled.span`
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTextWrapper = styled.span`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export {
  StyledAccountTile,
  StyledContentWrapper,
  StyledAvatarContainer,
  StyledOrgAvatar,
  StyledIconWrapper,
  StyledTextWrapper,
  StyledP
};
