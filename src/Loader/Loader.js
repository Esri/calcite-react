import PropTypes from 'prop-types';
import React from 'react';

import {
  StyledLoaderText,
  StyledLoader,
  StyledLoaderBars
} from './Loader-styled';

const Loader = ({ text, sizeRatio, ...other }) => {
  const getLoaderText = text => {
    if (text) {
      return <StyledLoaderText>{text}</StyledLoaderText>;
    }
  };

  return (
    <StyledLoader {...other}>
      <StyledLoaderBars sizeRatio={sizeRatio} />
      {getLoaderText(text)}
    </StyledLoader>
  );
};

Loader.propTypes = {
  /** Text displayed below the loading bars. */
  text: PropTypes.string,
  /** Relative size of the Loader component */
  sizeRatio: PropTypes.number
};

Loader.defaultProps = {
  sizeRatio: 17
};

Loader.displayName = 'Loader';

export default Loader;
