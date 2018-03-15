import PropTypes from 'prop-types';
import React from 'react';
import { StyledFormLegend } from './Form-styled';

const FormLegend = ({ children, ...other }) => {
  const formLegend = <StyledFormLegend>{children}</StyledFormLegend>;

  return formLegend;
};

FormLegend.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

FormLegend.defaultProps = {};

export default FormLegend;
