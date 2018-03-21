// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import {
  StyledArcgisAccountControl,
  StyledArcgisAccountControlAvatar,
  StyledArcgisAccountControlNames,
  StyledArcgisAccountControlFriendlyName,
  StyledArcgisAccountControlUsername
} from './ArcgisAccount-styled';

// App components

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const ArcgisAccountControl = ({
  avatar,
  fullName,
  username,
  open,
  ...other
}) => {
  return (
    <StyledArcgisAccountControl open={open} {...other}>
      <StyledArcgisAccountControlAvatar>
        {avatar}
      </StyledArcgisAccountControlAvatar>
      <StyledArcgisAccountControlNames>
        <StyledArcgisAccountControlFriendlyName>
          {fullName}
        </StyledArcgisAccountControlFriendlyName>
        <StyledArcgisAccountControlUsername>
          {username}
        </StyledArcgisAccountControlUsername>
      </StyledArcgisAccountControlNames>
    </StyledArcgisAccountControl>
  );
};

ArcgisAccountControl.propTypes = {
  thumbnail: PropTypes.node,
  fullName: PropTypes.string,
  username: PropTypes.string,
  open: PropTypes.bool
};

ArcgisAccountControl.defaultProps = {};

export default ArcgisAccountControl;
