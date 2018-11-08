import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';

import {
  StyledTargetWrapper,
  StyledTooltip,
  StyledTooltipArrow
} from './Tooltip-styled';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  _handleReferenceEnter = () => {
    this.setState({
      open: true
    });
  };

  _handleReferenceLeave = () => {
    this.setState({
      open: false
    });
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
      <Manager>
        <Reference style={{ display: 'inline-block' }}>
          {({ ref }) => (
            <StyledTargetWrapper
              ref={ref}
              onMouseEnter={this._handleReferenceEnter}
              onMouseLeave={this._handleReferenceLeave}
            >
              {this.props.children}
            </StyledTargetWrapper>
          )}
        </Reference>
        {this.state.open ? (
          <Transition in={this.state.open} timeout={this.props.enterDelay}>
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
                  {({ ref, style, placement, arrowProps }) => (
                    <StyledTooltip
                      ref={ref}
                      style={{
                        ...style,
                        ...this.props.style
                      }}
                      transitionState={state}
                      transitionDuration={this.props.transitionDuration}
                      data-placement={placement}
                    >
                      {this.props.title}
                      <StyledTooltipArrow
                        ref={arrowProps.ref}
                        data-placement={placement}
                        style={{
                          ...arrowProps.style,
                          ...this.props.arrowStyle
                        }}
                      />
                    </StyledTooltip>
                  )}
                </Popper>,
                this.props.appendToBody
              )
            }
          </Transition>
        ) : null}
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
  /** Uses `position: fixed` on the tooltip allowing it to show up outside of containers that have `overflow: hidden` */
  positionFixed: PropTypes.bool,
  /** Duration of animation in milliseconds */
  transitionDuration: PropTypes.number,
  /** Delay before the tooltip will show up, in milliseconds */
  enterDelay: PropTypes.number,
  /** Apply styles to the tooltip element */
  style: PropTypes.object,
  /** Apply styles to the tooltip arrow element */
  arrowStyle: PropTypes.object
};

Tooltip.defaultProps = {
  title: '',
  placement: undefined,
  transitionDuration: 200,
  enterDelay: 0
};

export default Tooltip;
