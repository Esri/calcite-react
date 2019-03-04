// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

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
import { CalciteTheme } from '../CalciteThemeProvider';

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const ArcgisAccountContentInfo = ({ user, portal, avatar, ...other }) => {
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

ArcgisAccountContentInfo.propTypes = {
  /** AGOL user object */
  user: PropTypes.object
};

ArcgisAccountContentInfo.defaultProps = {};

ArcgisAccountContentInfo.displayName = 'ArcgisAccountContentInfo';

export default ArcgisAccountContentInfo;
