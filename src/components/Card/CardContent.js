import PropTypes from 'prop-types';
import React from 'react';
import { StyledCardContent } from './Card-styled';

const CardContent = ({ children, wide, shaped, ...other }) => {
  const panelText = (
    <StyledCardContent wide shaped {...other}>
      {children}
    </StyledCardContent>
  );

  return panelText;
};

CardContent.propTypes = {
  children: PropTypes.node,
  wide: PropTypes.bool,
  shaped: PropTypes.bool
};

CardContent.defaultProps = {};

export default CardContent;
