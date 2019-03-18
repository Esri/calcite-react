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
import { StyledMenuItem, StyledMenuItemSubtitle } from './Menu-styled';

const MenuItem = ({ children, subtitle, ...other }) => {
  const getSubtitle = subtitle => {
    if (subtitle) {
      return <StyledMenuItemSubtitle>{subtitle}</StyledMenuItemSubtitle>;
    }
  };

  return (
    <StyledMenuItem {...other}>
      <span>{children}</span>
      {getSubtitle(subtitle)}
    </StyledMenuItem>
  );
};

MenuItem.propTypes = {
  /** Content of the MenuItem. */
  children: PropTypes.node,
  /** A container for content to be displayed right aligned in the MenuItem. */
  subtitle: PropTypes.node,
  /** Toggle the disabled state of the MenuItem, results in the item being unselectable and slightly lower opacity */
  disabled: PropTypes.bool
};

MenuItem.defaultProps = {};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
