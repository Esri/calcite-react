import PropTypes from 'prop-types';
import React from 'react';
import { StyledTopNavList } from './TopNav-styled';

const TopNavList = ({ children, ...other }) => {
  return <StyledTopNavList {...other}>{children}</StyledTopNavList>;
};

TopNavList.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

TopNavList.defaultProps = {};

export default TopNavList;
