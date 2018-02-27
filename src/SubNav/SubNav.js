import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNav } from './SubNav-styled';

import { SubNavTitle } from './';

const SubNav = ({ children, blue, ...other }) => {
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
    <StyledSubNav blue={blue} {...other}>
      {childrenWithProps}
    </StyledSubNav>
  );

  return subNav;
};

SubNav.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool
};

SubNav.defaultProps = {
  blue: false
};

export default SubNav;
