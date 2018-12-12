import PropTypes from 'prop-types';
import React from 'react';

import { StyledPanel } from './Panel-styled';

const Panel = ({ children, ...other }) => {
  return <StyledPanel {...other}>{children}</StyledPanel>;
};

Panel.propTypes = {
  /** Content of the Panel. */
  children: PropTypes.node,
  /** Hide the border of the Panel. */
  noBorder: PropTypes.bool,
  /** Remove the padding from the Panel. */
  noPadding: PropTypes.bool,
  /** Dark style Panel. */
  dark: PropTypes.bool,
  /** Black style Panel. */
  black: PropTypes.bool,
  /** White style Panel. */
  white: PropTypes.bool,
  /** Light Blue style Panel. */
  lightBlue: PropTypes.bool,
  /** Blue style Panel. */
  blue: PropTypes.bool,
  /** Dark Blue style Panel. */
  darkBlue: PropTypes.bool
};

Panel.defaultProps = {};

Panel.displayName = 'Panel';

export default Panel;
