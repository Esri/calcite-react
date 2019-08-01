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

import React from 'react';
import PropTypes from 'prop-types';

import { TabsContext } from './Tabs';

import { StyledTabContents } from './Tab-styled';

const TabContents = ({ children, ...other }) => {
  return (
    <TabsContext.Consumer>
      {({ tabsContext }) => (
        <StyledTabContents
          gray={tabsContext.gray}
          transparent={tabsContext.transparent}
          translucent={tabsContext.translucent}
          dark={tabsContext.dark}
          {...other}
        >
          {children}
        </StyledTabContents>
      )}
    </TabsContext.Consumer>
  );
};

TabContents.propTypes = {
  /** The content of the component; should be a number of TabSections. */
  children: PropTypes.node
};

TabContents.displayName = 'TabContents';

export default TabContents;
