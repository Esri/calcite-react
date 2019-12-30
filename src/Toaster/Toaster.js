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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StyledToaster } from './Toaster-styled';

import { StyledAlertContent, StyledAlertIcon } from '../Alert/Alert-styled';

import LightbulbIcon from 'calcite-ui-icons-react/LightbulbIcon';
import CheckCircleIcon from 'calcite-ui-icons-react/CheckCircleIcon';
import ExclamationMarkTriangleIcon from 'calcite-ui-icons-react/ExclamationMarkTriangleIcon';

class Toaster extends Component {
  toastId = null;

  componentDidMount() {
    if (this.props.open) {
      this.notify();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.open) {
      this.notify();
    }
  }

  getAlertIcon = () => {
    const { type } = this.props;
    let defaultIcon;
    if (type === 'success') {
      defaultIcon = <CheckCircleIcon filled size={16} />;
    } else if (type === 'warning' || type === 'error') {
      defaultIcon = <ExclamationMarkTriangleIcon filled size={16} />;
    } else {
      defaultIcon = <LightbulbIcon filled size={16} />;
    }

    return <StyledAlertIcon>{defaultIcon}</StyledAlertIcon>;
  };

  notify = () => {
    const { children, type, showProgress, showIcon, ...other } = this.props;
    let progressClassName = '';
    if (showProgress) {
      progressClassName = 'progress-visible';
    } else if (showProgress === false) {
      progressClassName = 'progress-hidden';
    }

    if (!toast.isActive(this.toastId)) {
      this.toastId = toast(
        (
          <StyledToaster type={type}>
            {showIcon && this.getAlertIcon()}
            <StyledAlertContent>{children}</StyledAlertContent>
          </StyledToaster>
        ) || '',
        {
          progressClassName,
          type,
          ...other
        }
      );
    }
  };

  render() {
    return null;
  }
}

Toaster.propTypes = {
  /** Components to be rendered within the Toaster. */
  children: PropTypes.node,
  /** Type of Toaster to render; affects the background color. */
  type: PropTypes.oneOf(['default', 'success', 'info', 'warning', 'error']),
  /** Position where the Toaster will be placed on the screen. */
  position: PropTypes.oneOf([
    'top-left',
    'top-center',
    'top-right',
    'bottom-right',
    'bottom-center',
    'bottom-left'
  ]),
  /** How long the Toaster should be open for; false if it shouldn't auto close, or a duration in millisecnds for how long it should take to close. */
  autoClose: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  /** Toggle default visibility of the progress bar in a Toaster. */
  showProgress: PropTypes.bool,
  /** Toggles visibility of the icon */
  showIcon: PropTypes.bool
};

Toaster.defaultProps = {
  position: 'top-right',
  type: 'default',
  autoClose: 5000
};

Toaster.displayName = 'Toaster';

export default Toaster;
