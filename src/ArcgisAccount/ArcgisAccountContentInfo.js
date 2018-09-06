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

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const ArcgisAccountMenu = ({ user, portal, avatar, ...other }) => {
  const _avatar = React.cloneElement(avatar, {
    style: {
      border: `2px solid ${CalciteTheme.palette.white}`,
      boxShadow: `0 0 0 3px ${CalciteTheme.palette.blue}`,
      marginBottom: CalciteTheme.baseline
    }
  });

  return (
    <StyledArcgisAccountContentInfo {...other}>
      {_avatar}
      <StyledArcgisAccountContentName>
        {user.fullName}
      </StyledArcgisAccountContentName>
      <StyledArcgisAccountContentId>
        {user.username}
      </StyledArcgisAccountContentId>
      <StyledArcgisAccountContentGroup>
        {portal.name}
      </StyledArcgisAccountContentGroup>
    </StyledArcgisAccountContentInfo>
  );
};

ArcgisAccountMenu.propTypes = {
  /** AGOL user object */
  user: PropTypes.object
};

ArcgisAccountMenu.defaultProps = {};

export default ArcgisAccountMenu;
