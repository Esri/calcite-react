import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccordionContent } from './Accordion-styled';

const AccordionContent = ({ children, ...other }) => {
  return <StyledAccordionContent {...other}>{children}</StyledAccordionContent>;
};

AccordionContent.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  active: PropTypes.bool
};

AccordionContent.defaultProps = {};

export default AccordionContent;
