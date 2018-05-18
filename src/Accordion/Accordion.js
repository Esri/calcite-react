import PropTypes from 'prop-types';
import React from 'react';
import { StyledAccordion } from './Accordion-styled';
import AccordionSection from './AccordionSection';

const Accordion = ({ children, ...props }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case AccordionSection:
        let section;
        section = React.cloneElement(child, {
          key: i,
          active: props.activeSectionIndexes.includes(i),
          sectionIndex: i,
          onAccordionChange: props.onAccordionChange
        });
        return section;
      default:
        return child;
    }
  });

  return <StyledAccordion>{childrenWithProps}</StyledAccordion>;
};

Accordion.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Indexes of the sections that are supposed to be active */
  activeSectionIndexes: PropTypes.array
};

Accordion.defaultProps = {
  activeSectionIndexes: []
};

export default Accordion;
