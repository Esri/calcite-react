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
import React, { createContext, forwardRef } from 'react';
import { StyledCard } from './Card-styled';

const CardContext = createContext({
  cardContext: {
    shaped: undefined,
    wide: undefined
  }
});

const Card = forwardRef(({ children, shaped, wide, ...other }, ref) => {
  const cardContext = {
    shaped,
    wide
  };

  return (
    <CardContext.Provider value={{ cardContext }}>
      <StyledCard shaped={shaped} wide={wide} ref={ref} {...other}>
        {children}
      </StyledCard>
    </CardContext.Provider>
  );
});

Card.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** Style prop to show a colored bar across the top of the Card; can take a string for any color name in EsriColors. */
  bar: PropTypes.string,
  /** Style prop to add a shape mask to the CardImage. */
  shaped: PropTypes.bool,
  /** Style prop to position Card content horizontally and fill the width of its container. */
  wide: PropTypes.bool
};

Card.defaultProps = {};

Card.displayName = 'Card';

export { Card as default, CardContext };
