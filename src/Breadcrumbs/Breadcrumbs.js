import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import { StyledBreadcrumbs } from './Breadcrumbs-styled';

import { Crumb } from './';

const Breadcrumbs = ({ children, white, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
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
  /** Crumb components to be rendered within Breadcrumbs. */
  children: PropTypes.node,
  /** Color modifier for the Breadcrumbs. */
  white: PropTypes.bool
};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
