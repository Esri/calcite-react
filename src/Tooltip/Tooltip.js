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
              targetWrapperStyle={this.props.targetWrapperStyle}
              onMouseEnter={this._handleReferenceEnter}
              onMouseLeave={this._handleReferenceLeave}
            >
              {this.props.children}
            </StyledTargetWrapper>
          )}
        </Reference>
        <Transition in={this.state.open} timeout={this.props.enterDelay}>
          {state => {
            return this.state.open
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
              : null;
          }}
        </Transition>
      </Manager>
    );
  }
}

Tooltip.propTypes = {
  /** Nodes to be used as the target of the Tooltip. */
  children: PropTypes.node,
  /** Nodes to be used as Tooltip content. */
  title: PropTypes.node,
  /** Placement of the popover in relation to the target. The Tooltip will override the placement if there is no room.
   If this property is not set, the Tooltip will position itself wherever there is room. */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** Uses `position: fixed` on the Tooltip, allowing it to show up outside of containers that have `overflow: hidden`. */
  positionFixed: PropTypes.bool,
  /** Duration of animation in milliseconds. */
  transitionDuration: PropTypes.number,
  /** Delay (in milliseconds) before the Tooltip will show. */
  enterDelay: PropTypes.number,
  /** Apply styles to the Tooltip element. */
  style: PropTypes.object,
  /** Apply styles to the Tooltip arrow element. */
  arrowStyle: PropTypes.object,
  /** Apply styles to the Tooltip target wrapper element. */
  targetWrapperStyle: PropTypes.object
};

Tooltip.defaultProps = {
  title: '',
  placement: undefined,
  transitionDuration: 200,
  enterDelay: 0
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
