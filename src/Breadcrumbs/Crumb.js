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
import React, { useContext } from 'react';

import { StyledCrumb, StyledSpanCrumb } from './Breadcrumbs-styled';
import { BreadcrumbsContext } from './Breadcrumbs';

const Crumb = ({ children, href, hasLink, ...other }) => {
  const breadcrumbsContext = useContext(BreadcrumbsContext);

  // Render a span if there's no href or link prop
  let Crumb = StyledSpanCrumb;
  if (href || hasLink) {
    Crumb = StyledCrumb;
  }

  return (
    <Crumb {...breadcrumbsContext} {...other} href={href}>
      {children}
    </Crumb>
  );
};

Crumb.propTypes = {
  /** Text content of the Breadcrumb. */
  children: PropTypes.node,
  /** Boolean to toggle the light style for Breadcrumbs. */
  white: PropTypes.bool,
  /** href html prop */
  href: PropTypes.string,
  /** The character used as a divider between Crumbs; by default it will inherit the parent Breadcrumbs dividerCharacter */
  dividerCharacter: PropTypes.node
};

Crumb.defaultProps = {};

Crumb.displayName = 'Crumb';

export default Crumb;
