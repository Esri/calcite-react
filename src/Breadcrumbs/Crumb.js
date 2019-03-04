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
import { StyledCrumb, StyledSpanCrumb } from './Breadcrumbs-styled';
import { BreadcrumbsContext } from './Breadcrumbs';

const Crumb = ({ children, href, hasLink, ...other }) => {
  let Crumb = StyledSpanCrumb;

  if (href || hasLink) {
    Crumb = StyledCrumb;
  }

  return (
    <BreadcrumbsContext.Consumer>
      {({ breadcrumbsContext }) => (
        <Crumb {...breadcrumbsContext} {...other} href={href}>
          {children}
        </Crumb>
      )}
    </BreadcrumbsContext.Consumer>
  );
};

Crumb.propTypes = {
  /** Text content of the Breadcrumb. */
  children: PropTypes.node,
  /** Boolean to toggle the light style for Breadcrumbs. */
  white: PropTypes.bool,
  /** href html prop */
  href: PropTypes.string
};

Crumb.defaultProps = {};

Crumb.displayName = 'Crumb';

export default Crumb;
