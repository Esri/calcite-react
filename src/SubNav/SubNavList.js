import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNavList } from './SubNav-styled';

const SubNavList = ({ children, ...other }) => {
  const subNavList = <StyledSubNavList {...other}>{children}</StyledSubNavList>;

  return subNavList;
};

SubNavList.propTypes = {
  children: PropTypes.node
};

SubNavList.defaultProps = {};

export default SubNavList;
