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
import { fontSize } from '../utils/helpers';
import { linkColor } from '../utils/color';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { CalciteA } from '../Elements';

// Icons

// Third party libraries

const StyledBreadcrumbs = styled.nav`
  ${fontSize(-2)};
  color: ${props => props.theme.palette.darkerGray};
  display: flex;
`;
StyledBreadcrumbs.defaultProps = { theme };

const StyledCrumb = styled(CalciteA)`
  color: ${props => props.theme.palette.darkerGray};

  &::before {
    content: '${props => props.dividerCharacter}';
    color: ${props => props.theme.palette.darkerGray};
    font-weight: 400;
    display: inline-block;
    padding: 0 0.5rem;
  }

  &:first-child::before {
    display: none;
  }

  &:last-child {
    font-weight: 600;
  }

  ${props =>
    props.white &&
    css`
      color: ${props.theme.palette.white};
      ${linkColor(props.theme.palette.white, props.theme.palette.lightestGray)};

      &::before {
        color: ${props.theme.palette.white};
      }
    `};
`;
StyledCrumb.defaultProps = { theme };

const StyledSpanCrumb = styled.span`
  color: ${props => props.theme.palette.darkerGray};

  &::before {
    content: '${props => props.dividerCharacter}';
    color: ${props => props.theme.palette.darkerGray};
    font-weight: 400;
    display: inline-block;
    padding: 0 0.5rem;
  }

  &:first-child::before {
    display: none;
  }

  &:last-child {
    font-weight: 600;
  }

  ${props =>
    props.white &&
    css`
      color: ${props.theme.palette.white};

      &::before {
        color: ${props.theme.palette.white};
      }
    `};
`;
StyledSpanCrumb.defaultProps = { theme };

export { StyledBreadcrumbs, StyledCrumb, StyledSpanCrumb };
