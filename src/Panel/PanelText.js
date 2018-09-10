import PropTypes from 'prop-types';
import React from 'react';
import { StyledPanelText } from './Panel-styled';

const PanelText = ({ children, ...other }) => {
  return <StyledPanelText {...other}>{children}</StyledPanelText>;
};

PanelText.propTypes = {
  /** Content of the PanelText */
  children: PropTypes.node
};

PanelText.defaultProps = {};

export default PanelText;
