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

import { StyledToaster, StyledCloseButton } from './Toaster-styled';

import {
  StyledAlertContent,
  StyledAlertIcon,
  StyledAlertMessage
} from '../Alert/Alert-styled';

// App components
import XIcon from 'calcite-ui-icons-react/XIcon';
import LightbulbIcon from 'calcite-ui-icons-react/LightbulbIcon';
import CheckCircleIcon from 'calcite-ui-icons-react/CheckCircleIcon';
import ExclamationMarkTriangleIcon from 'calcite-ui-icons-react/ExclamationMarkTriangleIcon';

const getAlertIcon = type => {
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

// Wraps the content in a <ToastMessage /> component for styling
// if they only passed a string of content
const wrapContentMessage = content => {
  if (content && typeof content === 'string') {
    return <StyledAlertMessage>{content}</StyledAlertMessage>;
  }

  return content;
};

const CloseButton = ({ closeToast }) => (
  <StyledCloseButton
    type="button"
    iconButton
    icon={<XIcon size={16} />}
    onClick={closeToast}
  />
);

const notify = (
  content,
  { type, showProgress, showIcon, toastId, ...other } = {}
) => {
  let progressClassName = '';
  if (showProgress) {
    progressClassName = 'progress-visible';
  } else if (showProgress === false) {
    progressClassName = 'progress-hidden';
  }

  if (!toastId || !toast.isActive(toastId)) {
    // If no ToastContainer has been mounted yet we can do that here
    if (!document.getElementsByClassName('Toastify')) {
      toast.configure({
        className: 'calcite-react-toastify',
        closeButton: <CloseButton />
      });
    }

    toastId = toast(
      (
        <StyledToaster type={type}>
          {showIcon && getAlertIcon(type)}
          <StyledAlertContent>{wrapContentMessage(content)}</StyledAlertContent>
        </StyledToaster>
      ) || '',
      {
        progressClassName,
        type,
        ...other
      }
    );
  }

  // Returning toastId will allow users to access id of specific toaster, which will let them manipulate that specific toaster only, if desired.
  return toastId;
};

class Toaster extends Component {
  toastId = null;

  componentDidMount() {
    console.warn(
      'Depracation warning: Using <Toaster /> as a rendered component is deprecated. Please use notify(content, options). See https://calcite-react.netlify.com/toaster for more info.'
    );

    const { children, open, ...other } = this.props;

    if (open) {
      notify(children, {
        toastId: this.toastId,
        ...other
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { children, open, ...other } = this.props;

    if (open) {
      notify(children, {
        toastId: this.toastId,
        ...other
      });
    }
  }

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

export { Toaster as default, notify, toast };
