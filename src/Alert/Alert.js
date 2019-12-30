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
import {
  StyledAlert,
  StyledAlertIcon,
  StyledAlertContent,
  StyledAlertClose
} from './Alert-styled';

import XIcon from 'calcite-ui-icons-react/XIcon';
import LightbulbIcon from 'calcite-ui-icons-react/LightbulbIcon';
import CheckCircleIcon from 'calcite-ui-icons-react/CheckCircleIcon';
import ExclamationMarkTriangleIcon from 'calcite-ui-icons-react/ExclamationMarkTriangleIcon';

const Alert = ({
  children,
  showIcon,
  icon,
  showCloseLabel,
  closeLabel,
  onClose,
  blue,
  green,
  yellow,
  red,
  ...other
}) => {
  const getAlertIcon = () => {
    let defaultIcon;
    if (green) {
      defaultIcon = <CheckCircleIcon filled size={16} />;
    } else if (yellow) {
      defaultIcon = <ExclamationMarkTriangleIcon filled size={16} />;
    } else if (red) {
      defaultIcon = <ExclamationMarkTriangleIcon filled size={16} />;
    } else {
      defaultIcon = <LightbulbIcon filled size={16} />;
    }

    return <StyledAlertIcon>{icon || defaultIcon}</StyledAlertIcon>;
  };

  const getAlertClose = () => {
    return <StyledAlertClose onClick={onClose}>{closeLabel}</StyledAlertClose>;
  };

  return (
    <StyledAlert blue={blue} green={green} yellow={yellow} red={red} {...other}>
      {showIcon && getAlertIcon()}
      <StyledAlertContent>{children}</StyledAlertContent>
      {showCloseLabel && getAlertClose()}
    </StyledAlert>
  );
};

Alert.propTypes = {
  /** Components to be rendered within the Alert. */
  children: PropTypes.node,
  /** Toggles visibility of the icon */
  showIcon: PropTypes.bool,
  /** Manually set an icon rather than use the default */
  icon: PropTypes.node,
  /** Color modifier for the Alert. */
  blue: PropTypes.bool,
  /** Color modifier for the Alert. */
  green: PropTypes.bool,
  /** Color modifier for the Alert. */
  yellow: PropTypes.bool,
  /** Color modifier for the Alert. */
  red: PropTypes.bool,
  /** Full-width modifier for the Alert. */
  full: PropTypes.bool,
  /**  */
  showCloseLabel: PropTypes.bool,
  /** Display label used to close the Alert. */
  closeLabel: PropTypes.node,
  /** Callback function fired when the close link is clicked. */
  onClose: PropTypes.func
};

Alert.defaultProps = {
  closeLabel: <XIcon size={16} />,
  onClose: () => {}
};

Alert.displayName = 'Alert';

export default Alert;
