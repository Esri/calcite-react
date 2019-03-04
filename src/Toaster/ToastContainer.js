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

// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import { StyledCloseButton } from './Toaster-styled';

// App components
import XIcon from 'calcite-ui-icons-react/XIcon';

// Third-party components (buttons, icons, etc.)
import { ToastContainer as ToasterContainer } from 'react-toastify';

// JSON

// CSS

const ToastContainer = ({ ...other }) => {
  const CloseButton = ({ closeToast }) => (
    <StyledCloseButton
      type="button"
      iconButton
      icon={<XIcon size={20} />}
      onClick={closeToast}
    />
  );

  return <ToasterContainer closeButton={<CloseButton />} {...other} />;
};

ToastContainer.propTypes = {
  /* Toggle default visibility of the progress bar in a Toaster. */
  showProgress: PropTypes.bool
};

ToastContainer.defaultProps = {};

ToastContainer.displayName = 'ToastContainer';

export default ToastContainer;
