import PropTypes from 'prop-types';
import React from 'react';

import { StyledTopNavLink } from './TopNav-styled';

const TopNavLink = ({ children, href, ...other }) => {
  return (
    <StyledTopNavLink href={href} as={href ? 'a' : 'span'} {...other}>
      {children}
    </StyledTopNavLink>
  );
};

TopNavLink.propTypes = {
  /** The content of the component */
  children: PropTypes.node,
  /** The html href property of the link, if this property is missing the component will render as a span */
  href: PropTypes.string
};

TopNavLink.defaultProps = {};

TopNavLink.displayName = 'TopNavLink';

export default TopNavLink;
