import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledLoaderText,
  StyledLoader,
  StyledLoaderBars
} from './Loader-styled';

const Loader = ({ text, ...other }) => {
  let loaderText;
  if (text) {
    loaderText = <StyledLoaderText>{text}</StyledLoaderText>;
  }

  const loader = (
    <StyledLoader {...other}>
      <StyledLoaderBars />
      {loaderText}
    </StyledLoader>
  );

  return loader;
};

Loader.propTypes = {
  text: PropTypes.string
};

Loader.defaultProps = {
  text: ''
};

export default Loader;
