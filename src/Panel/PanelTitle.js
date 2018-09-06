import PropTypes from 'prop-types';
import React from 'react';
import { StyledPanelTitle } from './Panel-styled';

const PanelTitle = ({ children, ...other }) => {
  return <StyledPanelTitle {...other}>{children}</StyledPanelTitle>;
};

PanelTitle.propTypes = {
  /** Content of the PanelTitle */
  children: PropTypes.node
};

PanelTitle.defaultProps = {};

export default PanelTitle;
