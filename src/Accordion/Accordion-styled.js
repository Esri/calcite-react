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
import { transition } from '../utils/helpers';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { StyledSideNav, StyledSideNavTitle } from '../SideNav/SideNav-styled';

// Icons
import ChevronRightIcon from 'calcite-ui-icons-react/ChevronRightIcon';

// Third party libraries

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

  ${StyledAccordionSection}:first-child & {
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-top-right-radius: ${props => props.theme.borderRadius};
  }

  ${StyledAccordionSection}:last-child & {
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
  }

  &:hover,
  &:focus {
    transition: all, ${transition()};
    background-color: ${props => props.theme.palette.lightestGray};
    outline: none;
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

  ${props =>
    props.active &&
    css`
      display: block;
    `};
`;
StyledAccordionContent.defaultProps = { theme };

const StyledChevronIcon = styled(ChevronRightIcon)`
  width: 20;
  height: 20;
  transition: transform ${transition()};

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
`;
StyledChevronIcon.defaultProps = { theme };

export {
  StyledAccordion,
  StyledAccordionTitle,
  StyledAccordionSection,
  StyledAccordionContent,
  StyledChevronIcon
};
