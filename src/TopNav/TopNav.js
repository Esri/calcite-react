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

import PropTypes from 'prop-types';
import React from 'react';

import { StyledTopNav, StyledTopNavContainer } from './TopNav-styled';

const TopNav = ({ children, contentWidth, contentMaxWidth, ...other }) => {
  return (
    <StyledTopNavContainer>
      <StyledTopNav
        contentWidth={contentWidth}
        contentMaxWidth={contentMaxWidth}
        {...other}
      >
        {children}{' '}
      </StyledTopNav>
    </StyledTopNavContainer>
  );
};

TopNav.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** Override for contentWidth from CalciteThemeProvider (ex. '1300px'). Use "100%" for full width TopNav. */
  contentWidth: PropTypes.string,
  /** Override for contentMaxWidth from theme provider (ex. '95vw').*/
  contentMaxWidth: PropTypes.string
};

TopNav.defaultProps = {};

TopNav.displayName = 'TopNav';

export default TopNav;
