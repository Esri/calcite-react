import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const Card = ({ children, bar, ...other }) => {
  const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background: ${props => props.theme.palette.white};
    box-shadow: 0 0 0 1px ${props => props.theme.palette.transparentOffWhite},
      ${props => props.theme.boxShadow};

    ${props =>
      props.wide &&
      css`
        flex-direction: row;
      `};

    ${props =>
      bar &&
      css`
        border-top: 3px solid
          ${props.theme.palette[bar] || props.theme.palette.blue};
      `};

    ${props =>
      props.shaped &&
      css`
        box-shadow: none;
        background: transparent;
      `};
  `;

  const alert = <StyledCard {...other}>{children}</StyledCard>;

  return alert;
};

Card.propTypes = {
  children: PropTypes.node,
  bar: PropTypes.string
};

Card.defaultProps = {};

export default Card;
