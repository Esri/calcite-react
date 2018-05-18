import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccordionSection } from './Accordion-styled';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

const AccordionSection = ({ children, ...props }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case AccordionTitle:
        let title;
        title = React.cloneElement(child, {
          key: i,
          active: props.active,
          sectionIndex: props.sectionIndex,
          onAccordionChange: props.onAccordionChange
        });
        return title;
      case AccordionContent:
        let content;
        content = React.cloneElement(child, {
          key: i,
          active: props.active,
          sectionIndex: props.sectionIndex,
          onAccordionChange: props.onAccordionChange
        });
        return content;
      default:
        return child;
    }
  });

  return <StyledAccordionSection>{childrenWithProps}</StyledAccordionSection>;
};
AccordionSection.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

export default AccordionSection;
