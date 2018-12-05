import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Toaster extends Component {
  toastId = null;

  componentDidMount() {
    if (this.props.open) {
      this.notify();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.open) {
      this.notify();
    }
  }

  notify = () => {
    const { children, showProgress, ...other } = this.props;
    let progressClassName = '';
    if (showProgress) {
      progressClassName = 'progress-visible';
    } else if (showProgress === false) {
      progressClassName = 'progress-hidden';
    }

    if (!toast.isActive(this.toastId)) {
      this.toastId = toast(<Fragment>{children}</Fragment> || '', {
        progressClassName,
        ...other
      });
    }
  };

  render() {
    return null;
  }
}

Toaster.propTypes = {
  /** Components to be rendered within the Toaster. */
  children: PropTypes.node,
  /** Type of toaster to render, affects the background color */
  type: PropTypes.oneOf(['default', 'success', 'info', 'warning', 'error']),
  /** Position where the toaster will be placed on the screen */
  position: PropTypes.oneOf([
    'top-left',
    'top-center',
    'top-right',
    'bottom-right',
    'bottom-center',
    'bottom-left'
  ]),
  /** How long the toaster should be open for, false if it shouldn't auto close, or a duration in ms for how long it should take to close */
  autoClose: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  /** Toggle default visibility of the progress bar in a Toaster */
  showProgress: PropTypes.bool
};

Toaster.defaultProps = {
  position: 'top-right',
  type: 'default',
  autoClose: 5000
};

Toaster.displayName = 'Toaster';

export default Toaster;
