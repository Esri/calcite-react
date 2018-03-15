import PropTypes from 'prop-types';
import React from 'react';

import { StyledModalActions } from './Modal-styled';

const ModalActions = ({ children, ...other }) => {
  const modalActions = <StyledModalActions>{children}</StyledModalActions>;

  return modalActions;
};

ModalActions.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ModalActions.defaultProps = {};

export default ModalActions;
