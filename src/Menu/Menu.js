import PropTypes from 'prop-types';
import React from 'react';
import { StyledMenu } from './Menu-styled';
import withRefs from '../utils/withRefs';

const Menu = withRefs(({ children, forwardedRef, ...other }) => {
  return (
    <StyledMenu ref={forwardedRef} {...other}>
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
