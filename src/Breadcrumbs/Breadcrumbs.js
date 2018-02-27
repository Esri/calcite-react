import PropTypes from 'prop-types';
import React from 'react';
import { StyledBreadcrumbs } from './Breadcrumbs-styled';

const Breadcrumbs = ({ children, ...other }) => {
  const breadcrumbs = (
    <StyledBreadcrumbs {...other}>{children}</StyledBreadcrumbs>
  );

  return breadcrumbs;
};

Breadcrumbs.propTypes = {
  children: PropTypes.node
};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
