import PropTypes from 'prop-types';
import React from 'react';
import { StyledPanel } from './Panel-styled';

const Panel = ({ children, ...other }) => {
  const panel = <StyledPanel {...other}>{children}</StyledPanel>;

  return panel;
};

Panel.propTypes = {
  children: PropTypes.node
};

Panel.defaultProps = {};

export default Panel;
