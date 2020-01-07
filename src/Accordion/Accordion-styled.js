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
import { transition, fontSize, unitCalc } from '../utils/helpers';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { StyledSideNav, StyledSideNavTitle } from '../SideNav/SideNav-styled';

// Icons
import ChevronRightIcon from 'calcite-ui-icons-react/ChevronRightIcon';

// Third party libraries

const StyledChevronIcon = styled(ChevronRightIcon)`
  width: 16px;
  height: 16px;
  transition: transform ${transition()};
  margin-right: ${props => unitCalc(props.theme.baseline, 2, '/')};

  html[dir='rtl'] & {
    transform: rotate(180deg);
  }

  ${props =>
    props.active === 'true' &&
    css`
      &,
      html[dir='rtl'] & {
        transform: rotate(90deg);
      }
    `};

  ${props =>
    props.iconPosition === 'end' &&
    css`
      margin-right: initial;
      transform: rotate(180deg);

      html[dir='rtl'] & {
        transform: rotate(0deg);
      }

      ${props =>
        props.active === 'true' &&
        css`
          &,
          html[dir='rtl'] & {
            transform: rotate(90deg);
          }
        `};
    `};
`;
StyledChevronIcon.defaultProps = { theme };

const StyledAccordion = styled(StyledSideNav)`
  border-radius: ${props => props.theme.borderRadius};
`;
StyledAccordion.defaultProps = { theme };

const StyledAccordionSection = styled.div``;
StyledAccordionSection.defaultProps = { theme };

const StyledAccordionTitle = styled(StyledSideNavTitle)`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${fontSize(-2)};
  background-color: ${props => props.theme.palette.white};
  color: ${props => props.theme.palette.darkerGray};
  border-bottom: none;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.white};
    color: ${props => props.theme.palette.black};
    outline: none;

    ${StyledChevronIcon} {
      color: ${props => props.theme.palette.blue};

      ${props =>
        props.active &&
        css`
          color: ${props => props.theme.palette.black};
        `};
    }
  }

  ${props =>
    props.active &&
    css`
      border-bottom: 1px solid ${props => props.theme.palette.lightestGray};
      color: ${props => props.theme.palette.black};
      font-weight: 600;
    `};

  ${props =>
    props.iconPosition === 'end' &&
    css`
      justify-content: space-between;
    `};

  ${StyledAccordionSection}:first-child & {
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-top-right-radius: ${props => props.theme.borderRadius};
  }

  ${StyledAccordionSection}:last-child & {
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `};
`;
StyledAccordionTitle.defaultProps = { theme };

const StyledAccordionContent = styled.div`
  display: none;
  padding: ${props => unitCalc(props.theme.baseline, 2, '/')};

  ${props =>
    props.active &&
    css`
      display: block;
    `};
`;
StyledAccordionContent.defaultProps = { theme };

export {
  StyledAccordion,
  StyledAccordionTitle,
  StyledAccordionSection,
  StyledAccordionContent,
  StyledChevronIcon
};
