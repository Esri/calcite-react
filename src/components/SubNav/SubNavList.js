import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SubNavList = ({ children, ...other }) => {
  const StyledSubNavList = styled.nav``;

  const subNavList = <StyledSubNavList {...other}>{children}</StyledSubNavList>;

  return subNavList;
};

SubNavList.propTypes = {
  children: PropTypes.node
};

SubNavList.defaultProps = {};

export default SubNavList;
