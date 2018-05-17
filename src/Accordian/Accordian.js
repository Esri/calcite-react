import PropTypes from 'prop-types';
import React from 'react';
import { StyledAccordian } from './Accordian-styled';
import AccordianSection from './AccordianSection';

const Accordian = ({ children, ...props }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case AccordianSection:
        let section;
        section = React.cloneElement(child, {
          key: i,
          active: props.activeSectionIndexes.includes(i),
          sectionIndex: i,
          onAccordianChange: props.onAccordianChange
        });
        return section;
      default:
        return child;
    }
  });

  return <StyledAccordian>{childrenWithProps}</StyledAccordian>;
};

Accordian.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Indexes of the sections that are supposed to be active */
  activeSectionIndexes: PropTypes.array
};

Accordian.defaultProps = {
  activeSectionIndexes: []
};

export default Accordian;
