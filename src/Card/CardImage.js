import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledCardImageWrap,
  StyledCardImage,
  StyledCardImageCaption
} from './Card-styled';

const CardImage = ({ children, src, caption, alt, shaped, wide, ...other }) => {
  let figcaption;
  if (!shaped && caption) {
    figcaption = <StyledCardImageCaption>{caption}</StyledCardImageCaption>;
  }

  const cardImage = (
    <StyledCardImageWrap shaped={shaped} wide={wide} {...other}>
      <StyledCardImage wide={wide} src={src} alt={alt} />
      {figcaption}
    </StyledCardImageWrap>
  );

  return cardImage;
};

CardImage.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  src: PropTypes.string,
  /** Description TBD */
  caption: PropTypes.string,
  /** Description TBD */
  alt: PropTypes.string,
  /** Description TBD */
  shaped: PropTypes.bool,
  /** Description TBD */
  wide: PropTypes.bool
};

CardImage.defaultProps = {};

export default CardImage;
