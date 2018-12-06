import PropTypes from 'prop-types';
import React from 'react';

import { StyledModalActions } from './Modal-styled';

const ModalActions = ({ children, ...other }) => {
  return <StyledModalActions {...other}>{children}</StyledModalActions>;
};

ModalActions.propTypes = {
  /** The content of teh component */
  children: PropTypes.node
};

ModalActions.defaultProps = {};

ModalActions.displayName = 'ModalActions';

export default ModalActions;
