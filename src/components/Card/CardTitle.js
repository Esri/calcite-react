import PropTypes from 'prop-types';
import React from 'react';
import { StyledCardTitle } from './Card-styled';

const CardTitle = ({ children, ...other }) => {
  const cardTitle = <StyledCardTitle {...other}>{children}</StyledCardTitle>;

  return cardTitle;
};

CardTitle.propTypes = {
  children: PropTypes.node
};

CardTitle.defaultProps = {};

export default CardTitle;
