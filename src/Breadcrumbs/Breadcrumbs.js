import PropTypes from 'prop-types';
import React from 'react';
import { StyledBreadcrumbs } from './Breadcrumbs-styled';

import { Crumb } from './';

const Breadcrumbs = ({ children, white, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case Crumb:
        return React.cloneElement(child, {
          white
        });
      default:
        return child;
    }
  });

  const breadcrumbs = (
    <StyledBreadcrumbs {...other}>{childrenWithProps}</StyledBreadcrumbs>
  );

  return breadcrumbs;
};

Breadcrumbs.propTypes = {
  children: PropTypes.node,
  white: PropTypes.bool
};

Breadcrumbs.defaultProps = {
  white: false
};

export default Breadcrumbs;
