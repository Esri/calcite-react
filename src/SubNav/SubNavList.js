import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNavList } from './SubNav-styled';

const SubNavList = ({ children, ...other }) => {
  return <StyledSubNavList {...other}>{children}</StyledSubNavList>;
};

SubNavList.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

SubNavList.defaultProps = {};

export default SubNavList;
