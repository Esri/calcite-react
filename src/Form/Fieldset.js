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

import { StyledFieldset } from './Form-styled';

import { FormControlContext } from './FormControl';

const FieldsetContext = createContext({
  fieldsetContext: {
    name: undefined
  }
});
FieldsetContext.displayName = 'FieldsetContext';

const Fieldset = ({ children, name, ...other }) => {
  const fieldsetContext = useContextState({
    name
  });
  const formControlContext = useContext(FormControlContext);

  return (
    <FieldsetContext.Provider value={fieldsetContext}>
      <StyledFieldset horizontal={formControlContext.horizontal} {...other}>
        {children}
      </StyledFieldset>
    </FieldsetContext.Provider>
  );
};

Fieldset.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** The HTML name property applied to the contained radios and checkboxes. */
  name: PropTypes.string.isRequired
};

Fieldset.defaultProps = {};

Fieldset.displayName = 'Fieldset';

export { Fieldset as default, FieldsetContext };
