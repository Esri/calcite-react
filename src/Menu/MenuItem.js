import PropTypes from 'prop-types';
import React from 'react';
import { StyledMenuItem, StyledMenuItemSubtitle } from './Menu-styled';
import withRefs from '../utils/withRefs';

const MenuItem = ({ children, subtitle, forwardedRef, ...other }) => {
  const getSubtitle = subtitle => {
    if (subtitle) {
      return <StyledMenuItemSubtitle>{subtitle}</StyledMenuItemSubtitle>;
    }
  };

  return (
    <StyledMenuItem ref={forwardedRef} {...other}>
      <span>{children}</span>
      {getSubtitle(subtitle)}
    </StyledMenuItem>
  );
};

MenuItem.propTypes = {
  /** Content of the MenuItem */
  children: PropTypes.node,
  /** A container for content to be displayed right aligned in the menu item */
  subtitle: PropTypes.node
};

MenuItem.defaultProps = {};

MenuItem.displayName = 'MenuItem';

export default withRefs(MenuItem);
