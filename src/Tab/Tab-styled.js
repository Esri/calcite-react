import styled, { css } from 'styled-components';
import { fontSize, unitCalc, transition } from '../utils/helpers';
import { CalciteA } from '../Elements';

const StyledTab = styled.div`
  padding: 0;
  flex: 1 0 auto;

  ${props =>
    props.right &&
    css`
      float: right;
    `};
`;

const StyledTabTitle = styled(CalciteA)`
  box-sizing: border-box;
  ${fontSize(-2)};
  transition: background ${transition()};
  padding: ${props => unitCalc(props.theme.baseline, 4, '/')}
    ${props => unitCalc(props.theme.baseline, 2, '/')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${props => props.theme.palette.offWhite};
  border: 1px solid ${props => props.theme.palette.lighterGray};
  margin-right: -1px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.white};
    text-decoration: none;
    background-image: linear-gradient(
      to top,
      transparent 94%,
      ${props => props.theme.palette.blue} 96%,
      ${props => props.theme.palette.blue} 100%
    );
  }

  ${props =>
    props.active &&
    css`
      border-bottom: 1px solid ${props => props.theme.palette.white};
      background-color: ${props => props.theme.palette.white};

      &:hover {
        background-color: ${props.theme.palette.white};
      }
    `};

    ${props =>
      props.gray &&
      css`
        background-color: ${props => props.theme.palette.white};

        ${props =>
          props.active &&
          css`
            background-color: ${props => props.theme.palette.offWhite};
            border-bottom: 1px solid ${props => props.theme.palette.offWhite};
          `};
      `};

    ${props =>
      props.transparent &&
      css`
        background-color: transparent;
        border: 1px solid transparent;
        border-bottom: 1px solid ${props => props.theme.palette.lighterGray};
        margin-right: 0;

        &:hover {
          border-bottom: 1px solid ${props => props.theme.palette.lighterGray};
        }

        ${props =>
          props.active &&
          css`
            transition: background ${transition()};
            background-color: transparent;
            border: 1px solid ${props => props.theme.palette.lighterGray};
            border-bottom: 1px solid ${props => props.theme.palette.white};

            &:hover {
              border-bottom: 1px solid ${props => props.theme.palette.white};
            }
          `};
      `};

      ${props =>
        props.translucent &&
        css`
          background-color: ${props => props.theme.palette.transparentWhite};
          background-image: none;
          border: none;
          border-top: 2px solid ${props => props.theme.palette.transparentWhite};
          color: ${props => props.theme.palette.offBlack};
          margin-right: 2px;
          margin-bottom: 3px;
          transition: none;

          &:hover,
          &:focus {
            background-color: ${props => props.theme.palette.opaqueWhite};
            border-top-color: ${props => props.theme.palette.blue};
            background-image: none;
          }

          ${props =>
            props.active &&
            css`
              background-image: none;
              background-color: ${props => props.theme.palette.opaqueWhite};
              border-top-color: ${props => props.theme.palette.blue};
              border-bottom: 2px solid
                ${props => props.theme.palette.opaqueWhite};
              margin-bottom: 0;
            `};
        `};

        ${props =>
          props.dark &&
          css`
            margin-right: 2px;
            margin-bottom: 3px;
            border: none;
            background-color: ${props => props.theme.palette.transparentBlack};
            color: ${props => props.theme.palette.white};
            border-top: 2px solid
              ${props => props.theme.palette.transparentBlack};

            &:hover,
            &:focus {
              color: ${props => props.theme.palette.white};
              background-color: ${props => props.theme.palette.opaqueBlack};
              border-top-color: ${props => props.theme.palette.white};
              background-image: none;
            }

            ${props =>
              props.active &&
              css`
                margin-bottom: 1px;
                background-color: ${props => props.theme.palette.opaqueBlack};
                border-top-color: ${props => props.theme.palette.white};
                border-bottom: 2px solid transparent;
              `};
          `};
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `};
`;

const StyledTabNav = styled.nav`
  display: flex;

  &::after {
    display: table;
    content: '';
    clear: both;
  }
`;

const StyledTabContents = styled.div`
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.palette.lighterGray};
  margin-top: -1px;

  ${props =>
    props.transparent &&
    css`
      border-bottom: none;
      border-left: none;
      border-right: none;
    `};

  ${props =>
    props.translucent &&
    css`
      border: none;
    `};

  ${props =>
    props.dark &&
    css`
      border: none;
    `};
`;

const StyledTabSection = styled.article`
  box-sizing: border-box;
  background-color: ${props => props.theme.palette.white};
  padding: ${props => unitCalc(props.theme.baseline, 2, '/')};

  pre {
    margin: 0;
  }

  ${props =>
    props.gray &&
    css`
      background-color: ${props => props.theme.palette.offWhite};

      pre code {
        padding: 0;
        border: none;
        background-color: transparent;
      }
    `};

  ${props =>
    props.transparent &&
    css`
      background-color: transparent;
      padding-left: 0;
      padding-right: 0;
    `};

  ${props =>
    props.translucent &&
    css`
      background-color: ${props => props.theme.palette.opaqueWhite};
    `};

  ${props =>
    props.dark &&
    css`
      background-color: ${props => props.theme.palette.opaqueBlack};
      color: ${props => props.theme.palette.white};
    `};
`;

export {
  StyledTab,
  StyledTabTitle,
  StyledTabNav,
  StyledTabContents,
  StyledTabSection
};
