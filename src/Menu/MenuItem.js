import PropTypes from 'prop-types';
import React from 'react';
import { StyledMenuItem, StyledMenuItemSubtitle } from './Menu-styled';

const MenuItem = ({ children, subtitle, ...other }) => {
  let _subtitle;
  if (subtitle) {
    _subtitle = <StyledMenuItemSubtitle>{subtitle}</StyledMenuItemSubtitle>;
  }

  const menuItem = (
    <StyledMenuItem {...other}>
      <span>{children}</span>
      {_subtitle}
    </StyledMenuItem>
  );

  return menuItem;
};

MenuItem.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** A container for content to be displayed right aligned in the menu item */
  subtitle: PropTypes.node
};

MenuItem.defaultProps = {};

export default MenuItem;
