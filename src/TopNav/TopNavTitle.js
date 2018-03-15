import PropTypes from 'prop-types';
import React from 'react';
import { StyledTopNavTitle } from './TopNav-styled';

const TopNavTitle = ({ children, href, ...other }) => {
  const topNavTitle = (
    <StyledTopNavTitle {...other} href={href}>
      {children}
    </StyledTopNavTitle>
  );

  return topNavTitle;
};

TopNavTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  href: PropTypes.string
};

TopNavTitle.defaultProps = {};

export default TopNavTitle;
