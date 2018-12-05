import PropTypes from 'prop-types';
import React from 'react';

import { StyledTopNavBrandLink, StyledTopNavBrandImg } from './TopNav-styled';

const TopNavBrand = ({ children, src, alt, imageStyle, ...other }) => {
  return (
    <StyledTopNavBrandLink {...other}>
      <StyledTopNavBrandImg src={src} alt={alt} style={imageStyle} />
    </StyledTopNavBrandLink>
  );
};

TopNavBrand.propTypes = {
  /** The html src property of the brand image */
  src: PropTypes.node,
  /** The html alt property of the brand image */
  alt: PropTypes.node,
  /** Style property for the underlying img element */
  imageStyle: PropTypes.object
};

TopNavBrand.defaultProps = {
  alt: 'Logo'
};

TopNavBrand.displayName = 'TopNavBrand';

export default TopNavBrand;
