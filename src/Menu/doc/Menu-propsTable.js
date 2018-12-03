import PropTypes from 'prop-types';
import React from 'react';
import { StyledMenu } from '../Menu-styled';

const Menu = ({ children, ...other }) => {
  return <StyledMenu {...other}>{children}</StyledMenu>;
};

Menu.propTypes = {
  /** Content node for the Menu */
  children: PropTypes.node
};

Menu.defaultProps = {};

Menu.displayName = 'Menu';

export default Menu;
