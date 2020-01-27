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
import React, { useContext, createContext } from 'react';
import { useContextState } from '../utils/helpers';

import uniqid from 'uniqid';
import { StyledFormControl } from './Form-styled';

import { FormContext } from './Form';

const FormControlContext = createContext({
  horizontal: undefined,
  error: undefined,
  success: undefined,
  _generatedId: undefined
});
FormControlContext.displayName = 'FormControlContext';

const FormControl = ({ children, error, success, horizontal, ...other }) => {
  const _generatedId = uniqid();
  const formControlContext = useContextState({
    horizontal,
    error,
    success,
    _generatedId
  });
  const formContext = useContext(FormContext);

  return (
    <FormControlContext.Provider value={formControlContext}>
      <StyledFormControl
        error={error}
        success={success}
        horizontal={horizontal}
        noValidation={formContext.noValidation}
        {...other}
      >
        {children}
      </StyledFormControl>
    </FormControlContext.Provider>
  );
};

FormControl.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** The FormControl should show an error. */
  error: PropTypes.bool,
  /** The FormControl should show success. */
  success: PropTypes.bool,
  /** The FormControl should layout as horizontal elements. */
  horizontal: PropTypes.bool,
  /** If the FormControl doesn't need validation, you can set this to true to tighten up the bottom margin. */
  noValidation: PropTypes.bool
};

FormControl.defaultProps = {};

FormControl.displayName = 'FormControl';

export { FormControl as default, FormControlContext };
