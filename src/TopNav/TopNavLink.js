import PropTypes from 'prop-types';
import React from 'react';
import { StyledTopNavLink } from './TopNav-styled';

const TopNavLink = ({ children, href, ...other }) => {
  const topNavLink = (
    <StyledTopNavLink {...other} href={href}>
      {children}
    </StyledTopNavLink>
  );

  return topNavLink;
};

TopNavLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

TopNavLink.defaultProps = {};

export default TopNavLink;
