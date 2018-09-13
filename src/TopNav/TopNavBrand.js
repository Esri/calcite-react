import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledTopNavBrandLink, StyledTopNavBrandImg } from './TopNav-styled';

const TopNavBrand = ({
  children,
  src,
  alt,
  imageStyle,
  forwardedRef,
  ...other
}) => {
  return (
    <StyledTopNavBrandLink ref={forwardedRef} {...other}>
      <StyledTopNavBrandImg src={src} alt={alt} style={imageStyle} />
    </StyledTopNavBrandLink>
  );
};

TopNavBrand.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Style property for the underlying img element */
  imageStyle: PropTypes.object
};

TopNavBrand.defaultProps = {
  alt: 'Logo'
};

export default withRefs(TopNavBrand);
