import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNavLink } from './SubNav-styled';

const SubNavLink = ({ children, active, withComponent, ...other }) => {
  const subNavLink = (
    <StyledSubNavLink active={active} {...other}>
      {children}
    </StyledSubNavLink>
  );

  let customSubNavLink;
  if (withComponent) {
    customSubNavLink = React.cloneElement(withComponent, {
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

export default SubNavLink;
