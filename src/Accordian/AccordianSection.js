import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccordianSection } from './Accordian-styled';
import AccordianTitle from './AccordianTitle';
import AccordianContent from './AccordianContent';

const AccordianSection = ({ children, ...props }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case AccordianTitle:
        let title;
        title = React.cloneElement(child, {
          key: i,
          active: props.active,
          sectionIndex: props.sectionIndex,
          onAccordianChange: props.onAccordianChange
        });
        return title;
      case AccordianContent:
        let content;
        content = React.cloneElement(child, {
          key: i,
          active: props.active,
          sectionIndex: props.sectionIndex,
          onAccordianChange: props.onAccordianChange
        });
        return content;
      default:
        return child;
    }
  });

  return <StyledAccordianSection>{childrenWithProps}</StyledAccordianSection>;
};
AccordianSection.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

export default AccordianSection;
