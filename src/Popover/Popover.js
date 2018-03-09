import React from 'react';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';
import { Manager, Target, Popper } from 'react-popper';

import { StyledPopover } from './Popover-styled';

import './PopoverStyles.css';

const Popover = props => {
  const defaultStyle = {
    transition: `opacity ${props.transitionDuration}ms ease-in-out`,
    opacity: 0,
    zIndex: 2000
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 }
  };

  function getPopperEl({ innerRef, style, ...popperProps }) {
    return <div ref={innerRef} style={{ ...style }} {...popperProps} />;
  }

  return (
    <Manager>
      <Target style={{ display: 'inline-block' }}>{props.targetEl}</Target>
      <Transition in={props.open} timeout={props.transitionDuration}>
        {state => (
          <Popper
            key="popper"
            component={getPopperEl}
            placement={props.placement}
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <StyledPopover>{props.children}</StyledPopover>
          </Popper>
        )}
      </Transition>
    </Manager>
  );
};

Popover.propTypes = {
  /** Nodes to be used as options in the Popover */
  children: PropTypes.node,
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
  transitionDuration: PropTypes.number
};

Popover.defaultProps = {
  open: false,
  placement: 'bottom-start',
  transitionDuration: 200
};

export default Popover;
