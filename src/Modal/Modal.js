import PropTypes from 'prop-types';
import React from 'react';
import Transition from 'react-transition-group/Transition';

import ReactModal from 'react-modal';

import {
  StyledModalOverlay,
  StyledModalDialog,
  OverlayTransition,
  DialogTransition
} from './Modal-styled';

const Modal = ({
  children,
  open,
  title,
  overlayStyle,
  dialogStyle,
  ...other
}) => {
  return (
    <Transition in={open} timeout={0}>
      {state => (
        <ReactModal
          isOpen={open}
          closeTimeoutMS={300}
          style={{
            overlay: {
              ...StyledModalOverlay,
              ...overlayStyle,
              ...OverlayTransition[state]
            },
            content: {
              ...StyledModalDialog,
              ...dialogStyle,
              ...DialogTransition[state]
            }
          }}
          contentLabel={title}
          role="dialog"
          {...other}
        >
          {children}
        </ReactModal>
      )}
    </Transition>
  );
};

Modal.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Boolean describing if the modal should be shown or not. */
  open: PropTypes.bool,
  /** String indicating how the content container should be announced to screenreaders */
  title: PropTypes.string,
  /** Function that will be run after the modal has opened. */
  onAfterOpen: PropTypes.func,
  /** Function that will be run when the modal is requested to be closed (either by clicking on overlay or pressing ESC) */
  onRequestClose: PropTypes.func,
  /** Boolean indicating if the overlay should close the modal */
  shouldCloseOnOverlayClick: PropTypes.bool,
  /** Boolean indicating if pressing the esc key should close the modal */
  shouldCloseOnEsc: PropTypes.bool,
  /** Function that will be called to get the parent element that the modal will be attached to. */
  parentSelector: PropTypes.func,
  /** Styles applied to the overlay div */
  overlayStyle: PropTypes.object,
  /** Styles applied to the container dialog div */
  dialogStyle: PropTypes.object
};

Modal.defaultProps = {};

Modal.displayName = 'Modal';

export default Modal;
