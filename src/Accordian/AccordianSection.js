import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccordianSection } from './Accordian-styled';
import { AccordianTitle } from './AccordianTitle';
import { AccordianContent } from './AccordianContent';

const AccordianSection = ({ children, ...props }) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    console.log(child);
    console.log(AccordianContent);
    switch (child.type) {
      case AccordianTitle:
        console.log('in title');
        let section;
        if (i === props.activeTabIndex) {
          section = React.cloneElement(child, {
            key: i,
            index: i,
            activeTabIndex: props.activeTabIndex
          });
        }
        return section;
      case AccordianContent:
        return React.cloneElement(child, {
          ...props
        });
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
