import PropTypes from 'prop-types';
import React from 'react';
import { StyledMenuTitle } from './Menu-styled';

const MenuTitle = ({ children, ...other }) => {
  const menuTitle = <StyledMenuTitle {...other}>{children}</StyledMenuTitle>;

  return menuTitle;
};

MenuTitle.propTypes = {
  children: PropTypes.node
};

MenuTitle.defaultProps = {};

export default MenuTitle;
