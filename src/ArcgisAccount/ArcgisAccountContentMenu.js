// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import { StyledArcgisAccountContentMenu } from './ArcgisAccount-styled';

// App components

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const ArcgisAccountMenu = ({ children, user, ...other }) => {
  return (
    <StyledArcgisAccountContentMenu>{children}</StyledArcgisAccountContentMenu>
  );
};

ArcgisAccountMenu.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object
};

ArcgisAccountMenu.defaultProps = {};

export default ArcgisAccountMenu;
