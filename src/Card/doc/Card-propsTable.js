import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import { StyledCard } from '../Card-styled';

const CardContext = createContext({
  cardContext: {
    shaped: undefined,
    wide: undefined
  }
});

const Card = ({ children, shaped, wide, ...other }) => {
  const cardContext = {
    shaped,
    wide
  };

  return (
    <CardContext.Provider value={{ cardContext }}>
      <StyledCard shaped={shaped} wide={wide} {...other}>
        {children}
      </StyledCard>
    </CardContext.Provider>
  );
};

Card.propTypes = {
  /** The content of the component */
  children: PropTypes.node,
  /** Style prop to show a colored bar across the top of the Card, can take a string for any color name in EsriColors */
  bar: PropTypes.string,
  /** Style prop to add a shape mask to the CardImage */
  shaped: PropTypes.bool,
  /** Style prop to position Card content horizontally and fill the width of its container */
  wide: PropTypes.bool
};

Card.defaultProps = {};

Card.displayName = 'Card';

export { Card as default, CardContext };
