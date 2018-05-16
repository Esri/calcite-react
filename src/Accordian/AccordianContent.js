import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccordianContent } from './Accordian-styled';

const AccordianContent = ({ children, ...props }) => {
  return <StyledAccordianContent>{children}</StyledAccordianContent>;
};

AccordianContent.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

export default AccordianContent;
