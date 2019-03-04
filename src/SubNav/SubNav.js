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
import React, { Children, createContext } from 'react';

import { StyledSubNav, StyledSubNavLeftContent } from './SubNav-styled';

import { getChildType } from '../utils/helpers';

const SubNavContext = createContext({
  subNavContext: {
    blue: undefined
  }
});

const SubNav = ({ children, blue, ...other }) => {
  const subNavContext = {
    blue
  };

  const getLeftContent = function() {
    return Children.toArray(children).filter(child => {
      return (
        getChildType(child) === 'SubNavTitle' ||
        getChildType(child) === 'SubNavList'
      );
    });
  };

  const getSubNavActions = function() {
    return Children.toArray(children).filter(child => {
      return getChildType(child) === 'SubNavActions';
    });
  };

  return (
    <SubNavContext.Provider value={{ subNavContext }}>
      <StyledSubNav blue={blue} {...other}>
        <StyledSubNavLeftContent>{getLeftContent()}</StyledSubNavLeftContent>
        {getSubNavActions()}
      </StyledSubNav>
    </SubNavContext.Provider>
  );
};

SubNav.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** A style prop to render the SubNav with a blue background. */
  blue: PropTypes.bool,
  /** The background image src. */
  backgroundImage: PropTypes.node,
  /** If true, the gradient is applied on top of the image. */
  overlayGradient: PropTypes.bool,
  /** The gradient overlay color to start from the left of the SubNav. */
  gradientFromColor: PropTypes.string,
  /** The gradient overlay color to end on the right of the SubNav. */
  gradientToColor: PropTypes.string
};

SubNav.defaultProps = {
  overlayGradient: true
};

SubNav.displayName = 'SubNav';

export { SubNav as default, SubNavContext };
