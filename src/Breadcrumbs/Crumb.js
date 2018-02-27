import PropTypes from 'prop-types';
import React from 'react';
import { StyledCrumb, StyledSpanCrumb } from './Breadcrumbs-styled';

const Crumb = ({ children, href, ...other }) => {
  const spanCrumb = <StyledSpanCrumb {...other}>{children}</StyledSpanCrumb>;

  const crumb = (
    <StyledCrumb {...other} href={href}>
      {children}
    </StyledCrumb>
  );

  return href ? crumb : spanCrumb;
};

Crumb.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

Crumb.defaultProps = {};

export default Crumb;
