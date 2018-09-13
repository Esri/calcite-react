import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledTopNavLink } from './TopNav-styled';

const TopNavLink = ({
  children,
  href,
  withComponent,
  forwardedRef,
  ...other
}) => {
  const StyledDiv = StyledTopNavLink.withComponent('div');

  const div = (
    <StyledDiv ref={forwardedRef} {...other}>
      {children}
    </StyledDiv>
  );

  const link = (
    <StyledTopNavLink ref={forwardedRef} {...other} href={href}>
      {children}
    </StyledTopNavLink>
  );

  let customTopNavLink;
  if (withComponent) {
    customTopNavLink = React.cloneElement(withComponent, {
      ref: forwardedRef,
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

export default withRefs(TopNavLink);
