// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import { StyledCloseButton } from './Toaster-styled';

// App components
import XIcon from 'calcite-ui-icons-react/XIcon';

// Third-party components (buttons, icons, etc.)
import { ToastContainer as ToasterContainer } from 'react-toastify';

// JSON

// CSS

const ToastContainer = ({ ...other }) => {
  const CloseButton = ({ closeToast }) => (
    <StyledCloseButton
      type="button"
      iconButton
      icon={<XIcon size={20} />}
      onClick={closeToast}
    />
  );

  return <ToasterContainer closeButton={<CloseButton />} {...other} />;
};

ToastContainer.propTypes = {
  /* Toggle default visibility of the progress bar in a Toaster */
  showProgress: PropTypes.bool
};

ToastContainer.defaultProps = {};

export default ToastContainer;
