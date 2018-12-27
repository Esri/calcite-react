import PropTypes from 'prop-types';
import React from 'react';
import { StyledTopNavList } from './TopNav-styled';

const TopNavList = ({ children, ...other }) => {
  return <StyledTopNavList {...other}>{children}</StyledTopNavList>;
};

TopNavList.propTypes = {
  /** The content of the component. */
  children: PropTypes.node
};

TopNavList.defaultProps = {};

TopNavList.displayName = 'TopNavList';

export default TopNavList;
