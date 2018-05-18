import PropTypes from 'prop-types';
import React from 'react';
import { StyledAccordionTitle, ArrowIconStyles } from './Accordion-styled';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

const AccordionTitle = ({ children, ...props }) => {
  const setActiveAccordionIndex = e => {
    props.onAccordionChange(e, props.sectionIndex);
  };

  const accordionTitle = (
    <StyledAccordionTitle
      onClick={setActiveAccordionIndex}
      active={props.active}
    >
      {props.active ? (
        <ChevronDownIcon style={ArrowIconStyles} />
      ) : (
        <ChevronRightIcon style={ArrowIconStyles} />
      )}
      {children}
    </StyledAccordionTitle>
  );

  return accordionTitle;
};

AccordionTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

AccordionTitle.defaultProps = {};

export default AccordionTitle;
