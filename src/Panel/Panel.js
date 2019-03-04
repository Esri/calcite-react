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

import { StyledPanel } from './Panel-styled';

const Panel = ({ children, ...other }) => {
  return <StyledPanel {...other}>{children}</StyledPanel>;
};

Panel.propTypes = {
  /** Content of the Panel. */
  children: PropTypes.node,
  /** Hide the border of the Panel. */
  noBorder: PropTypes.bool,
  /** Remove the padding from the Panel. */
  noPadding: PropTypes.bool,
  /** Dark style Panel. */
  dark: PropTypes.bool,
  /** Black style Panel. */
  black: PropTypes.bool,
  /** White style Panel. */
  white: PropTypes.bool,
  /** Light Blue style Panel. */
  lightBlue: PropTypes.bool,
  /** Blue style Panel. */
  blue: PropTypes.bool,
  /** Dark Blue style Panel. */
  darkBlue: PropTypes.bool
};

Panel.defaultProps = {};

Panel.displayName = 'Panel';

export default Panel;
