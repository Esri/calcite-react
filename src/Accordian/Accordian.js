import PropTypes from 'prop-types';
import React from 'react';
import { StyledAccordian } from './Accordian-styled';
import AccordianSection from './AccordianSection';

const Accordian = ({ children, ...props }) => {
  console.log(props);
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (child.type) {
      case AccordianSection:
        return React.cloneElement(child, {
          ...props
        });
      default:
        return child;
    }
  });

  return <StyledAccordian>{childrenWithProps}</StyledAccordian>;
};

Accordian.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  activeTabIndex: PropTypes.number
};

Accordian.defaultProps = {
  activeTabIndex: 0
};

export default Accordian;
