import PropTypes from 'prop-types';
import React from 'react';

import { StyledSubNavList } from './SubNav-styled';

const SubNavList = ({ children, ...other }) => {
  return <StyledSubNavList {...other}>{children}</StyledSubNavList>;
};

SubNavList.propTypes = {
  /** The content of the component; should be SubNavLinks. */
  children: PropTypes.node
};

SubNavList.defaultProps = {};

SubNavList.displayName = 'SubNavList';

export default SubNavList;
