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
import { CalciteH6, CalciteP } from '../Elements';

// Icons

// Third party libraries

const StyledStepper = styled.div`
  display: flex;

  ${props =>
    props.vertical &&
    css`
      flex-direction: column;
    `};
`;
StyledStepper.defaultProps = { theme };

const StyledStep = styled.div`
  display: flex;
  flex: 1 0 34px;
  margin-right: ${props => props.theme.baseline};
  overflow: hidden;

  html[dir='rtl'] & {
    margin-right: 0;
    margin-left: ${props => props.theme.baseline};
  }

  &:last-of-type {
    margin-right: 0;

    html[dir='rtl'] & {
      margin-left: 0;
    }
  }

  ${props =>
    props.vertical &&
    css`
      flex: unset;
      align-items: flex-start;
      margin-right: 0;
      margin-bottom: ${unitCalc(props.theme.baseline, 2, '/')};
      padding-bottom: ${props.theme.baseline};

      ${props =>
        props.small &&
        css`
          margin-bottom: ${unitCalc(props.theme.baseline, 4, '/')};
          padding-bottom: ${unitCalc(props.theme.baseline, 3, '/')};

          ${StyledStepDescription} {
            line-height: 1.25rem;
          }
        `};

      html[dir='rtl'] & {
        margin-left: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
        padding-bottom: 0;
      }
    `};

  ${props =>
    props.selectable &&
    css`
      cursor: pointer;
      transition: opacity 175ms cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        opacity: 0.7;
      }
    `};
`;
StyledStep.defaultProps = { theme };

const StyledStepTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${props => unitCalc(props.theme.baseline, 3, '/')};
  flex: 1 0 34px;
  align-items: flex-start;

  html[dir='rtl'] & {
    margin-left: 0;
    margin-right: ${props => unitCalc(props.theme.baseline, 3, '/')};
  }
`;
StyledStepTextContainer.defaultProps = { theme };

const StyledStepTitle = styled(CalciteH6)`
  margin: 0;
  line-height: 32px;
  position: relative;
  color: ${props => props.theme.palette.darkGray};
  padding-right: ${props => props.theme.baseline};

  html[dir='rtl'] & {
    padding-right: 0;
    padding-left: ${props => props.theme.baseline};
  }

  ${props =>
    props.small &&
    css`
      ${fontSize(-2)};
      line-height: 28px;
    `};

  ${props =>
    props.complete &&
    css`
      color: ${props => props.theme.palette.darkestGray};
    `};

  ${props =>
    props.active &&
    css`
      color: ${props => props.theme.palette.black};
      font-weight: 500;
    `};

  ${props =>
    props.error &&
    css`
      color: ${props => props.theme.palette.red};
    `};

  &::after {
    content: '';
    height: 1px;
    width: 9999px;
    background: ${props => props.theme.palette.lighterGray};
    display: block;
    position: absolute;
    top: 16px;
    left: 100%;

    html[dir='rtl'] & {
      left: auto;
      right: 100%;
    }

    ${props =>
      props.small &&
      css`
        top: 12px;
      `};

    ${props =>
      props.complete &&
      css`
        background: ${props => props.theme.palette.blue};
      `};
  }

  *:last-of-type > * > &::after {
    content: none;
  }

  ${props =>
    props.vertical &&
    css`
      &::after {
        content: none;
      }
    `};
`;
StyledStepTitle.defaultProps = { theme };

const StyledStepDescription = styled(CalciteP)`
  ${fontSize(-2)};
  color: ${props => props.theme.palette.gray};
  font-weight: 300;
  margin: 0;

  ${props =>
    props.small &&
    css`
      ${fontSize(-3)};
    `};

  ${props =>
    props.active &&
    css`
      color: ${props => props.theme.palette.darkerGray};
    `};

  ${props =>
    props.complete &&
    css`
      color: ${props => props.theme.palette.darkGray};
    `};

  ${props =>
    props.error &&
    css`
      color: ${props => props.theme.palette.red};
    `};
`;
StyledStepDescription.defaultProps = { theme };

const StyledStepIcon = styled.div`
  position: relative;

  ${props =>
    props.vertical &&
    css`
      padding-bottom: ${props => unitCalc(props.theme.baseline, 2, '/')};

      &::after {
        content: '';
        width: 1px;
        height: 9999px;
        background: ${props => props.theme.palette.lighterGray};
        display: block;
        position: absolute;
        top: 100%;
        left: 16px;

        html[dir='rtl'] & {
          left: auto;
          right: 16px;
        }

        ${props =>
          props.small &&
          css`
            left: 12px;

            html[dir='rtl'] & {
              left: auto;
              right: 12px;
            }
          `};

        ${props =>
          props.complete &&
          css`
            background: ${props => props.theme.palette.blue};
          `};
      }

      ${props =>
        props.small &&
        css`
          padding-bottom: ${props => unitCalc(props.theme.baseline, 4, '/')};
        `};

      *:last-of-type > &::after {
        content: none;
      }
    `};
`;
StyledStepIcon.defaultProps = { theme };

const StepAvatarStyles = {
  default: {
    width: 30,
    height: 30,
    color: theme.palette.lightGray,
    backgroundColor: 'transparent',
    fontWeight: 300,
    border: `1px solid ${theme.palette.lighterGray}`
  },
  active: {
    backgroundColor: theme.palette.blue,
    color: theme.palette.white,
    fontWeight: 400,
    borderColor: theme.palette.blue
  },
  complete: {
    color: theme.palette.blue,
    backgroundColor: 'transparent',
    borderColor: theme.palette.blue
  },
  error: {
    color: theme.palette.red,
    backgroundColor: 'transparent',
    borderColor: theme.palette.red
  },
  small: {
    width: 22,
    height: 22,
    fontSize: '16px'
  }
};

const StepCustomIconStyles = {
  default: {
    width: 30,
    height: 30,
    fill: theme.palette.lightGray
  },
  active: {
    fill: theme.palette.blue
  },
  complete: {
    fill: theme.palette.blue
  },
  error: {
    fill: theme.palette.red
  },
  small: {
    width: 22,
    height: 22,
    fontSize: '16px'
  }
};

const StepCompleteIconStyles = {
  fill: theme.palette.blue
};

const StepIconStyle = {
  fontSize: 'inherit'
};

export {
  StyledStepper,
  StyledStep,
  StyledStepTextContainer,
  StyledStepTitle,
  StyledStepDescription,
  StyledStepIcon,
  StepAvatarStyles,
  StepCompleteIconStyles,
  StepIconStyle,
  StepCustomIconStyles
};
