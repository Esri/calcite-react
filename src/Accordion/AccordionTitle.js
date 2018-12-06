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
  /** The content of the component */
  children: PropTypes.node
};

AccordionTitle.defaultProps = {
  onAccordionChange: () => {}
};

AccordionTitle.displayName = 'AccordionTitle';

export default AccordionTitle;
