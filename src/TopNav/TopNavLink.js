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
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  href: PropTypes.string
};

TopNavLink.defaultProps = {};

TopNavLink.displayName = 'TopNavLink';

export default TopNavLink;
