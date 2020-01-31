// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import {
  StyledCardImageWrap,
  StyledCardImage,
  StyledCardImageCaption
} from './Card-styled';

import { CardContext } from './Card';

const CardImage = ({ children, src, caption, alt, ...other }) => {
  const cardContext = useContext(CardContext);

  function getFigcaption(shaped) {
    if (!shaped && caption) {
      return <StyledCardImageCaption>{caption}</StyledCardImageCaption>;
    }
  }

  return (
    <StyledCardImageWrap {...cardContext} {...other}>
      <StyledCardImage {...cardContext} src={src} alt={alt} />
      {getFigcaption(cardContext.shaped)}
    </StyledCardImageWrap>
  );
};

CardImage.propTypes = {
  /** The HTML src property of the CardImage. */
  src: PropTypes.string,
  /** The text content of the figure caption on the CardImage. */
  caption: PropTypes.string,
  /** The HTML alt property of the component. */
  alt: PropTypes.string
};

CardImage.defaultProps = {};

CardImage.displayName = 'CardImage';

export default CardImage;
