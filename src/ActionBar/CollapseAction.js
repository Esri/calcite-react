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

import { StyledCollapseAction, TooltipWrapperStyles } from './ActionBar-styled';

import Tooltip from '../Tooltip';

import ChevronsRight from 'calcite-ui-icons-react/ChevronsRightIcon';
import ChevronsLeft from 'calcite-ui-icons-react/ChevronsLeftIcon';

const CollapseAction = ({
  children,
  collapsed,
  expandLabel,
  collapseLabel,
  dark,
  ...other
}) => {
  const getAction = action => {
    if (!collapsed) {
      return action;
    }

    return (
      <Tooltip
        title={expandLabel}
        placement="right"
        targetWrapperStyle={TooltipWrapperStyles}
      >
        {action}
      </Tooltip>
    );
  };

  return getAction(
    <StyledCollapseAction
      icon={
        collapsed ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />
      }
      dark={dark}
      {...other}
    >
      {!collapsed && collapseLabel}
    </StyledCollapseAction>
  );
};

CollapseAction.propTypes = {
  /** The content of the component; should be TabNav and TabContents. */
  children: PropTypes.node
};

CollapseAction.defaultProps = {};

CollapseAction.displayName = 'CollapseAction';

export default CollapseAction;
