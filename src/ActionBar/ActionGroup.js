// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import { StyledActionGroup } from './ActionBar-styled';

// App components

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const ActionGroup = ({ children, ...other }) => {
  return <StyledActionGroup {...other}>{children}</StyledActionGroup>;
};

ActionGroup.propTypes = {
  /** The content of the component */
  children: PropTypes.node
};

ActionGroup.defaultProps = {};

export default ActionGroup;
