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
import { fontSize, unitCalc } from '../utils/helpers';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import Button from '../Button';

// Icons

// Third party libraries

const StyledArcgisAccountControl = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.palette.darkestGray};
  cursor: pointer;
  height: 62px;
  padding: ${props => unitCalc(props.theme.baseline, 2, '/')}
    ${props => props.theme.baseline}
    ${props => unitCalc(props.theme.baseline, 2, '/')}
    ${props => unitCalc(props.theme.baseline, 1.5, '/')};
  box-sizing: border-box;
  border-left: 1px solid ${props => props.theme.palette.lighterGray};
  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.palette.black};
    box-shadow: inset 0 -3px 0 0 ${props => props.theme.palette.lighterBlue};
  }

  &:active {
    color: ${props => props.theme.palette.black};
    box-shadow: inset 0 -3px 0 0 ${props => props.theme.palette.blue};
  }

  ${props =>
    props.open &&
    css`
      &,
      &:hover {
        color: ${props => props.theme.palette.black};
        box-shadow: inset 0 -3px 0 0 ${props => props.theme.palette.blue};
      }
    `};
`;
StyledArcgisAccountControl.defaultProps = { theme };

const StyledArcgisAccountControlAvatar = styled.div`
  margin-right: ${props => unitCalc(props.theme.baseline, 2, '/')};
`;
StyledArcgisAccountControlAvatar.defaultProps = { theme };

const StyledArcgisAccountControlNames = styled.div`
  flex: 1 0 50px;
  display: flex;
  flex-direction: column;
`;
StyledArcgisAccountControlNames.defaultProps = { theme };
const StyledArcgisAccountControlFriendlyName = styled.span`
  font-weight: 600;
  ${fontSize(-1)};
  line-height: 20px;
`;
StyledArcgisAccountControlFriendlyName.defaultProps = { theme };
const StyledArcgisAccountControlUsername = styled.span`
  font-weight: 300;
  ${fontSize(-2)};
  line-height: 16px;
`;
StyledArcgisAccountControlUsername.defaultProps = { theme };

const StyledArcgisAccountMenu = styled.div`
  background: ${props => props.theme.palette.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
`;
StyledArcgisAccountMenu.defaultProps = { theme };

const StyledArcgisAccountContent = styled.div`
  display: flex;
  min-height: 210px;
  padding-top: ${props => unitCalc(props.theme.baseline, 2, '*')};
`;
StyledArcgisAccountContent.defaultProps = { theme };
const StyledArcgisAccountContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 50px;
`;
StyledArcgisAccountContentInfo.defaultProps = { theme };
const StyledArcgisAccountContentName = styled.span`
  ${fontSize(1)};
  font-weight: 600;
  display: inline-block;
  margin-bottom: ${props => unitCalc(props.theme.baseline, 2, '/')};
`;
StyledArcgisAccountContentName.defaultProps = { theme };
const StyledArcgisAccountContentId = styled.span`
  ${fontSize(-2)};
  font-weight: 300;
  line-height: 20px;
`;
StyledArcgisAccountContentId.defaultProps = { theme };
const StyledArcgisAccountContentGroup = styled.span`
  ${fontSize(-2)};
  font-weight: 300;
  line-height: 20px;
  margin-bottom: ${props => unitCalc(props.theme.baseline, 1.5, '*')};
  text-align: center;
  padding: 0 ${props => unitCalc(props.theme.baseline, 4, '/')};
`;
StyledArcgisAccountContentGroup.defaultProps = { theme };

const StyledArcgisAccountContentMenu = styled.div`
  flex: 1 0 30px;
  padding-left: ${props => unitCalc(props.theme.baseline, 2, '/')};
  padding-right: ${props => props.theme.baseline};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
StyledArcgisAccountContentMenu.defaultProps = { theme };

const StyledArcgisAccountSignInMenu = styled.div`
  display: flex;
`;
StyledArcgisAccountSignInMenu.defaultProps = { theme };

const StyledArcgisAccountMenuItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.palette.blue};
  display: block;
  ${fontSize(0)};
  line-height: 20px;
  font-weight: 300;
  padding: 5px 0;
  position: relative;

  &::after {
    right: -8px;
    opacity: 0;
    position: absolute;
    width: 12px;
    height: 12px;
    transition: opacity 0.25s, transform 0.25s;
    background-color: ${props => props.theme.palette.white};

    content: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='%230079c1'%3E%3Cpath d='M8 14.3L13.3 9H0V8h13.3L8 2.7V1.3l7.2 7.2L8 15.7v-1.4z'/%3E%3C/svg%3E");
    top: calc(50% - 20px / 2);
  }

  &:hover {
    color: ${props => props.theme.palette.darkBlue};

    &::after {
      opacity: 1;
      transform: translateX(10px);
    }
  }
`;
StyledArcgisAccountMenuItem.defaultProps = { theme };

const StyledSwitchAccountButton = styled(Button)`
  flex: 1 0 50px;
  border-radius: 0 0 0 ${props => props.theme.borderRadius};
`;
StyledSwitchAccountButton.defaultProps = { theme };

const StyledSignOutButton = styled(Button)`
  flex: 1 0 50px;
  margin-left: 0;
  border-radius: 0 0 ${props => props.theme.borderRadius} 0;
`;
StyledSignOutButton.defaultProps = { theme };

export {
  StyledArcgisAccountControl,
  StyledArcgisAccountControlAvatar,
  StyledArcgisAccountControlNames,
  StyledArcgisAccountControlFriendlyName,
  StyledArcgisAccountControlUsername,
  StyledArcgisAccountMenu,
  StyledArcgisAccountContent,
  StyledArcgisAccountContentInfo,
  StyledArcgisAccountContentName,
  StyledArcgisAccountContentId,
  StyledArcgisAccountContentGroup,
  StyledArcgisAccountContentMenu,
  StyledArcgisAccountSignInMenu,
  StyledArcgisAccountMenuItem,
  StyledSwitchAccountButton,
  StyledSignOutButton
};
