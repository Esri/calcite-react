import PropTypes from 'prop-types';
import React from 'react';
import { getChildType } from '../utils/helpers';
import { StyledAccordion } from './Accordion-styled';
import AccordionSection from './AccordionSection';
import withRefs from '../utils/withRefs';

const Accordion = withRefs(
  ({
    children,
    activeSectionIndexes,
    onAccordionChange,
    forwardedRef,
    ...other
  }) => {
    const childArray = React.Children.toArray(children);
    const childrenWithProps = childArray.map((child, i) => {
      switch (getChildType(child)) {
        case AccordionSection:
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

    return (
      <StyledAccordion ref={forwardedRef} {...other}>
        {childrenWithProps}
      </StyledAccordion>
    );
  }
);

Accordion.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Indexes of the sections that are supposed to be active */
  activeSectionIndexes: PropTypes.array
};

Accordion.defaultProps = {
  activeSectionIndexes: []
};

Accordion.displayName = 'Accordion';

export default Accordion;
