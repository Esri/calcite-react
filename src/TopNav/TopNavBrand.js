import PropTypes from 'prop-types';
import React from 'react';
import { StyledTopNavBrandLink, StyledTopNavBrandImg } from './TopNav-styled';

const TopNavBrand = ({ children, href, src, alt, imageStyle, ...other }) => {
  const topNavBrand = (
    <StyledTopNavBrandLink href={href} {...other}>
      <StyledTopNavBrandImg src={src} alt={alt} style={imageStyle} />
    </StyledTopNavBrandLink>
  );

  return topNavBrand;
};

TopNavBrand.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

TopNavBrand.defaultProps = {
  alt: 'Logo'
};

export default TopNavBrand;
