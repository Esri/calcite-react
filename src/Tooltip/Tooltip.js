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
import { withTheme } from 'styled-components';

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
    const {
      children,
      appendToBody,
      positionFixed,
      targetWrapperStyle,
      enterDelay,
      placement,
      transitionDuration,
      title,
      arrowStyle
    } = this.props;

    const isOpen =
      this.props.open !== undefined ? this.props.open : this.state.open;
    const usePreventOverflow = appendToBody || positionFixed ? false : true;

    return (
      <Manager>
        <Reference style={{ display: 'inline-block' }}>
          {({ ref }) => (
            <StyledTargetWrapper
              ref={ref}
              style={targetWrapperStyle}
              onMouseEnter={this._handleReferenceEnter}
              onMouseLeave={this._handleReferenceLeave}
            >
              {children}
            </StyledTargetWrapper>
          )}
        </Reference>
        <Transition
          in={isOpen}
          timeout={
            enterDelay !== undefined
              ? enterDelay
              : this.props.theme.tooltipEnterDelay
          }
        >
          {state => {
            return isOpen
              ? this._getPopper(
                  <Popper
                    positionFixed={positionFixed}
                    placement={placement}
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
                        transitionDuration={transitionDuration}
                        data-placement={placement}
                      >
                        {title}
                        <StyledTooltipArrow
                          ref={arrowProps.ref}
                          data-placement={placement}
                          style={{
                            ...arrowProps.style,
                            ...arrowStyle
                          }}
                        />
                      </StyledTooltip>
                    )}
                  </Popper>,
                  appendToBody
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
  /** Boolean to programatically control the visibility of the Tooltip */
  open: PropTypes.bool,
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
  transitionDuration: 200
};

Tooltip.displayName = 'Tooltip';

export default withTheme(Tooltip);
