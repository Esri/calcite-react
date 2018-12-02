import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledCardImageWrap,
  StyledCardImage,
  StyledCardImageCaption
} from './Card-styled';

import { CardContext } from './Card';

const CardImage = ({ children, src, caption, alt, ...other }) => {
  function getFigcaption(shaped) {
    if (!shaped && caption) {
      return <StyledCardImageCaption>{caption}</StyledCardImageCaption>;
    }
  }

  return (
    <CardContext.Consumer>
      {({ cardContext }) => (
        <StyledCardImageWrap {...cardContext} {...other}>
          <StyledCardImage {...cardContext} src={src} alt={alt} />
          {getFigcaption(cardContext.shaped)}
        </StyledCardImageWrap>
      )}
    </CardContext.Consumer>
  );
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

CardImage.displayName = 'CardImage';

export default CardImage;
