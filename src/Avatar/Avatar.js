import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledAvatar,
  StyledAvatarImage,
  StyledAvatarSvg,
  StyledAvatarText
} from './Avatar-styled';

const Avatar = ({ children, src, alt, size, fontSize, ...other }) => {
  let wrappedChildren;

  if (children) {
    if (React.isValidElement(children)) {
      //Assume the element is an SVG icon
      const _fontSize = fontSize ? { fontSize: fontSize } : null;
      wrappedChildren = React.cloneElement(children, {
        ...children.props,
        style: {
          ...StyledAvatarSvg,
          ...children.props.style,
          ..._fontSize
        }
      });
    } else {
      wrappedChildren = <StyledAvatarText>{children}</StyledAvatarText>;
    }
  } else if (src) {
    wrappedChildren = <StyledAvatarImage src={src} alt={alt || ''} />;
  }

  const avatar = (
    <StyledAvatar aSize={size} fontSize={fontSize} {...other}>
      {wrappedChildren}
    </StyledAvatar>
  );

  return avatar;
};

Avatar.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** The src attribute for the img element */
  src: PropTypes.string,
  /** Used in combination with src to provide
   an alt attribute for the rendered img element */
  alt: PropTypes.string,
  /** Diameter of the avatar */
  size: PropTypes.number
};

Avatar.defaultProps = {
  size: 40
};

export default Avatar;
