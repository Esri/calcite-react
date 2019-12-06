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

import {
  StyledActionBar,
  StyledActionBarCollapseContainer
} from './ActionBar-styled';

import CollapseAction from './CollapseAction';

const ActionBarContext = createContext({
  actionBarContext: {
    dark: undefined,
    collapsed: undefined
  }
});

const ActionBar = ({
  children,
  dark,
  showCollapser,
  collapsed,
  collapseLabel,
  expandLabel,
  onToggleCollapse,
  ...other
}) => {
  const actionBarContext = {
    dark,
    collapsed
  };

  return (
    <ActionBarContext.Provider value={{ actionBarContext }}>
      <StyledActionBar dark={dark} collapsed={collapsed} {...other}>
        {children}
        {showCollapser && (
          <StyledActionBarCollapseContainer>
            <CollapseAction
              dark={dark}
              collapsed={collapsed}
              collapseLabel={collapseLabel}
              expandLabel={expandLabel}
              onClick={onToggleCollapse}
            />
          </StyledActionBarCollapseContainer>
        )}
      </StyledActionBar>
    </ActionBarContext.Provider>
  );
};

ActionBar.propTypes = {
  /** The content of the component; should be TabNav and TabContents. */
  children: PropTypes.node,
  /** Style prop to render a dark ActionBar. */
  dark: PropTypes.bool,
  /** Toggle visibility of the collapser control at the bottom of the ActionBar */
  showCollapser: PropTypes.bool,
  /** Programatically control collapsed state of the ActionBar */
  collapsed: PropTypes.bool,
  /** Label used in the collapser */
  collapseLabel: PropTypes.node,
  /** Label used in the collapser tooltip when collapsed */
  expandLabel: PropTypes.node,
  /** Event callback when the collapser is clicked */
  onToggleCollapse: PropTypes.func
};

ActionBar.defaultProps = {
  showCollapser: true,
  collapseLabel: 'Collapse',
  expandLabel: 'Expand',
  onToggleCollapse: () => {}
};

ActionBar.displayName = 'ActionBar';

export { ActionBar as default, ActionBarContext };
