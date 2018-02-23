import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TopNavBrand = ({ children, href, src, alt, imageStyle, ...other }) => {
  const StyledTopNavBrandLink = styled.a`
    padding: 0 ${props => props.theme.baseline};
    display: inline-flex;
    align-items: center;
    text-decoration: none;
  `;

  const StyledTopNavBrandImg = styled.img`
    height: 30px;
  `;

  const topNavBrand = (
    <StyledTopNavBrandLink href={href} {...other}>
      <StyledTopNavBrandImg src={src} alt={alt} style={imageStyle} />
    </StyledTopNavBrandLink>
  );

  return topNavBrand;
};

TopNavBrand.propTypes = {
  children: PropTypes.node
};

TopNavBrand.defaultProps = {
  href: '#',
  alt: 'Logo'
};

export default TopNavBrand;
