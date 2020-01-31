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
import React, { createContext } from 'react';
import { useContextState } from '../utils/helpers';

import { StyledForm } from './Form-styled';

const FormContext = createContext({ noValidation: false });
FormContext.displayName = 'FormContext';

const Form = ({ children, noValidation, ...other }) => {
  const formContext = useContextState({
    noValidation
  });

  return (
    <FormContext.Provider value={formContext}>
      <StyledForm {...other}>{children}</StyledForm>
    </FormContext.Provider>
  );
};

Form.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** Display prop to make Forms align items horizontally instead of vertically. */
  horizontal: PropTypes.bool,
  /** If the FormControl doesn't need validation, you can set this to true to tighten up the bottom margin. */
  noValidation: PropTypes.bool
};

Form.defaultProps = {};

Form.displayName = 'Form';

export { Form as default, FormContext };
