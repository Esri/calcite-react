import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNavTitle } from './SubNav-styled';

const SubNavTitle = ({ children, ...other }) => {
  const subNavTitle = (
    <StyledSubNavTitle {...other}>{children}</StyledSubNavTitle>
  );

  return subNavTitle;
};

SubNavTitle.propTypes = {
  children: PropTypes.node
};

SubNavTitle.defaultProps = {};

export default SubNavTitle;
