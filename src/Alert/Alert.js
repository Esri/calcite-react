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
  /** Components to be rendered within the Alert. */
  children: PropTypes.node,
  /** Color modifier for the Alert. */
  blue: PropTypes.bool,
  /** Color modifier for the Alert. */
  green: PropTypes.bool,
  /** Color modifier for the Alert. */
  yellow: PropTypes.bool,
  /** Color modifier for the Alert. */
  red: PropTypes.bool,
  /** Full-width modifier for the Alert. */
  full: PropTypes.bool,
  /** Display label used to close the Alert. */
  closeLabel: PropTypes.string,
  /** Callback function fired when the close link is clicked. */
  onClose: PropTypes.func
};

Alert.defaultProps = {};

export default Alert;
