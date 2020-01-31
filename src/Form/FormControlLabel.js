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

import { StyledFormControlLabel } from './Form-styled';

import { FormControlContext } from './FormControl';

const FormControlLabel = ({ children, htmlFor, ...other }) => {
  const formControlContext = useContext(FormControlContext);

  return (
    <StyledFormControlLabel
      htmlFor={formControlContext._generatedId}
      error={formControlContext.error}
      success={formControlContext.success}
      horizontal={formControlContext.horizontal}
      {...other}
    >
      {children}
    </StyledFormControlLabel>
  );
};

FormControlLabel.propTypes = {
  /** The text content of the component. */
  children: PropTypes.node,
  /** The for property to be applied to the label; should match a form element id. */
  htmlFor: PropTypes.string,
  /** The FormControlLabel should show an error. */
  error: PropTypes.bool,
  /** The FormControlLabel should show success. */
  success: PropTypes.bool,
  /** Display prop to make this element align items horizontally instead of vertically. */
  horizontal: PropTypes.bool
};

FormControlLabel.defaultProps = {};

FormControlLabel.displayName = 'FormControlLabel';

export default FormControlLabel;
