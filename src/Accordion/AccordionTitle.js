import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';
import { StyledAccordionTitle, StyledChevronIcon } from './Accordion-styled';

const AccordionTitle = ({
  children,
  active,
  sectionIndex,
  onAccordionChange,
  forwardedRef,
  ...other
}) => {
  const setActiveAccordionIndex = e => {
    onAccordionChange(e, sectionIndex);
  };

  return (
    <StyledAccordionTitle
      onClick={setActiveAccordionIndex}
      active={active}
      ref={forwardedRef}
      {...other}
    >
      <StyledChevronIcon isActive={active} />
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

export default withRefs(AccordionTitle);
