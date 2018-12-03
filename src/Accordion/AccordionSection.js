import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccordionSection } from './Accordion-styled';

const AccordionSection = ({
  children,
  active,
  sectionIndex,
  onAccordionChange,
  ...other
}) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type && child.type.displayName) {
      case 'AccordionTitle':
        let title;
        title = React.cloneElement(child, {
          key: i,
          active: active,
          sectionIndex: sectionIndex,
          onAccordionChange: onAccordionChange
        });
        return title;
      case 'AccordionContent':
        let content;
        content = React.cloneElement(child, {
          key: i,
          active: active,
          sectionIndex: sectionIndex
        });
        return content;
      default:
        return child;
    }
  });

  return (
    <StyledAccordionSection {...other}>
      {childrenWithProps}
    </StyledAccordionSection>
  );
};

AccordionSection.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

AccordionSection.displayName = 'AccordionSection';

export default AccordionSection;
