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
  /** The html src property of the CardImage */
  src: PropTypes.string,
  /** The text content of the figure caption on the CardImage */
  caption: PropTypes.string,
  /** The html alt property of the component */
  alt: PropTypes.string
};

CardImage.defaultProps = {};

CardImage.displayName = 'CardImage';

export default CardImage;
