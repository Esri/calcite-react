// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import {
  StyledArcgisAccountContentInfo,
  StyledArcgisAccountContentName,
  StyledArcgisAccountContentId,
  StyledArcgisAccountContentGroup
} from './ArcgisAccount-styled';

// App components
import CalciteTheme from '../theme/CalciteTheme';
import Avatar from '../Avatar';

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const ArcgisAccountMenu = ({ user, thumbnail, ...other }) => {
  return (
    <StyledArcgisAccountContentInfo {...other}>
      <Avatar
        src={thumbnail}
        size={120}
        style={{
          border: `2px solid ${CalciteTheme.palette.white}`,
          boxShadow: `0 0 0 3px ${CalciteTheme.palette.blue}`,
          marginBottom: CalciteTheme.baseline
        }}
      />
      <StyledArcgisAccountContentName>
        {user.fullName}
      </StyledArcgisAccountContentName>
      <StyledArcgisAccountContentId>
        {user.username}
      </StyledArcgisAccountContentId>
      <StyledArcgisAccountContentGroup>
        {user.role}
      </StyledArcgisAccountContentGroup>
    </StyledArcgisAccountContentInfo>
  );
};

ArcgisAccountMenu.propTypes = {
  user: PropTypes.object
};

ArcgisAccountMenu.defaultProps = {};

export default ArcgisAccountMenu;
