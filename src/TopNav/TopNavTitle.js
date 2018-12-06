import PropTypes from 'prop-types';
import React from 'react';

import { StyledTopNavTitle } from './TopNav-styled';

const TopNavTitle = ({ children, ...other }) => {
  return <StyledTopNavTitle {...other}>{children}</StyledTopNavTitle>;
};

TopNavTitle.propTypes = {
  /** The content of the component */
  children: PropTypes.node,
  /** The html href property of the TopNavTitle */
  href: PropTypes.string
};

TopNavTitle.defaultProps = {};

TopNavTitle.displayName = 'TopNavTitle';

export default TopNavTitle;
