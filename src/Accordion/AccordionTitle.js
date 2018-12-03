import PropTypes from 'prop-types';
import React from 'react';
import { StyledAccordionTitle, StyledChevronIcon } from './Accordion-styled';

const AccordionTitle = ({
  children,
  active,
  sectionIndex,
  onAccordionChange,
  ...other
}) => {
  const setActiveAccordionIndex = e => {
    onAccordionChange(e, sectionIndex);
  };

  return (
    <StyledAccordionTitle
      onClick={setActiveAccordionIndex}
      active={active}
      {...other}
    >
      <StyledChevronIcon active={`${active}`} />
      {children}
    </StyledAccordionTitle>
  );
};

AccordionTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

AccordionTitle.defaultProps = {};

export default AccordionTitle;
