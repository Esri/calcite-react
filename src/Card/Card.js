import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import { StyledCard } from './Card-styled';

const CardContext = createContext();

const Card = ({ children, bar, shaped, wide, withComponent, ...other }) => {
  const cardContext = {
    shaped,
    wide
  };

  return (
    <CardContext.Provider value={{ cardContext }}>
      <StyledCard bar={bar} shaped={shaped} wide={wide} {...other}>
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
  wide: PropTypes.bool,
  /** Description TBD */
  withComponent: PropTypes.node
};

Card.defaultProps = {};

export { Card as default, CardContext };
