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
  /** Toggle default visibility of the progress bar in a Toaster */
  showProgress: PropTypes.bool
};

Toaster.defaultProps = {};

Toaster.displayName = 'Toaster';

export default Toaster;
