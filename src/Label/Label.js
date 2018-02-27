import PropTypes from 'prop-types';
import React from 'react';
import { StyledLabel } from './Label-styled';

const Label = ({ children, blue, green, yellow, red, ...other }) => {
  const label = (
    <StyledLabel blue={blue} green={green} yellow={yellow} red={red} {...other}>
      {children}
    </StyledLabel>
  );

  return label;
};

Label.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool,
  green: PropTypes.bool,
  yellow: PropTypes.bool,
  red: PropTypes.bool
};

Label.defaultProps = {
  blue: false,
  green: false,
  yellow: false,
  red: false
};

export default Label;
