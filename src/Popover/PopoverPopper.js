// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules
import useResizeAware from 'react-resize-aware';

// Component specific modules (Component-styled, etc.)
import { StyledPopover } from './Popover-styled';

// App components

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const PopoverPopper = ({ innerRef, scheduleUpdate, children, ...other }) => {
  const resizeReporter = target => {
    target && scheduleUpdate && scheduleUpdate();
  };

  const [resizeListener] = useResizeAware(resizeReporter);

  return (
    <StyledPopover ref={innerRef} {...other}>
      {resizeListener}
      {children}
    </StyledPopover>
  );
};

PopoverPopper.propTypes = {
  /** Ref of the Popper wrapping this component */
  innerRef: PropTypes.func,
  /** Popper method to call when the component resizes */
  scheduleUpdate: PropTypes.func
};

PopoverPopper.defaultProps = {};

export default PopoverPopper;
