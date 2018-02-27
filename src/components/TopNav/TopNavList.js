import PropTypes from 'prop-types';
import React from 'react';
import { StyledTopNavList } from './TopNav-styled';

const TopNavList = ({ children, ...other }) => {
  const topNavList = <StyledTopNavList {...other}>{children}</StyledTopNavList>;

  return topNavList;
};

TopNavList.propTypes = {
  children: PropTypes.node
};

TopNavList.defaultProps = {};

export default TopNavList;
