import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledMenuTitle } from './Menu-styled';

const MenuTitle = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledMenuTitle ref={forwardedRef} as="span" {...other}>
      {children}
    </StyledMenuTitle>
  );
};

MenuTitle.propTypes = {
  /** Content of the MenuTitle */
  children: PropTypes.node
};

MenuTitle.defaultProps = {};

MenuTitle.displayName = 'MenuTitle';

export default withRefs(MenuTitle);
