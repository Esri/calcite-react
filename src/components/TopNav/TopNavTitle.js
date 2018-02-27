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
  children: PropTypes.node,
  href: PropTypes.string
};

TopNavTitle.defaultProps = {
  href: '#'
};

export default TopNavTitle;
