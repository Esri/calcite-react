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

import { StyledAction, TooltipWrapperStyles } from './ActionBar-styled';

import Tooltip from '../Tooltip';

import { ActionBarContext } from './ActionBar';

const Action = ({ children, icon, ...other }) => {
  const actionBarContext = useContext(ActionBarContext);

  const getIcon = icon => {
    return React.cloneElement(icon, {
      size: 16
    });
  };

  const actionButton = (
    <StyledAction
      dark={actionBarContext.dark}
      collapsed={actionBarContext.collapsed}
      position={actionBarContext.position}
      icon={getIcon(icon)}
      {...other}
    >
      {!actionBarContext.collapsed && children}
    </StyledAction>
  );

  return actionBarContext.collapsed ? (
    <Tooltip
      title={children}
      placement={actionBarContext.position === 'start' ? 'right' : 'left'}
      targetWrapperStyle={TooltipWrapperStyles}
    >
      {actionButton}
    </Tooltip>
  ) : (
    actionButton
  );
};

Action.propTypes = {
  /** The content of the component */
  children: PropTypes.node,
  /** Sets the action as the selected item in the ActionBar */
  active: PropTypes.bool
};

Action.defaultProps = {};

Action.displayName = 'Action';

export default Action;
