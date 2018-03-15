import PropTypes from 'prop-types';
import React from 'react';
import { StyledPanel } from './Panel-styled';

const Panel = ({
  children,
  noBorder,
  noPadding,
  dark,
  black,
  white,
  lightBlue,
  blue,
  darkBlue,
  ...other
}) => {
  const panel = (
    <StyledPanel
      noBorder={noBorder}
      noPadding={noPadding}
      dark={dark}
      black={black}
      white={white}
      lightBlue={lightBlue}
      blue={blue}
      darkBlue={darkBlue}
      {...other}
    >
      {children}
    </StyledPanel>
  );

  return panel;
};

Panel.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  noBorder: PropTypes.bool,
  /** Description TBD */
  noPadding: PropTypes.bool,
  /** Description TBD */
  dark: PropTypes.bool,
  /** Description TBD */
  black: PropTypes.bool,
  /** Description TBD */
  white: PropTypes.bool,
  /** Description TBD */
  lightBlue: PropTypes.bool,
  /** Description TBD */
  blue: PropTypes.bool,
  /** Description TBD */
  darkBlue: PropTypes.bool
};

Panel.defaultProps = {};

export default Panel;
