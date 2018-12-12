import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccordionContent } from './Accordion-styled';

const AccordionContent = ({ children, ...other }) => {
  return <StyledAccordionContent {...other}>{children}</StyledAccordionContent>;
};

AccordionContent.propTypes = {
  /** The content of the component; can be a node or string. */
  children: PropTypes.node
};

AccordionContent.defaultProps = {};

AccordionContent.displayName = 'AccordionContent';

export default AccordionContent;
