import PropTypes from 'prop-types';
import React from 'react';
import { h4 } from '../../utils/elements';

const CardTitle = ({ children, ...other }) => {
  const StyledCardTitle = h4.extend`
    margin-bottom: 0.775rem;
  `;

  const cardTitle = <StyledCardTitle {...other}>{children}</StyledCardTitle>;

  return cardTitle;
};

CardTitle.propTypes = {
  children: PropTypes.node
};

CardTitle.defaultProps = {};

export default CardTitle;
