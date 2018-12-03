import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { StyledMenu } from './Menu-styled';

const Menu = forwardRef(({ children, ...other }, ref) => {
  return (
    <StyledMenu ref={ref} {...other}>
      {children}
    </StyledMenu>
  );
});

Menu.propTypes = {
  /** Content node for the Menu */
  children: PropTypes.node
};

Menu.defaultProps = {};

Menu.displayName = 'Menu';

export default Menu;
