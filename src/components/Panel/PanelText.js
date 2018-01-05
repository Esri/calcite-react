import PropTypes from 'prop-types';
import React from 'react';
import { p } from '../../utils/elements';

const PanelText = ({ children, ...other }) => {
  const StyledPanelText = p.extend`
    margin-bottom: 0rem;
  `;

  const panelText = <StyledPanelText {...other}>{children}</StyledPanelText>;

  return panelText;
};

PanelText.propTypes = {
  children: PropTypes.node
};

PanelText.defaultProps = {};

export default PanelText;
