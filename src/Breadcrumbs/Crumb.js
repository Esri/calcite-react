import PropTypes from 'prop-types';
import React from 'react';
import { StyledCrumb, StyledSpanCrumb } from './Breadcrumbs-styled';

const Crumb = ({ children, white, href, ...other }) => {
  const spanCrumb = (
    <StyledSpanCrumb white={white} {...other}>
      {children}
    </StyledSpanCrumb>
  );

  const crumb = (
    <StyledCrumb white={white} {...other} href={href}>
      {children}
    </StyledCrumb>
  );

  return href ? crumb : spanCrumb;
};

Crumb.propTypes = {
  children: PropTypes.node,
  white: PropTypes.bool,
  href: PropTypes.string
};

Crumb.defaultProps = {
  white: undefined,
  href: ''
};

export default Crumb;
