import PropTypes from 'prop-types';
import React from 'react';

import { StyledSubNavLink } from './SubNav-styled';

const SubNavLink = ({ children, active, ...other }) => {
  return (
    <StyledSubNavLink active={active} {...other}>
      {children}
    </StyledSubNavLink>
  );
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

SubNavLink.displayName = 'SubNavLink';

export default SubNavLink;
