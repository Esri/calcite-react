import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccordionContent } from './Accordion-styled';

const AccordionContent = ({ children, ...props }) => {
  const accordionContent = (
    <StyledAccordionContent active={props.active}>
      {children}
    </StyledAccordionContent>
  );

  return accordionContent;
};

AccordionContent.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  active: PropTypes.bool
};

AccordionContent.defaultProps = {};

export default AccordionContent;
