import PropTypes from 'prop-types';
import React from 'react';
import { StyledCrumb, StyledSpanCrumb } from './Breadcrumbs-styled';

const Crumb = ({ children, white, href, hasLink, ...other }) => {
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

  return href || hasLink ? crumb : spanCrumb;
};

Crumb.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  white: PropTypes.bool,
  /** Description TBD */
  href: PropTypes.string
};

Crumb.defaultProps = {};

export default Crumb;
