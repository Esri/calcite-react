import PropTypes from 'prop-types';
import React from 'react';
import { StyledAlert, StyledAlertClose } from './Alert-styled';

const Alert = ({
  children,
  red,
  yellow,
  green,
  full,
  closeLabel,
  onClose,
  ...other
}) => {
  let alertClose;
  if (closeLabel) {
    alertClose = (
      <StyledAlertClose onClick={onClose}>{closeLabel}</StyledAlertClose>
    );
  }

  const alert = (
    <StyledAlert red={red} yellow={yellow} green={green} full={full} {...other}>
      {children}
      {alertClose}
    </StyledAlert>
  );

  return alert;
};

Alert.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool,
  green: PropTypes.bool,
  yellow: PropTypes.bool,
  red: PropTypes.bool,
  full: PropTypes.bool,
  closeLabel: PropTypes.string,
  onClose: PropTypes.func
};

Alert.defaultProps = {
  blue: undefined,
  green: undefined,
  yellow: undefined,
  red: undefined,
  full: undefined,
  closeLabel: ''
};

export default Alert;
