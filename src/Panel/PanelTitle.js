import PropTypes from 'prop-types';
import React from 'react';
import { StyledPanelTitle } from './Panel-styled';

const PanelTitle = ({ children, ...other }) => {
  const panelTitle = <StyledPanelTitle {...other}>{children}</StyledPanelTitle>;

  return panelTitle;
};

PanelTitle.propTypes = {
  children: PropTypes.node
};

PanelTitle.defaultProps = {};

export default PanelTitle;
