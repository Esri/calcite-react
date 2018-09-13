import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import {
  StyledLoaderText,
  StyledLoader,
  StyledLoaderBars
} from './Loader-styled';

const Loader = ({ text, forwardedRef, ...other }) => {
  const getLoaderText = text => {
    if (text) {
      return <StyledLoaderText>{text}</StyledLoaderText>;
    }
  };

  return (
    <StyledLoader ref={forwardedRef} {...other}>
      <StyledLoaderBars />
      {getLoaderText(text)}
    </StyledLoader>
  );
};

Loader.propTypes = {
  /** Text displayed below the loading bars */
  text: PropTypes.string
};

Loader.defaultProps = {};

export default withRefs(Loader);
