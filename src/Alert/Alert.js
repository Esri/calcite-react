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
import { StyledAlert, StyledAlertClose } from './Alert-styled';

const Alert = ({ children, closeLabel, onClose, ...other }) => {
  const getAlertClose = closeLabel => {
    if (closeLabel) {
      return (
        <StyledAlertClose onClick={onClose}>{closeLabel}</StyledAlertClose>
      );
    }
  };

  return (
    <StyledAlert {...other}>
      {children}
      {getAlertClose(closeLabel)}
    </StyledAlert>
  );
};

Alert.propTypes = {
  /** Components to be rendered within the Alert. */
  children: PropTypes.node,
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
  /** Display label used to close the Alert. */
  closeLabel: PropTypes.node,
  /** Callback function fired when the close link is clicked. */
  onClose: PropTypes.func
};

Alert.defaultProps = {
  onClose: () => {}
};

Alert.displayName = 'Alert';

export default Alert;
