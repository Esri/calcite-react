import PropTypes from 'prop-types';
import React from 'react';
import { StyledAccordianTitle } from './Accordian-styled';

const AccordianTitle = ({ children, ...props }) => {
  const setActiveAccordianIndex = e => {
    props.onAccordianChange(e, props.index);
  };
  const tabTitle = (
    <StyledAccordianTitle
      onClick={setActiveAccordianIndex}
      active={props.activeAccordianIndex === props.index}
    >
      {children}
    </StyledAccordianTitle>
  );

  return tabTitle;
};

AccordianTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

AccordianTitle.defaultProps = {};

export default AccordianTitle;
