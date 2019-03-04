// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

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
  /** The content of the component. */
  children: PropTypes.node,
  /** Boolean describing if the Modal should be shown or not. */
  open: PropTypes.bool,
  /** String indicating how the content container should be announced to screenreaders. */
  title: PropTypes.string,
  /** Function that will be run after the Modal has opened. */
  onAfterOpen: PropTypes.func,
  /** Function that will be run when the Modal is requested to be closed (either by clicking on overlay or pressing ESC). */
  onRequestClose: PropTypes.func,
  /** Boolean indicating if the overlay should close the Modal. */
  shouldCloseOnOverlayClick: PropTypes.bool,
  /** Boolean indicating if pressing the esc key should close the Modal. */
  shouldCloseOnEsc: PropTypes.bool,
  /** Function that will be called to get the parent element to which the Modal will be attached. */
  parentSelector: PropTypes.func,
  /** Styles applied to the overlay div. */
  overlayStyle: PropTypes.object,
  /** Styles applied to the container dialog div. */
  dialogStyle: PropTypes.object
};

Modal.defaultProps = {
  onAfterOpen: () => {},
  onRequestClose: () => {}
};

Modal.displayName = 'Modal';

export default Modal;
