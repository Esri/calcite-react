import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledPanelTitle } from './Panel-styled';

const PanelTitle = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledPanelTitle ref={forwardedRef} {...other}>
      {children}
    </StyledPanelTitle>
  );
};

PanelTitle.propTypes = {
  /** Content of the PanelTitle */
  children: PropTypes.node
};

PanelTitle.defaultProps = {};

PanelTitle.displayName = 'PanelTitle';

export default withRefs(PanelTitle);
