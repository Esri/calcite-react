import PropTypes from 'prop-types';
import React from 'react';

import {
  StyledLoaderText,
  StyledLoader,
  StyledLoaderBars
} from './Loader-styled';

const Loader = ({ text, sizeRatio, color, ...other }) => {
  const sizePx = sizeRatio * 17;

  const getLoaderText = text => {
    if (text) {
      return <StyledLoaderText sizeRatio={sizePx}>{text}</StyledLoaderText>;
    }
  };

  return (
    <StyledLoader sizeRatio={sizePx} {...other}>
      <StyledLoaderBars sizeRatio={sizePx} color={color} />
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
  color: PropTypes.string
};

Loader.defaultProps = {
  sizeRatio: 1
};

Loader.displayName = 'Loader';

export default Loader;
