import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, disabled, href, type, ...other }) => {
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
    transition: all 0.05s linear;
    cursor: pointer;
    white-space: nowrap;
    font-size: 0.9375rem;
    line-height: ${props => props.theme.baseline};
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
      props['clear-gray'] &&
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
      props['clear-white'] &&
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
      props.small &&
      css`
        font-size: 0.875rem;
        line-height: ${props => props.theme.baseline};
        padding: 0.2325rem 0.675rem;
      `};

    ${props =>
      props.large &&
      css`
        font-size: 1rem;
        line-height: ${props => props.theme.baseline};
        padding: 0.5rem 1rem 0.5rem;
      `};

    ${props =>
      props.fill &&
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

  const StyledLink = StyledButton.withComponent('a');

  const link = (
    <StyledLink href={href} {...other} disabled={disabled} type={type}>
      {children}
    </StyledLink>
  );

  const button = (
    <StyledButton {...other} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );

  return href ? link : button;
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  href: false
};

export default Button;
