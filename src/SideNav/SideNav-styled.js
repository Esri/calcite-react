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
import { CalciteH4, CalciteA } from '../Elements';
import { unitCalc, fontSize } from '../utils/helpers';
import { avenirRegular } from '../utils/type';

const StyledSideNav = styled.aside`
  box-sizing: border-box;
  padding: 0;
  border: 1px solid ${props => props.theme.palette.lightestGray};
  border-top: none;
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.palette.white};
  border-radius: ${props => props.theme.borderRadius};
`;

const StyledSideNavTitle = styled(CalciteH4)`
  margin: 0;
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
  ${avenirRegular()};
  ${fontSize(-1)};
  background-color: ${props => props.theme.palette.offWhite};
  border-top: 1px solid ${props => props.theme.palette.lightestGray};
`;

const StyledSideNavLink = styled(CalciteA)`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
  ${fontSize(-2)};
  color: ${props => props.theme.palette.darkestGray};
  background-color: ${props => props.theme.palette.white};
  border-top: 1px solid ${props => props.theme.palette.lightestGray};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.palette.offWhite};
    text-decoration: none;
    color: ${props => props.theme.palette.offBlack};
  }

  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `};

  ${props =>
    props.active &&
    css`
      text-indent: -3px;
      border-left: 3px solid ${props => props.theme.palette.blue};
    `};
`;

export { StyledSideNav, StyledSideNavTitle, StyledSideNavLink };
