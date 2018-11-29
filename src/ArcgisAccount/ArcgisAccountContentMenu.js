// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules
import withRefs from '../utils/withRefs';

// Component specific modules (Component-styled, etc.)
import { StyledArcgisAccountContentMenu } from './ArcgisAccount-styled';

// App components

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const ArcgisAccountMenu = ({ children, user, forwardedRef, ...other }) => {
  return (
    <StyledArcgisAccountContentMenu ref={forwardedRef} {...other}>
      {children}
    </StyledArcgisAccountContentMenu>
  );
};

ArcgisAccountMenu.propTypes = {
  /** Content of the StyledArcgisAccountContentMenu */
  children: PropTypes.node,
  /** AGOL user object */
  user: PropTypes.object
};

ArcgisAccountMenu.defaultProps = {};

ArcgisAccountMenu.displayName = 'ArcgisAccountMenu';

export default withRefs(ArcgisAccountMenu);
