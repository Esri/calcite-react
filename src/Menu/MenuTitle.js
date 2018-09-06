import PropTypes from 'prop-types';
import React from 'react';
import { StyledMenuTitle } from './Menu-styled';

const MenuTitle = ({ children, ...other }) => {
  return <StyledMenuTitle {...other}>{children}</StyledMenuTitle>;
};

MenuTitle.propTypes = {
  /** Content of the MenuTitle */
  children: PropTypes.node
};

MenuTitle.defaultProps = {};

export default MenuTitle;
