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
  /** User profile avatar image. */
  avatar: PropTypes.node,
  /** User's full name. */
  fullName: PropTypes.string,
  /** User's AGOL username. */
  username: PropTypes.string,
  /** Boolean toggle for popover visibility. */
  open: PropTypes.bool
};

ArcgisAccountControl.defaultProps = {};

ArcgisAccountControl.displayName = 'ArcgisAccountControl';

export default ArcgisAccountControl;
