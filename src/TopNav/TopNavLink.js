import PropTypes from 'prop-types';
import React from 'react';
import { StyledTopNavLink } from './TopNav-styled';

const TopNavLink = ({ children, href, ...other }) => {
  const StyledDiv = StyledTopNavLink.withComponent('div');

  const div = <StyledDiv {...other}>{children}</StyledDiv>;

  const link = (
    <StyledTopNavLink {...other} href={href}>
      {children}
    </StyledTopNavLink>
  );

  return href ? link : div;
};

TopNavLink.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  href: PropTypes.string
};

TopNavLink.defaultProps = {};

export default TopNavLink;
