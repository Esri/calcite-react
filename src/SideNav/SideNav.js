import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import { StyledSideNav } from './SideNav-styled';

import { SideNavTitle, SideNavLink } from './';

const SideNav = ({ children, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case SideNavTitle:
        return React.cloneElement(child, {});
      case SideNavLink:
        return React.cloneElement(child, {});
      default:
        return child;
    }
  });

  const sideNav = <StyledSideNav {...other}>{childrenWithProps}</StyledSideNav>;

  return sideNav;
};

SideNav.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

SideNav.defaultProps = {};

export default SideNav;
