import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledPanel } from './Panel-styled';

const Panel = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledPanel ref={forwardedRef} {...other}>
      {children}
    </StyledPanel>
  );
};

Panel.propTypes = {
  /** Content of the Panel */
  children: PropTypes.node,
  /** Hide the border of the panel */
  noBorder: PropTypes.bool,
  /** Remove the padding from the panel */
  noPadding: PropTypes.bool,
  /** Dark style panel */
  dark: PropTypes.bool,
  /** Black style panel */
  black: PropTypes.bool,
  /** White style panel */
  white: PropTypes.bool,
  /** Light Blue style panel */
  lightBlue: PropTypes.bool,
  /** Blue style panel */
  blue: PropTypes.bool,
  /** Dark Blue style panel */
  darkBlue: PropTypes.bool
};

Panel.defaultProps = {};

Panel.displayName = 'Panel';

export default withRefs(Panel);
