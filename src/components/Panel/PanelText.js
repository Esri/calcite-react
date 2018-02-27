import PropTypes from 'prop-types';
import React from 'react';
import { StyledPanelText } from './Panel-styled';

const PanelText = ({ children, ...other }) => {
  const panelText = <StyledPanelText {...other}>{children}</StyledPanelText>;

  return panelText;
};

PanelText.propTypes = {
  children: PropTypes.node
};

PanelText.defaultProps = {};

export default PanelText;
