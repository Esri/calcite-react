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
import React, { Children, isValidElement, createContext } from 'react';

import { StyledTab } from './Tab-styled';
import { TabNav, TabContents } from './';

const TabsContext = createContext({
  tabsContext: {
    activeTabKey: undefined,
    onTabChange: undefined,
    gray: undefined,
    transparent: undefined,
    translucent: undefined,
    dark: undefined
  }
});

const Tabs = ({
  children,
  activeTabKey,
  onTabChange,
  gray,
  transparent,
  translucent,
  dark,
  ...other
}) => {
  const tabsContext = {
    activeTabKey,
    onTabChange,
    gray,
    transparent,
    translucent,
    dark
  };

  const getTabTitles = children => {
    return Children.map(children, ({ title, tabKey, titleStyles }, i) => {
      // If they don't provide a tabKey prop we'll just use the index
      const key = tabKey !== undefined ? tabKey : i;

      return (
        <TabNav
          activeTabKey={activeTabKey}
          onTabChange={onTabChange}
          gray={gray}
          transparent={transparent}
          translucent={translucent}
          dark={dark}
          title={title}
          tabKey={key}
          key={key}
          titleStyles={titleStyles}
        >
          {title}
        </TabNav>
      );
    });
  };

  return (
    <TabsContext.Provider value={{ tabsContext }}>
      <StyledTab
        gray={gray}
        transparent={transparent}
        translucent={translucent}
        dark={dark}
        {...other}
      >
        <TabNav
          gray={gray}
          transparent={transparent}
          translucent={translucent}
          dark={dark}
        >
          {getTabTitles(children)}
        </TabNav>
        <TabContents
          gray={gray}
          transparent={transparent}
          translucent={translucent}
          dark={dark}
        >
          {getTabSections(children)}
        </TabContents>
      </StyledTab>
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  /** The content of the component; should be TabNav and TabContents. */
  children: PropTypes.node,
  /** The index of the Tab that should be selected and visible. */
  activeTabIndex: PropTypes.number,
  /** Function callback when a TabTitle is clicked. */
  onTabChange: PropTypes.func,
  /** Style prop to render a gray Tab. */
  gray: PropTypes.bool,
  /** Style prop to render a transparent Tab. */
  transparent: PropTypes.bool,
  /** Style prop to render a translucent Tab. */
  translucent: PropTypes.bool,
  /** Style prop to render a dark Tab. */
  dark: PropTypes.bool
};

Tabs.defaultProps = {
  activeTabIndex: 0,
  onTabChange: () => {}
};

Tabs.displayName = 'Tabs';

export { Tabs as default, TabsContext };
