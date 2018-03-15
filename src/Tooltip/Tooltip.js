import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';
import { Manager, Target, Popper, Arrow } from 'react-popper';

import { StyledTooltip, StyledTooltipArrow } from './Tooltip-styled';

const getPopperEl = function({ innerRef, style, ...popperProps }) {
  return <div ref={innerRef} style={{ ...style }} {...popperProps} />;
};

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  defaultStyle = {
    transition: `opacity ${
      this.props.transitionDuration
    }ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
    opacity: 0,
    pointerEvents: 'none',
    zIndex: '2000'
  };

  transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 }
  };

  _handleTargetEnter = () => {
    this.setState({
      open: true
    });
  };

  _handleTargetLeave = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Manager>
        <Target
          style={{ display: 'inline-block' }}
          onMouseEnter={this._handleTargetEnter}
          onMouseLeave={this._handleTargetLeave}
        >
          {this.props.children}
        </Target>
        <Transition in={this.state.open} timeout={this.props.enterDelay}>
          {state => (
            <Popper
              key="popper"
              component={getPopperEl}
              placement={this.props.placement}
              style={{
                ...this.defaultStyle,
                ...this.transitionStyles[state]
              }}
            >
              <StyledTooltip>{this.props.title}</StyledTooltip>
              <Arrow>
                {({ arrowProps, restProps }) => (
                  <span {...arrowProps}>
                    <StyledTooltipArrow />
                  </span>
                )}
              </Arrow>
            </Popper>
          )}
        </Transition>
      </Manager>
    );
  }
}

Tooltip.propTypes = {
  /** Nodes to be used as the target of the tooltip */
  children: PropTypes.node,
  /** Nodes to be used as tooltip content */
  title: PropTypes.node,
  /** Placement of the popover in relation to the target. The tooltip will override the placement if there is no room.
   If this property is not set the tooltip will position itself wherever there is room */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** Duration of animation in milliseconds */
  transitionDuration: PropTypes.number,
  /** Delay before the tooltip will show up, in milliseconds */
  enterDelay: PropTypes.number
};

Tooltip.defaultProps = {
  title: '',
  placement: undefined,
  transitionDuration: 200,
  enterDelay: 0
};

export default Tooltip;
