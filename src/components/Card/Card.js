import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { CardImage, CardContent } from './';

const Card = ({ children, bar, shaped, ...other }) => {
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
      shaped &&
      css`
        box-shadow: none;
        background: transparent;
      `};
  `;

  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case CardImage:
      case CardContent:
        return React.cloneElement(child, {
          shaped
        });
      default:
        return child;
    }
  });

  const card = <StyledCard {...other}>{childrenWithProps}</StyledCard>;

  return card;
};

Card.propTypes = {
  children: PropTypes.node,
  bar: PropTypes.string,
  shaped: PropTypes.bool
};

Card.defaultProps = {
  shaped: false
};

export default Card;
