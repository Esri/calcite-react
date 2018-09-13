import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';
import { StyledAlert, StyledAlertClose } from './Alert-styled';

const Alert = ({ children, closeLabel, onClose, forwardedRef, ...other }) => {
  const getAlertClose = closeLabel => {
    if (closeLabel) {
      return (
        <StyledAlertClose onClick={onClose}>{closeLabel}</StyledAlertClose>
      );
    }
  };

  return (
    <StyledAlert ref={forwardedRef} {...other}>
      {children}
      {getAlertClose(closeLabel)}
    </StyledAlert>
  );
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
  closeLabel: PropTypes.node,
  /** Callback function fired when the close link is clicked. */
  onClose: PropTypes.func
};

Alert.defaultProps = {};

export default withRefs(Alert);
