import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import { StyledCard } from './Card-styled';

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
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  bar: PropTypes.string,
  /** Description TBD */
  shaped: PropTypes.bool,
  /** Description TBD */
  wide: PropTypes.bool
};

Card.defaultProps = {};

export { Card as default, CardContext };
