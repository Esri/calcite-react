import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccordianContent } from './Accordian-styled';

const AccordianContent = ({ children, ...props }) => {
  const accordianContent = (
    <StyledAccordianContent active={props.active}>
      {children}
    </StyledAccordianContent>
  );

  return accordianContent;
};

AccordianContent.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  active: PropTypes.bool
};

AccordianContent.defaultProps = {};

export default AccordianContent;
