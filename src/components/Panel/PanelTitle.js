import PropTypes from 'prop-types';
import React from 'react';
import { h4 } from '../../utils/elements';

const PanelTitle = ({ children, ...other }) => {
  const StyledPanelTitle = h4.extend`
    margin-bottom: 0.775rem;
  `;

  const panelTitle = <StyledPanelTitle {...other}>{children}</StyledPanelTitle>;

  return panelTitle;
};

PanelTitle.propTypes = {
  children: PropTypes.node
};

PanelTitle.defaultProps = {};

export default PanelTitle;
