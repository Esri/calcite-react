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
import React, { createContext } from 'react';
import { useContextState } from '../utils/helpers';

import { StyledBreadcrumbs } from './Breadcrumbs-styled';

const BreadcrumbsContext = createContext({
  breadcrumbsContext: {
    white: undefined,
    dividerCharacter: undefined
  }
});
BreadcrumbsContext.displayName = 'BreadcrumbsContext';

const Breadcrumbs = ({ children, white, dividerCharacter, ...other }) => {
  const breadcrumbsContext = useContextState({
    white,
    dividerCharacter
  });

  return (
    <BreadcrumbsContext.Provider value={breadcrumbsContext}>
      <StyledBreadcrumbs {...other}>{children}</StyledBreadcrumbs>
    </BreadcrumbsContext.Provider>
  );
};

Breadcrumbs.propTypes = {
  /** Crumb components to be rendered within Breadcrumbs. */
  children: PropTypes.node,
  /** Color modifier for the Breadcrumbs. */
  white: PropTypes.bool,
  /** The character used as a divider between Crumbs */
  dividerCharacter: PropTypes.node
};

Breadcrumbs.defaultProps = {
  dividerCharacter: '/'
};

Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs as default, BreadcrumbsContext };
