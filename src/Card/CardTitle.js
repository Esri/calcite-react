import PropTypes from 'prop-types';
import React from 'react';
import { StyledCardTitle } from './Card-styled';

const CardTitle = ({ children, ...other }) => {
  return <StyledCardTitle {...other}>{children}</StyledCardTitle>;
};

CardTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

CardTitle.defaultProps = {};

CardTitle.displayName = 'CardTitle';

export default CardTitle;
