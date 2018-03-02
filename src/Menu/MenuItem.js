import PropTypes from 'prop-types';
import React from 'react';
import { StyledMenuItem } from './Menu-styled';

const MenuItem = ({ children, ...other }) => {
  const menuItem = <StyledMenuItem {...other}>{children}</StyledMenuItem>;

  return menuItem;
};

MenuItem.propTypes = {
  children: PropTypes.node
};

MenuItem.defaultProps = {};

export default MenuItem;
