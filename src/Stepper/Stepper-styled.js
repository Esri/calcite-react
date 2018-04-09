import styled, { css } from 'styled-components';
import { CalciteH6, CalciteP } from '../Elements';
import { fontSize, unitCalc } from '../utils/helpers';
import CalciteTheme from '../theme/CalciteTheme';

const StyledStepper = styled.div`
  display: flex;

  ${props =>
    props.vertical &&
    css`
      flex-direction: column;
    `};
`;

const StyledStep = styled.div`
  display: flex;
  flex: 1 0 34px;
  margin-right: ${props => props.theme.baseline};
  overflow: hidden;

  &:last-of-type {
    margin-right: 0;
  }

  ${props =>
    props.vertical &&
    css`
      flex: unset;
      align-items: flex-start;
      margin-right: 0;
      margin-bottom: ${props => unitCalc(props.theme.baseline, 2, '/')};
      padding-bottom: ${props => props.theme.baseline};

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

const StyledStepTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${props => unitCalc(props.theme.baseline, 3, '/')};
  flex: 1 0 34px;
  align-items: flex-start;
`;

const StyledStepTitle = CalciteH6.extend`
  margin: 0;
  line-height: 32px;
  position: relative;
  color: ${props => props.theme.palette.darkGray};
  padding-right: ${props => props.theme.baseline};

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

const StyledStepDescription = CalciteP.extend`
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

        ${props =>
          props.small &&
          css`
            left: 12px;
          `};

        ${props =>
          props.complete &&
          css`
            background: ${props => props.theme.palette.blue};
          `};
      }

      *:last-of-type > &::after {
        content: none;
      }
    `};
`;

const StepAvatarStyles = {
  default: {
    width: 30,
    height: 30,
    color: CalciteTheme.palette.lightGray,
    backgroundColor: 'transparent',
    fontWeight: 300,
    border: `1px solid ${CalciteTheme.palette.lighterGray}`
  },
  active: {
    backgroundColor: CalciteTheme.palette.blue,
    color: CalciteTheme.palette.white,
    fontWeight: 400,
    borderColor: CalciteTheme.palette.blue
  },
  complete: {
    color: CalciteTheme.palette.blue,
    backgroundColor: 'transparent',
    borderColor: CalciteTheme.palette.blue
  },
  error: {
    color: CalciteTheme.palette.red,
    backgroundColor: 'transparent',
    borderColor: CalciteTheme.palette.red
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
    fill: CalciteTheme.palette.lightGray
  },
  active: {
    fill: CalciteTheme.palette.blue
  },
  complete: {
    fill: CalciteTheme.palette.blue
  },
  error: {
    fill: CalciteTheme.palette.red
  },
  small: {
    width: 22,
    height: 22,
    fontSize: '16px'
  }
};

const StepCompleteIconStyles = {
  fill: CalciteTheme.palette.blue
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
