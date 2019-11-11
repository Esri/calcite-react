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

import React, { Component, createContext } from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';
import outy from 'outy';
import { Manager, Reference, Popper } from 'react-popper';
import uniqid from 'uniqid';
import { rtlModifier } from '../utils/helpers';

import { StyledTargetWrapper } from './Popover-styled';

import PopoverPopper from './PopoverPopper';

const PopoverContext = createContext({
  popoverContext: {
    isInPopover: undefined
  }
});

class Popover extends Component {
  constructor(props) {
    super(props);

    this.popoverContext = {
      isInPopover: true
    };
    this._generatedId = uniqid();
  }

  componentDidUpdate(prevProps) {
    if (
      (prevProps.open === false && this.props.open === true) ||
      (this.props.open === true && prevProps.children !== this.props.children)
    ) {
      this._setOutsideTap();
    }

    if (prevProps.open === true && this.props.open === false) {
      this._unsetOutsideTap();
    }
  }

  componentWillUnmount() {
    this._unsetOutsideTap();
  }

  _setOutsideTap = () => {
    const elements = [];

    if (!this.props.closeOnSelect) {
      elements.push(document.getElementById(`${this._generatedId}Popover`));
    }

    if (this.outsideTap) {
      this.outsideTap.remove();
    }

    this.outsideTap = outy(
      elements,
      ['click', 'touchstart'],
      this._handleOutsideTap
    );
  };

  _unsetOutsideTap = () => {
    if (this.outsideTap) {
      this.outsideTap.remove();
    }
  };

  _handleOutsideTap = e => {
    this.props.onRequestClose(e);
  };

  _getPopper = (popper, appendToBody) => {
    if (appendToBody) {
      return ReactDOM.createPortal(popper, document.body);
    }

    return popper;
  };

  render() {
    const usePreventOverflow =
      this.props.appendToBody || this.props.positionFixed ? false : true;

    return (
      <PopoverContext.Provider value={{ popoverContext: this.popoverContext }}>
        <Manager>
          <Reference style={{ display: 'inline-block' }}>
            {({ ref }) => (
              <StyledTargetWrapper
                ref={ref}
                id={`${this._generatedId}Target`}
                style={this.props.targetContainerStyles}
              >
                {this.props.targetEl}
              </StyledTargetWrapper>
            )}
          </Reference>
          <Transition in={this.props.open} timeout={this.props.enterDelay}>
            {state => {
              return this.props.open
                ? this._getPopper(
                    <Popper
                      positionFixed={this.props.positionFixed}
                      placement={this.props.placement}
                      modifiers={{
                        preventOverflow: {
                          enabled: usePreventOverflow
                        },
                        hide: {
                          enabled: usePreventOverflow
                        },
                        rtl: {
                          order: 0,
                          enabled: true,
                          fn: data => rtlModifier(data, this.props.rtl)
                        }
                      }}
                    >
                      {({ ref, style, placement, scheduleUpdate }) => {
                        return (
                          <PopoverPopper
                            innerRef={ref}
                            id={`${this._generatedId}Popover`}
                            style={{
                              ...style,
                              ...this.props.style
                            }}
                            transitionState={state}
                            transitionDuration={this.props.transitionDuration}
                            data-placement={placement}
                            scheduleUpdate={scheduleUpdate}
                          >
                            {this.props.children}
                          </PopoverPopper>
                        );
                      }}
                    </Popper>,
                    this.props.appendToBody
                  )
                : null;
            }}
          </Transition>
        </Manager>
      </PopoverContext.Provider>
    );
  }
}

Popover.propTypes = {
  /** Nodes to be used as options in the Popover. */
  children: PropTypes.node,
  /** The element that will anchor the Popover. */
  targetEl: PropTypes.node,
  /** Whether or not the Popover is visible. */
  open: PropTypes.bool,
  /** Placement of the Popover in relation to the target. */
  placement: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'top-start',
    'right-start',
    'bottom-start',
    'left-start',
    'top-end',
    'right-end',
    'bottom-end',
    'left-end'
  ]),
  /** Duration of animation in milliseconds. */
  transitionDuration: PropTypes.number,
  /** How long it takes for the Popover to show up. */
  enterDelay: PropTypes.number,
  /** Function called when the Popover receives an event that may trigger a close. */
  onRequestClose: PropTypes.func,
  /** Whether or not the Popover should trigger onRequestClose when an element is selected. */
  closeOnSelect: PropTypes.bool,
  /** Styles passed onto the target element container div. */
  targetContainerStyles: PropTypes.object,
  /** Styles passed onto the Popover container div. */
  popoverContainerStyles: PropTypes.object,
  /** Uses `position: fixed` on the tooltip allowing it to show up outside of containers that have `overflow: hidden`. */
  positionFixed: PropTypes.bool,
  /** Manually set RTL behavior of the Popover to flip its direction */
  rtl: PropTypes.bool
};

Popover.defaultProps = {
  open: false,
  placement: 'bottom-start',
  transitionDuration: 200,
  enterDelay: 0,
  true: true
};

Popover.displayName = 'Popover';

export { Popover as default, PopoverContext };
