import PropTypes from 'prop-types';
import React from 'react';
import { StyledCrumb, StyledSpanCrumb } from './Breadcrumbs-styled';
import { BreadcrumbsContext } from './Breadcrumbs';

const Crumb = ({ children, href, hasLink, ...other }) => {
  let Crumb = StyledSpanCrumb;

  if (href || hasLink) {
    Crumb = StyledCrumb;
  }

  return (
    <BreadcrumbsContext.Consumer>
      {({ breadcrumbsContext }) => (
        <Crumb {...breadcrumbsContext} {...other} href={href}>
          {children}
        </Crumb>
      )}
    </BreadcrumbsContext.Consumer>
  );
};

Crumb.propTypes = {
  /** Text content of the bread crumb */
  children: PropTypes.node,
  /** Boolean to toggle the light style for breadcrumbs */
  white: PropTypes.bool,
  /** href html prop */
  href: PropTypes.string
};

Crumb.defaultProps = {};

Crumb.displayName = 'Crumb';

export default Crumb;
