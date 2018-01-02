import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";

const Label = ({ children, ...other }) => {
  const StyledLabel = styled.mark`
    background-color: #efefef;
    padding: 0.25em 0.5em;
    border-radius: 3px;
    font-size: 0.85em;
    line-height: 1;
    white-space: nowrap;
    font-family: "Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir",
      "Helvetica Neue", sans-serif;

    ${props =>
      props.red &&
      css`
        background-color: #de2900;
        color: #ffffff;
      `};
  `;

  const label = <StyledLabel {...other}>{children}</StyledLabel>;

  return label;
};

Label.propTypes = {
  children: PropTypes.node
};

Label.defaultProps = {};

export default Label;
