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

import { StyledTopNavBrandLink, StyledTopNavBrandImg } from './TopNav-styled';

const TopNavBrand = ({ children, src, alt, imageStyle, ...other }) => {
  return (
    <StyledTopNavBrandLink {...other}>
      <StyledTopNavBrandImg src={src} alt={alt} style={imageStyle} />
    </StyledTopNavBrandLink>
  );
};

TopNavBrand.propTypes = {
  /** The HTML src property of the brand image. */
  src: PropTypes.node,
  /** The HTML alt property of the brand image. */
  alt: PropTypes.node,
  /** Style property for the underlying img element. */
  imageStyle: PropTypes.object
};

TopNavBrand.defaultProps = {
  alt: 'Logo'
};

TopNavBrand.displayName = 'TopNavBrand';

export default TopNavBrand;
