import PropTypes from 'prop-types';
import React from 'react';
import { StyledTopNavLink } from './TopNav-styled';

const TopNavLink = ({ children, href, withComponent, ...other }) => {
  const StyledDiv = StyledTopNavLink.withComponent('div');

  const div = <StyledDiv {...other}>{children}</StyledDiv>;

  const link = (
    <StyledTopNavLink {...other} href={href}>
      {children}
    </StyledTopNavLink>
  );

  let customTopNavLink;
  if (withComponent) {
    customTopNavLink = React.cloneElement(withComponent, {
      href,
      ...other,
      children: children
    });
  }

  if (withComponent) {
    return customTopNavLink;
  } else if (href) {
    return link;
  } else {
    return div;
  }
};

TopNavLink.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  href: PropTypes.string
};

TopNavLink.defaultProps = {};

export default TopNavLink;
