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
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  blue: PropTypes.bool,
  /** Description TBD */
  green: PropTypes.bool,
  /** Description TBD */
  yellow: PropTypes.bool,
  /** Description TBD */
  red: PropTypes.bool
};

Label.defaultProps = {};

export default Label;
