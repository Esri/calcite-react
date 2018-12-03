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

const ArcgisAccountContentMenu = ({ children, user, ...other }) => {
  return (
    <StyledArcgisAccountContentMenu {...other}>
      {children}
    </StyledArcgisAccountContentMenu>
  );
};

ArcgisAccountContentMenu.propTypes = {
  /** Content of the StyledArcgisAccountContentMenu */
  children: PropTypes.node,
  /** AGOL user object */
  user: PropTypes.object
};

ArcgisAccountContentMenu.defaultProps = {};

ArcgisAccountContentMenu.displayName = 'ArcgisAccountContentMenu';

export default ArcgisAccountContentMenu;
