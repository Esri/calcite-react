import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import { StyledBreadcrumbs } from './Breadcrumbs-styled';

const BreadcrumbsContext = createContext({
  breadcrumbsContext: {
    white: undefined
  }
});

const Breadcrumbs = ({ children, white, ...other }) => {
  const breadcrumbsContext = {
    white
  };

  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbsContext }}>
      <StyledBreadcrumbs {...other}>{children}</StyledBreadcrumbs>
    </BreadcrumbsContext.Provider>
  );
};

Breadcrumbs.propTypes = {
  /** Crumb components to be rendered within Breadcrumbs. */
  children: PropTypes.node,
  /** Color modifier for the Breadcrumbs. */
  white: PropTypes.bool
};

Breadcrumbs.defaultProps = {};

Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs as default, BreadcrumbsContext };
