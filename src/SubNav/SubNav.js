import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNav, StyledSubNavLeftContent } from './SubNav-styled';

import { SubNavTitle, SubNavList, SubNavActions } from './';

const SubNav = ({ children, blue, overlayGradient, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case SubNavTitle:
        return React.cloneElement(child, {
          blue
        });
      default:
        return child;
    }
  });

  const getLeftContent = function() {
    return childrenWithProps.filter(child => {
      return child.type === SubNavTitle || child.type === SubNavList;
    });
  };

  const getSubNavActions = function() {
    return childrenWithProps.filter(child => {
      return child.type === SubNavActions;
    });
  };

  const subNav = (
    <StyledSubNav blue={blue} overlayGradient={overlayGradient} {...other}>
      <StyledSubNavLeftContent>{getLeftContent()}</StyledSubNavLeftContent>
      {getSubNavActions()}
    </StyledSubNav>
  );

  return subNav;
};

SubNav.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  blue: PropTypes.bool,
  /** If true, the gradient is applied on top of the image */
  overlayGradient: PropTypes.bool
};

SubNav.defaultProps = {
  blue: undefined,
  overlayGradient: true
};

export default SubNav;
