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
  StyledAvatar,
  StyledAvatarImage,
  StyledAvatarSvg,
  StyledAvatarText
} from './Avatar-styled';

const Avatar = ({
  children,
  src,
  alt,
  size,
  fontSize,

  ...other
}) => {
  const getWrappedChildren = children => {
    if (children) {
      if (React.isValidElement(children)) {
        //Assume the element is an SVG icon
        const _fontSize = fontSize ? { fontSize: fontSize } : null;
        return React.cloneElement(children, {
          ...children.props,
          style: {
            ...StyledAvatarSvg,
            ...children.props.style,
            ..._fontSize
          }
        });
      } else {
        return <StyledAvatarText>{children}</StyledAvatarText>;
      }
    } else if (src) {
      return <StyledAvatarImage src={src} alt={alt || ''} />;
    }
  };

  return (
    <StyledAvatar aSize={size} fontSize={fontSize} {...other}>
      {getWrappedChildren(children)}
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  /** The content of the component; can take text, an image, or an icon. */
  children: PropTypes.node,
  /** The src attribute for the img element. */
  src: PropTypes.string,
  /** Used in combination with src to provide
   an alt attribute for the rendered img element. */
  alt: PropTypes.string,
  /** Diameter of the Avatar. */
  size: PropTypes.number
};

Avatar.defaultProps = {
  size: 40
};

Avatar.displayName = 'Avatar';

export default Avatar;
