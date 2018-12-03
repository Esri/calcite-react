import PropTypes from 'prop-types';
import React from 'react';
import { StyledAccordion } from './Accordion-styled';

const Accordion = ({
  children,
  activeSectionIndexes,
  onAccordionChange,
  ...other
}) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type && child.type.displayName) {
      case 'AccordionSection':
        let section;
        section = React.cloneElement(child, {
          key: i,
          active: activeSectionIndexes.includes(i),
          sectionIndex: i,
          onAccordionChange: onAccordionChange
        });
        return section;
      default:
        return child;
    }
  });

  return <StyledAccordion {...other}>{childrenWithProps}</StyledAccordion>;
};

Accordion.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Indexes of the sections that are supposed to be active */
  activeSectionIndexes: PropTypes.array
};

Accordion.defaultProps = {
  activeSectionIndexes: [],
  onAccordionChange: () => {}
};

Accordion.displayName = 'Accordion';

export default Accordion;
