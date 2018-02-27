import PropTypes from 'prop-types';
import React from 'react';
import { StyledAlert, StyledAlertClose } from './Alert-styled';

const Alert = ({ children, closeLabel, onClose, ...other }) => {
  let alertClose;
  if (closeLabel) {
    alertClose = (
      <StyledAlertClose onClick={onClose}>{closeLabel}</StyledAlertClose>
    );
  }

  const alert = (
    <StyledAlert {...other}>
      {children}
      {alertClose}
    </StyledAlert>
  );

  return alert;
};

Alert.propTypes = {
  children: PropTypes.node,
  closeLabel: PropTypes.string,
  onClose: PropTypes.func
};

Alert.defaultProps = {};

export default Alert;
