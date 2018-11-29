import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledPanelText } from './Panel-styled';

const PanelText = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledPanelText ref={forwardedRef} {...other}>
      {children}
    </StyledPanelText>
  );
};

PanelText.propTypes = {
  /** Content of the PanelText */
  children: PropTypes.node
};

PanelText.defaultProps = {};

PanelText.displayName = 'PanelText';

export default withRefs(PanelText);
