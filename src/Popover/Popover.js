import React, { Component, createContext } from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';
import outy from 'outy';
import { Manager, Reference, Popper } from 'react-popper';
import uniqid from 'uniqid';

import { StyledTargetWrapper, StyledPopover } from './Popover-styled';

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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.open === false && this.props.open === true) {
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
          {this.props.open ? (
            <Transition in={this.props.open} timeout={0}>
              {state =>
                this._getPopper(
                  <Popper
                    positionFixed={this.props.positionFixed}
                    placement={this.props.placement}
                    modifiers={{
                      preventOverflow: {
                        enabled: usePreventOverflow
                      },
                      hide: {
                        enabled: usePreventOverflow
                      }
                    }}
                  >
                    {({ ref, style, placement }) => {
                      return (
                        <StyledPopover
                          ref={ref}
                          id={`${this._generatedId}Popover`}
                          style={{
                            ...style,
                            ...this.props.style
                          }}
                          transitionState={state}
                          transitionDuration={this.props.transitionDuration}
                          data-placement={placement}
                        >
                          {this.props.children}
                        </StyledPopover>
                      );
                    }}
                  </Popper>,
                  this.props.appendToBody
                )
              }
            </Transition>
          ) : null}
        </Manager>
      </PopoverContext.Provider>
    );
  }
}

Popover.propTypes = {
  /** Nodes to be used as options in the Popover */
  children: PropTypes.node,
  /** The element that will anchor the popover */
  targetEl: PropTypes.node,
  /** Whether the popover is visible or not */
  open: PropTypes.bool,
  /** Placement of the popover in relation to the target */
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
  /** Duration of animation in milliseconds */
  transitionDuration: PropTypes.number,
  /** Function called when the popover receives an event that may trigger a close */
  onRequestClose: PropTypes.func,
  /** Whether or not the popover should trigger onRequestClose when an element is selected */
  closeOnSelect: PropTypes.bool,
  /** Styles passed onto the target element container div */
  targetContainerStyles: PropTypes.object,
  /** Styles passed onto the popover container div */
  popoverContainerStyles: PropTypes.object,
  /** Uses `position: fixed` on the tooltip allowing it to show up outside of containers that have `overflow: hidden` */
  positionFixed: PropTypes.bool
};

Popover.defaultProps = {
  open: false,
  placement: 'bottom-start',
  transitionDuration: 200,
  true: true
};

export { Popover as default, PopoverContext };
