import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';
import { StyledAccordionTitle, ArrowIconStyles } from './Accordion-styled';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

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

export default withRefs(AccordionTitle);
