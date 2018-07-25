import PropTypes from 'prop-types';
import React from 'react';
import { StyledMenu } from './Menu-styled';

const Menu = ({ children, ...other }) => {
  return <StyledMenu {...other}>{children}</StyledMenu>;
};

Menu.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

Menu.defaultProps = {};

export default Menu;
