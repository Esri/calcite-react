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

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { StyledTabNav } from './Tab-styled';

import { getChildType } from '../utils/helpers';

const TabNav = ({
  children,
  activeTabIndex,
  onTabChange,
  gray,
  transparent,
  translucent,
  dark,
  ...other
}) => {
  const childrenWithProps = Children.map(children, (child, itemIndex) => {
    switch (getChildType(child)) {
      case 'TabTitle':
        return React.cloneElement(child, {
          key: itemIndex,
          index: itemIndex,
          activeTabIndex,
          setActiveTabIndex: (e, itemIndex) => onTabChange(itemIndex),
          gray,
          transparent,
          translucent,
          dark
        });
      default:
        return child;
    }
  });
  return (
    <StyledTabNav
      gray={gray}
      transparent={transparent}
      translucent={translucent}
      dark={dark}
      {...other}
    >
      {childrenWithProps}
    </StyledTabNav>
  );
};

TabNav.propTypes = {
  /** The content of the component; should be a number of TabTitles. */
  children: PropTypes.node
};

TabNav.defaultProps = {
  onTabChange: () => {}
};

TabNav.displayName = 'TabNav';

export default TabNav;
