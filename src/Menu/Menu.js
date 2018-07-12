import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import { StyledMenu } from './Menu-styled';

import { MenuItem } from './';

const Menu = ({ children, withComponent, ...other }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case MenuItem:
        return React.cloneElement(child, {});
      default:
        return child;
    }
  });

  let customMenu;
  if (withComponent) {
    customMenu = React.cloneElement(withComponent, {
      ...other,
      children: childrenWithProps
    });
  }

  const menu = <StyledMenu {...other}>{childrenWithProps}</StyledMenu>;

  return withComponent ? customMenu : menu;
};

Menu.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  withComponent: PropTypes.node
};

Menu.defaultProps = {};

export default Menu;
