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
  children: PropTypes.node,
  noBorder: PropTypes.bool,
  noPadding: PropTypes.bool,
  dark: PropTypes.bool,
  black: PropTypes.bool,
  white: PropTypes.bool,
  lightBlue: PropTypes.bool,
  blue: PropTypes.bool,
  darkBlue: PropTypes.bool
};

Panel.defaultProps = {
  noBorder: false,
  noPadding: false,
  dark: false,
  black: false,
  white: false,
  lightBlue: false,
  blue: false,
  darkBlue: false
};

export default Panel;
