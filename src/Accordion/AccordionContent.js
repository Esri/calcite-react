import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccordionContent } from './Accordion-styled';
import withRefs from '../utils/withRefs';

const AccordionContent = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledAccordionContent ref={forwardedRef} {...other}>
      {children}
    </StyledAccordionContent>
  );
};

AccordionContent.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  active: PropTypes.bool
};

AccordionContent.defaultProps = {};

AccordionContent.displayName = 'AccordionContent';

export default withRefs(AccordionContent);
