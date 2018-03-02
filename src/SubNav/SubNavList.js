import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNavList } from './SubNav-styled';

const SubNavList = ({ children, ...other }) => {
  const subNavList = <StyledSubNavList {...other}>{children}</StyledSubNavList>;

  return subNavList;
};

SubNavList.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

SubNavList.defaultProps = {};

export default SubNavList;
