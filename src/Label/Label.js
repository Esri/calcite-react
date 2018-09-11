import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';
import { StyledLabel } from './Label-styled';

const Label = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledLabel ref={forwardedRef} {...other}>
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  /** Content of the label */
  children: PropTypes.node,
  /** Blue style label */
  blue: PropTypes.bool,
  /** Green style label */
  green: PropTypes.bool,
  /** Yellow style label */
  yellow: PropTypes.bool,
  /** Red style label */
  red: PropTypes.bool
};

Label.defaultProps = {};

export default withRefs(Label);
