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
import {
  StyledCard,
  StyledCardTitle,
  StyledCardContent,
  StyledCardImageWrap
} from '../Card/Card-styled';

// Icons
import UserIcon from 'calcite-ui-icons-react/UserIcon';
import CalendarIcon from 'calcite-ui-icons-react/CalendarIcon';

// Third party libraries

const StyledItemCard = styled(StyledCard)`
  border-radius: ${props => props.theme.borderRadius};

  ${props =>
    props.vertical &&
    css`
      max-width: calc(33.3% - 1.5rem);
    `};
`;
StyledItemCard.defaultProps = { theme };

const StyledItemCardContent = styled(StyledCardContent)`
  white-space: normal;
  flex: 3 1 75px;
  padding: 0;
  box-sizing: border-box;
  .div {
    padding: ${props => unitCalc(props.theme.baseline, 3, '/')};
  }
`;
StyledItemCardContent.defaultProps = { theme };

// Set background image with attributes so that styled components doesn't
// make a new class for every instance of this element that has a new image
const StyledItemCardImageWrap = styled(StyledCardImageWrap).attrs(props => ({
  style: {
    background: `url(${props.imageSource}) no-repeat center center,
  url('data:image/png;base64,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')
    center center no-repeat`,
    backgroundSize: 'cover'
  }
}))`
  display: flex;
  flex: 1 1 25px;
  height: auto;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${props => props.theme.palette.lightestGray};

  ${props =>
    props.vertical &&
    css`
      min-height: 160px;
      height: 160px;
    `};

  html[dir='rtl'] & {
    border-right: none;
    border-left: 1px solid ${props => props.theme.palette.lightestGray};
  }
`;
StyledItemCardImageWrap.defaultProps = { theme };

const StyledCardItemTitle = styled(StyledCardTitle)`
  ${fontSize(1)};
  margin-top: ${props => unitCalc(props.theme.baseline, 5, '/')};
  margin-left: ${props => unitCalc(props.theme.baseline, 3, '/')};
  margin-right: ${props => unitCalc(props.theme.baseline, 3, '/')};
  margin-bottom: ${props => unitCalc(props.theme.baseline, 3, '/')};
`;
StyledCardItemTitle.defaultProps = { theme };

const StyledCardItemMetrics = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.palette.lightestGray};
  padding-top: ${props => unitCalc(props.theme.baseline, 5, '/')};
  padding-left: ${props => unitCalc(props.theme.baseline, 3, '/')};
  padding-right: ${props => unitCalc(props.theme.baseline, 3, '/')};

  &:last-child {
    border-bottom: none;
  }
`;
StyledCardItemMetrics.defaultProps = { theme };

const StyledCardItemText = styled.p`
  font-weight: 300;
  font-style: normal;
  ${fontSize(-2)};
  margin-top: ${props => unitCalc(props.theme.baseline, 3, '/')};
  margin-left: ${props => unitCalc(props.theme.baseline, 3, '/')};
  margin-right: ${props => unitCalc(props.theme.baseline, 3, '/')};
  margin-bottom: ${props => unitCalc(props.theme.baseline, 3, '/')};
`;
StyledCardItemText.defaultProps = { theme };

const StyledCardItemIconLabelText = styled(StyledCardItemText)`
  display: flex;
  align-items: center;
  margin: 0;
  color: ${props => props.theme.palette.gray};
  &:last-child {
    margin-left: ${props => props.theme.baseline};

    html[dir='rtl'] & {
      margin-left: initial;
      margin-right: ${props => props.theme.baseline};
    }
  }

  .mdi-icon {
    margin-right: ${props => unitCalc(props.theme.baseline, 5, '/')};
    fill: currentColor;
    width: 1.4em;
    height: 1.4em;

    html[dir='rtl'] & {
      margin-right: initial;
      margin-left: ${props => unitCalc(props.theme.baseline, 5, '/')};
    }
  }
`;
StyledCardItemIconLabelText.defaultProps = { theme };

const StyledUserIcon = styled(UserIcon)`
  margin-right: ${props => unitCalc(props.theme.baseline, 6, '/')};

  html[dir='rtl'] & {
    margin-right: 0;
    margin-left: ${props => unitCalc(props.theme.baseline, 6, '/')};
  }
`;
StyledUserIcon.defaultProps = { theme };

const StyledCalendarIcon = styled(CalendarIcon)`
  margin-right: ${props => unitCalc(props.theme.baseline, 4, '/')};

  html[dir='rtl'] & {
    margin-right: 0;
    margin-left: ${props => unitCalc(props.theme.baseline, 4, '/')};
  }
`;
StyledCalendarIcon.defaultProps = { theme };

const StyledActionsContainer = styled.div`
  border-top: 1px solid ${props => props.theme.palette.lightestGray};
  padding: 7px;
  justify-content: flex-end;
  display: flex;
`;
StyledActionsContainer.defaultProps = { theme };

export {
  StyledItemCard,
  StyledItemCardContent,
  StyledItemCardImageWrap,
  StyledCardItemTitle,
  StyledCardItemMetrics,
  StyledCardItemText,
  StyledCardItemIconLabelText,
  StyledUserIcon,
  StyledCalendarIcon,
  StyledActionsContainer
};
