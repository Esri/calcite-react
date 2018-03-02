import PropTypes from 'prop-types';
import React from 'react';
import { StyledMenu } from './Menu-styled';

import { MenuItem } from './';

const Menu = ({ children, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case MenuItem:
        return React.cloneElement(child, {});
      default:
        return child;
    }
  });

  const menu = <StyledMenu {...other}>{childrenWithProps}</StyledMenu>;

  return menu;
};

Menu.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

Menu.defaultProps = {};

export default Menu;
