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
  ReactModalOverlayStyles,
  ReactModalContentStyles,
  StyledModalHeader,
  StyledModalTitle,
  StyledModalCloseButton,
  StyledModalContent,
  OverlayTransition,
  DialogTransition,
  StyledModalActions,
  StyledSecondaryActions
} from './Modal-styled';

const Modal = ({
  children,
  open,
  title,
  overlayStyle,
  dialogStyle,
  showClose,
  onCloseClicked,
  actions,
  secondaryActions,
  color,
  noPadding,
  headerStyles,
  titleStyles,
  contentStyles,
  actionStyles,
  secondaryActionStyles,
  onRequestClose,
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
              ...ReactModalOverlayStyles,
              ...overlayStyle,
              ...OverlayTransition[state]
            },
            content: {
              ...ReactModalContentStyles(color),
              ...dialogStyle,
              ...DialogTransition[state]
            }
          }}
          contentLabel={title}
          role="dialog"
          onRequestClose={onRequestClose}
          {...other}
        >
          {title && (
            <StyledModalHeader styles={headerStyles}>
              <StyledModalTitle styles={titleStyles}>{title}</StyledModalTitle>
              {showClose && <StyledModalCloseButton onClick={onRequestClose} />}
            </StyledModalHeader>
          )}
          <StyledModalContent styles={contentStyles} noPadding={noPadding}>
            {children}
          </StyledModalContent>
          {(actions || secondaryActions) && (
            <StyledModalActions styles={actionStyles}>
              {actions}
              {secondaryActions && (
                <StyledSecondaryActions styles={secondaryActionStyles}>
                  {secondaryActions}
                </StyledSecondaryActions>
              )}
            </StyledModalActions>
          )}
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
  /** Buttons or links to be placed in the Modal actions footer. */
  actions: PropTypes.node,
  /** Buttons or links to be placed in the footer, opposite your primary actions. */
  secondaryActions: PropTypes.node,
  /** Adds a colored bar to the top of the Modal */
  color: PropTypes.oneOf(['blue', 'red']),
  /** Remove pading from content wrapper. */
  noPadding: PropTypes.bool,
  /** Function that will be run after the Modal has opened. */
  onAfterOpen: PropTypes.func,
  /** Function that will be run when the Modal is requested to be closed (either by clicking on overlay or pressing ESC). */
  onRequestClose: PropTypes.func,
  /** Boolean indicating if clicking the overlay should call the onRequestClose prop. */
  shouldCloseOnOverlayClick: PropTypes.bool,
  /** Boolean indicating if pressing the esc key should call the onRequestClose prop. */
  shouldCloseOnEsc: PropTypes.bool,
  /** Function that will be called to get the parent element to which the Modal will be attached. */
  parentSelector: PropTypes.func,
  /** Styles applied to the overlay div. */
  overlayStyle: PropTypes.object,
  /** Styles applied to the container dialog div. */
  dialogStyle: PropTypes.object,
  /** Styles applied to the header div. */
  headerStyles: PropTypes.object,
  /** Styles applied to the title div. */
  titleStyles: PropTypes.object,
  /** Styles applied to the content div. */
  contentStyles: PropTypes.object,
  /** Styles applied to the footer actions div. */
  actionStyles: PropTypes.object,
  /** Styles applied to the footer secondary actions div. */
  secondaryActionStyles: PropTypes.object,
  /** Toggles visiblity of the close icon button. */
  showClose: PropTypes.bool
};

Modal.defaultProps = {
  onAfterOpen: () => {},
  onRequestClose: () => {},
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEsc: true,
  showClose: true
};

Modal.displayName = 'Modal';

export default Modal;
