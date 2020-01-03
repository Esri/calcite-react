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
import React from 'react';

import {
  StyledLoaderText,
  StyledLoader,
  StyledLoaderBars,
  StyledLoaderSquareContainer,
  StyledLoaderSquare
} from './Loader-styled';

const Loader = ({ text, sizeRatio, color, square, ...other }) => {
  const sizePx = sizeRatio * 17;

  const getLoaderText = text => {
    if (text) {
      return <StyledLoaderText sizeRatio={sizePx}>{text}</StyledLoaderText>;
    }
  };

  const getLoaderAnimation = () => {
    if (square) {
      const squareSizePx = sizePx * 3;
      return (
        <StyledLoaderSquareContainer sizePx={squareSizePx} color={color}>
          <StyledLoaderSquare>
            <rect />
          </StyledLoaderSquare>
          <StyledLoaderSquare>
            <rect />
          </StyledLoaderSquare>
          <StyledLoaderSquare>
            <rect />
          </StyledLoaderSquare>
        </StyledLoaderSquareContainer>
      );
    }

    return <StyledLoaderBars sizeRatio={sizePx} color={color} />;
  };

  return (
    <StyledLoader sizeRatio={sizePx} {...other}>
      {getLoaderAnimation()}
      {getLoaderText(text)}
    </StyledLoader>
  );
};

Loader.propTypes = {
  /** Text displayed below the loading bars. */
  text: PropTypes.string,
  /** Relative size of the Loader component. Value must be greater than 0. A value of 1 results in a 50px height Loader */
  sizeRatio: PropTypes.number,
  /** Color of the Loader bars */
  color: PropTypes.string,
  /** Display the loader as an animating square */
  square: PropTypes.bool
};

Loader.defaultProps = {
  sizeRatio: 1
};

Loader.displayName = 'Loader';

export default Loader;
