import styled, { css } from 'styled-components';
import { fontSize } from '../utils/helpers';

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  ${props => css`
    padding: ${props => parseFloat(props.theme.baseline) / 5 + 'em'} 0.9rem;
  `} width: auto;
  color: ${props => props.theme.palette.white};
  border: 1px solid ${props => props.theme.palette.blue};
  border-radius: 0;
  background-color: ${props => props.theme.palette.blue};
  box-sizing: border-box;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  white-space: nowrap;
  ${fontSize(-1)};
  letter-spacing: 0em;
  font-family: inherit;

  &:hover {
    text-decoration: none;
    background-color: ${props => props.theme.palette.darkBlue};
    color: ${props => props.theme.palette.white};
  }

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.3;
    `};

  ${props =>
    props.transparent &&
    css`
      background: none;
      color: ${props => props.theme.linkColor};
      border: none;

      &:hover {
        color: ${props => props.theme.linkHover};
        background: none;
        text-decoration: underline;
      }
    `};

  ${props =>
    props.clear &&
    css`
      color: ${props => props.theme.palette.blue};
      background: ${props => props.theme.palette.white};
      border-color: ${props => props.theme.palette.blue};

      &:hover {
        color: ${props => props.theme.palette.white};
        background: ${props => props.theme.palette.darkBlue};
        border-color: ${props => props.theme.palette.darkBlue};
      }
    `};

  ${props =>
    props.clearGray &&
    css`
      background: none;
      color: ${props => props.theme.palette.gray};
      border-color: ${props => props.theme.palette.gray};
      &:hover {
        color: ${props => props.theme.palette.white};
        background: ${props => props.theme.palette.darkGray};
      }
    `};

  ${props =>
    props.clearWhite &&
    css`
      background: none;
      color: ${props => props.theme.palette.white};
      border: 1px solid ${props => props.theme.palette.white};
      &:hover {
        color: ${props => props.theme.palette.gray};
        background: ${props => props.theme.palette.white};
      }
    `};

  ${props =>
    props.white &&
    css`
      background: ${props => props.theme.palette.white};
      color: ${props => props.theme.palette.offBlack};
      border: 1px solid ${props => props.theme.palette.white};
      &:hover {
        color: ${props => props.theme.palette.offBlack};
        background: ${props => props.theme.palette.lightestGray};
      }
    `};

  ${props =>
    props.halo &&
    css`
      color: ${props => props.theme.palette.blue};
      background: transparent;
      border-color: ${props => props.theme.palette.blue};
      box-shadow: inset 0 0 0 0 ${props => props.theme.palette.blue};

      &:hover {
        color: ${props => props.theme.palette.blue};
        background: transparent;
        border-color: ${props => props.theme.palette.blue};
        box-shadow: inset 0 0 0 3px ${props => props.theme.palette.blue};
      }
    `};

  ${props =>
    props.small &&
    css`
      ${fontSize(-2)};
      padding: 0.2325rem 0.675rem;
    `};

  ${props =>
    props.large &&
    css`
      ${fontSize(0)};
      padding: 0.5rem 1rem 0.5rem;
    `};

  ${props =>
    props.extraLarge &&
    css`
      font-size: 17px;
      line-height: 20px;
      padding: 0.85rem 1.2rem 0.85rem;
      font-weight: 300;
    `};

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      text-align: center;
    `};

  ${props =>
    props.half &&
    css`
      width: 50%;
      text-align: center;
    `};

  ${props =>
    props.red &&
    css`
      color: ${props => props.theme.palette.red};
      background: transparent;
      border-color: ${props => props.theme.palette.red};

      &:hover {
        color: ${props => props.theme.palette.white};
        background: ${props => props.theme.palette.darkRed};
        border-color: ${props => props.theme.palette.darkRed};
      }
    `};

  ${props =>
    props.green &&
    css`
      color: ${props => props.theme.palette.white};
      background: ${props => props.theme.palette.green};
      border-color: ${props => props.theme.palette.green};

      &:hover {
        color: ${props => props.theme.palette.white};
        background: ${props => props.theme.palette.darkGreen};
        border-color: ${props => props.theme.palette.darkGreen};
      }
    `};

  ${props =>
    props.grouped &&
    css`
      float: left;
      margin-left: 1px;

      &:last-of-type {
        float: none;
      }

      &:first-of-type {
        margin-left: 0;
      }
    `};

  ${props =>
    props.grouped &&
    props.half &&
    css`
      margin-left: 0;
    `};
`;

export { StyledButton };
