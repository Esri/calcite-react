import PropTypes from 'prop-types';
import React from 'react';
import { StyledAccordianTitle, ArrowIconStyles } from './Accordian-styled';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

const AccordianTitle = ({ children, ...props }) => {
  const setActiveAccordianIndex = e => {
    props.onAccordianChange(e, props.sectionIndex);
  };

  const tabTitle = (
    <StyledAccordianTitle
      onClick={setActiveAccordianIndex}
      active={props.active}
    >
      {props.active ? (
        <ChevronDownIcon style={ArrowIconStyles} />
      ) : (
        <ChevronRightIcon style={ArrowIconStyles} />
      )}
      {children}
    </StyledAccordianTitle>
  );

  return tabTitle;
};

AccordianTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

AccordianTitle.defaultProps = {};

export default AccordianTitle;
