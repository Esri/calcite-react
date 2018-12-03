import PropTypes from 'prop-types';
import React from 'react';

import { StyledTopNavTitle } from './TopNav-styled';

const TopNavTitle = ({ children, ...other }) => {
  return <StyledTopNavTitle {...other}>{children}</StyledTopNavTitle>;
};

TopNavTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  href: PropTypes.string
};

TopNavTitle.defaultProps = {};

TopNavTitle.displayName = 'TopNavTitle';

export default TopNavTitle;
