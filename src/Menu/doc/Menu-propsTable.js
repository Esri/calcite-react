import PropTypes from 'prop-types';
import React from 'react';
import { StyledMenu } from '../Menu-styled';

const Menu = ({ children, ...other }) => {
  return <StyledMenu {...other}>{children}</StyledMenu>;
};

Menu.propTypes = {
  /** Content node for the Menu */
  children: PropTypes.node,
  /** Style prop used to render an extra small Menu. */
  extraSmall: PropTypes.bool,
  /** Style prop used to render a small Menu. */
  small: PropTypes.bool,
  /** Style prop used to render a large Menu. */
  large: PropTypes.bool,
  /** Style prop used to render an extra large Menu. */
  extraLarge: PropTypes.bool
};

Menu.defaultProps = {};

Menu.displayName = 'Menu';

export default Menu;
