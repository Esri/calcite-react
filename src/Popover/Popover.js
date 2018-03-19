import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';
import outy from 'outy';
import { Manager, Target, Popper } from 'react-popper';

import { StyledPopover, StyledPopperTransition } from './Popover-styled';

class Popover extends Component {
  constructor(props) {
    super(props);

    this.defaultStyle = {
      transition: `opacity ${
        this.props.transitionDuration
      }ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
      opacity: 0,
      zIndex: 2000,
      pointerEvents: 'none'
    };
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

  getPopperEl({ innerRef, style, ...popperProps }) {
    return <div ref={innerRef} style={{ ...style }} {...popperProps} />;
  }

  _setOutsideTap = () => {
    const elements = [this.target];

    if (this.popper && !this.props.closeOnSelect) {
      elements.push(this.popper);
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

  _handleOutsideTap = () => {
    this.props.onRequestClose();
  };

  render() {
    return (
      <Manager>
        <Target
          innerRef={c => (this.target = findDOMNode(c))}
          style={{ display: 'inline-block' }}
        >
          {this.props.targetEl}
        </Target>
        <Transition in={this.props.open} timeout={0}>
          {state => (
            <Popper
              key="popper"
              innerRef={c => {
                this.popper = findDOMNode(c);
              }}
              component={this.getPopperEl}
              placement={this.props.placement}
              style={{
                ...this.defaultStyle,
                ...StyledPopperTransition[state]
              }}
            >
              <StyledPopover>{this.props.children}</StyledPopover>
            </Popper>
          )}
        </Transition>
      </Manager>
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
  closeOnSelect: PropTypes.bool
};

Popover.defaultProps = {
  open: false,
  placement: 'bottom-start',
  transitionDuration: 200,
  true: true
};

export default Popover;
