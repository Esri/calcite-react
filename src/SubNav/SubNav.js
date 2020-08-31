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
import { useContextState } from '../utils/helpers';

import { StyledSubNav, StyledSubNavContent } from './SubNav-styled';

import { getChildType } from '../utils/helpers';

const SubNavContext = createContext({
  legacy: undefined,
  blue: undefined,
  backgroundColor: 'blue'
});
SubNavContext.displayName = 'SubNavContext';

const SubNav = ({ children, blue, backgroundColor, legacy, ...other }) => {
  const subNavContext = useContextState({
    legacy,
    blue,
    backgroundColor
  });

  const getContent = function() {
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
    <SubNavContext.Provider value={subNavContext}>
      <StyledSubNav
        backgroundColor={subNavContext.backgroundColor}
        legacy={subNavContext.legacy}
        blue={subNavContext.blue}
        {...other}
      >
        <StyledSubNavContent legacy={subNavContext.legacy}>
          {getContent()}
        </StyledSubNavContent>
        {legacy && getSubNavActions()}
      </StyledSubNav>
    </SubNavContext.Provider>
  );
};

SubNav.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** Background color of SubNav. Accepts colors from CalciteTheme (ex. blue) or color values (ex. #b9e0f7 or rgb(0,0,0)).*/
  backgroundColor: PropTypes.string,
  /** The background image src. WARNING - only supported with legacy SubNav. */
  backgroundImage: PropTypes.node,
  /** If true, the gradient is applied on top of the image. WARNING - only supported with legacy SubNav. */
  overlayGradient: PropTypes.bool,
  /** The gradient overlay color to start from the left of the SubNav. WARNING - only supported with legacy SubNav. */
  gradientFromColor: PropTypes.string,
  /** The gradient overlay color to end on the right of the SubNav. WARNING - only supported with legacy SubNav. */
  gradientToColor: PropTypes.string,
  /** Should the SubNav use legacy styles. */
  legacy: PropTypes.bool,
  /** A style prop to render the SubNav with a blue background. WARNING - only supported with legacy SubNav.*/
  blue: PropTypes.bool,
  /** Override for contentWidth from theme provider (ex. '1300px').*/
  contentWidth: PropTypes.string,
  /** Override for contentMaxWidth from theme provider (ex. '95vw').*/
  contentMaxWidth: PropTypes.string
};

SubNav.defaultProps = {
  backgroundColor: 'blue',
  overlayGradient: true
};

SubNav.displayName = 'SubNav';

export { SubNav as default, SubNavContext };
