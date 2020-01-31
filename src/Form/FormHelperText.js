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
import { StyledFormHelperText } from './Form-styled';

import { FormControlContext } from './FormControl';

const FormHelperText = ({ children, ...other }) => {
  const formControlContext = useContext(FormControlContext);

  return (
    <StyledFormHelperText
      error={formControlContext.error}
      success={formControlContext.success}
      {...other}
    >
      {children}
    </StyledFormHelperText>
  );
};

FormHelperText.propTypes = {
  /** The text content of the component. */
  children: PropTypes.node,
  /** The FormHelperText should display as an error. */
  error: PropTypes.bool,
  /** The FormHelperText should display as successful. */
  success: PropTypes.bool
};

FormHelperText.defaultProps = {};

FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;
