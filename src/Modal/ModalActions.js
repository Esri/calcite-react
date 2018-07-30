import PropTypes from 'prop-types';
import React from 'react';

import { StyledModalActions } from './Modal-styled';

const ModalActions = ({ children, ...other }) => {
  return <StyledModalActions {...other}>{children}</StyledModalActions>;
};

ModalActions.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ModalActions.defaultProps = {};

export default ModalActions;
