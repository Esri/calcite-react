import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNav } from './SubNav-styled';

import { SubNavTitle } from './';

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

  const subNav = (
    <StyledSubNav blue={blue} overlayGradient={overlayGradient} {...other}>
      {childrenWithProps}
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
