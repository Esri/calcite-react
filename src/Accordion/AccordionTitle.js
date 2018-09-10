import PropTypes from 'prop-types';
import React from 'react';
import { StyledAccordionTitle, ArrowIconStyles } from './Accordion-styled';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

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
      {active ? (
        <ChevronDownIcon style={ArrowIconStyles} />
      ) : (
        <ChevronRightIcon style={ArrowIconStyles} />
      )}
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
