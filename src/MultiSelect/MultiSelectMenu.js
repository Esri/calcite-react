// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules
import useResizeAware from 'react-resize-aware';

// Component specific modules (Component-styled, etc.)
import { StyledMultiSelectMenu } from './MultiSelect-styled';

// App components

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const MultiSelectMenu = ({ innerRef, scheduleUpdate, children, ...other }) => {
  const resizeReporter = target => {
    target && scheduleUpdate && scheduleUpdate();
  };

  const [resizeListener] = useResizeAware(resizeReporter);

  return (
    <StyledMultiSelectMenu ref={innerRef} {...other}>
      {resizeListener}
      {children}
    </StyledMultiSelectMenu>
  );
};

MultiSelectMenu.propTypes = {
  /** Ref of the Popper wrapping this component */
  innerRef: PropTypes.func,
  /** Popper method to call when the component resizes */
  scheduleUpdate: PropTypes.func
};

MultiSelectMenu.defaultProps = {};

export default MultiSelectMenu;
