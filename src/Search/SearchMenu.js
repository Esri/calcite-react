// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules
import useResizeAware from 'react-resize-aware';

// Component specific modules (Component-styled, etc.)
import { StyledSelectMenu } from '../Select/Select-styled';

// App components

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const SearchMenu = ({ innerRef, scheduleUpdate, children, ...other }) => {
  const resizeReporter = target => {
    target && scheduleUpdate && scheduleUpdate();
  };

  const [resizeListener] = useResizeAware(resizeReporter);

  return (
    <StyledSelectMenu ref={innerRef} {...other}>
      {resizeListener}
      {children}
    </StyledSelectMenu>
  );
};

SearchMenu.propTypes = {
  /** Ref of the Popper wrapping this component */
  innerRef: PropTypes.func,
  /** Popper method to call when the component resizes */
  scheduleUpdate: PropTypes.func
};

SearchMenu.defaultProps = {};

export default SearchMenu;
