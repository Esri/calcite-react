// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules
import withRefs from '../utils/withRefs';

// Component specific modules (Component-styled, etc.)
import { StyledArcgisAccountMenuItem } from './ArcgisAccount-styled';

// App components

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const ArcgisAccountMenuItem = withRefs(
  ({ children, forwardedRef, ...other }) => {
    return (
      <StyledArcgisAccountMenuItem ref={forwardedRef} {...other}>
        {children}
      </StyledArcgisAccountMenuItem>
    );
  }
);

ArcgisAccountMenuItem.propTypes = {
  /** Content node of the menu item */
  children: PropTypes.node
};

ArcgisAccountMenuItem.defaultProps = {};

ArcgisAccountMenuItem.displayName = 'ArcgisAccountMenuItem';

export default ArcgisAccountMenuItem;
