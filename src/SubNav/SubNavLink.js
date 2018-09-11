import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledSubNavLink } from './SubNav-styled';

const SubNavLink = ({
  children,
  active,
  withComponent,
  forwardedRef,
  ...other
}) => {
  const subNavLink = (
    <StyledSubNavLink ref={forwardedRef} active={active} {...other}>
      {children}
    </StyledSubNavLink>
  );

  let customSubNavLink;
  if (withComponent) {
    customSubNavLink = React.cloneElement(withComponent, {
      ref: forwardedRef,
      active,
      ...other,
      children: children
    });
  }

  return withComponent ? customSubNavLink : subNavLink;
};

SubNavLink.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  active: PropTypes.bool
};

SubNavLink.defaultProps = {
  active: undefined
};

export default withRefs(SubNavLink);
