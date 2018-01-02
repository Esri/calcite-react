import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, disabled, href, type, ...other }) => {
  const StyledButton = styled.button`
    position: relative;
    display: inline-block;
    padding: 0.31rem 0.9rem;
    width: auto;
    color: #ffffff;
    border: 1px solid #0079c1;
    border-radius: 0;
    background-color: #0079c1;
    box-sizing: border-box;
    transition: all 0.05s linear;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    font-family: "Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir",
      "Helvetica Neue", sans-serif;
    &:hover {
      text-decoration: none;
      background-color: #005e95;
      color: #ffffff;
    }

    ${props =>
      props.disabled &&
      css`
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.3;
      `} ${props =>
        props.red &&
        css`
          color: #de2900;
          background: transparent;
          border-color: #de2900;
          &:hover {
            color: #ffffff;
            background: #ab3c16;
            border-color: #ab3c16;
          }
        `};
  `;

  const StyledLink = StyledButton.withComponent("a");

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
  type: PropTypes.oneOf(["button", "reset", "submit"])
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  href: false
};

export default Button;
