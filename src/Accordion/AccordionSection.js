import React from 'react';
import PropTypes from 'prop-types';
import { getChildType } from '../utils/helpers';
import { StyledAccordionSection } from './Accordion-styled';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';
import withRefs from '../utils/withRefs';

const AccordionSection = ({
  children,
  active,
  sectionIndex,
  onAccordionChange,
  forwardedRef,
  ...other
}) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case AccordionTitle:
        let title;
        title = React.cloneElement(child, {
          key: i,
          active: active,
          sectionIndex: sectionIndex,
          onAccordionChange: onAccordionChange
        });
        return title;
      case AccordionContent:
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
    <StyledAccordionSection ref={forwardedRef} {...other}>
      {childrenWithProps}
    </StyledAccordionSection>
  );
};
AccordionSection.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

export default withRefs(AccordionSection);
