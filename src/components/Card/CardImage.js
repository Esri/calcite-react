import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { figure } from '../../utils/elements';

const CardImage = ({ children, src, caption, alt, shaped, wide, ...other }) => {
  const StyledCardImageWrap = figure.extend`
    width: 100%;
    position: relative;
    margin-bottom: 0;
    flex: 0 0 auto;

    ${shaped &&
      css`
        margin-bottom: -3rem;
        padding: 0 1.25rem;
        box-sizing: border-box;
      `};

    ${wide &&
      css`
        position: relative;
        top: 0;
        left: 0;
        bottom: 0;
        width: 25%;
        overflow: hidden;
        margin-bottom: 0;
      `};
  `;

  const StyledCardImage = styled.img`
    width: 100%;
    display: block;

    ${wide &&
      css`
        width: auto;
        min-width: 100%;
        max-width: none;
        height: 100%;
        margin: 0;
        display: block;
        position: absolute;
      `};
  `;

  const StyledCardImageCaption = styled.figcaption`
    background: ${props => props.theme.palette.opaqueWhite};
    color: ${props => props.theme.palette.offBlack};
    font-style: normal;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    font-size: 0.875rem;
    line-height: 1.55rem;
    padding: 0.35rem 1.25rem 0.35rem 1.25rem;
  `;

  let figcaption;
  if (!shaped) {
    figcaption = <StyledCardImageCaption>{caption}</StyledCardImageCaption>;
  }

  const cardImage = (
    <StyledCardImageWrap {...other}>
      <StyledCardImage src={src} alt={alt} />
      {figcaption}
    </StyledCardImageWrap>
  );

  return cardImage;
};

CardImage.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  caption: PropTypes.string,
  alt: PropTypes.string,
  shaped: PropTypes.bool,
  wide: PropTypes.bool
};

CardImage.defaultProps = {};

export default CardImage;
