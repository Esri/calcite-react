import styled, { css } from 'styled-components';
import { transition } from '../utils/helpers';
import { StyledSideNav, StyledSideNavTitle } from '../SideNav/SideNav-styled';

const StyledAccordion = StyledSideNav.extend``;

const StyledAccordionSection = styled.div``;

const StyledAccordionTitle = StyledSideNavTitle.extend`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    transition: all, ${transition()};
    background-color: ${props => props.theme.palette.lightestGray};
    outline: none;
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `};
`;

const StyledAccordionContent = styled.div`
  display: none;

  ${props =>
    props.active &&
    css`
      display: block;
    `};
`;

const ArrowIconStyles = {
  width: 20,
  height: 20
};

export {
  StyledAccordion,
  StyledAccordionTitle,
  StyledAccordionSection,
  StyledAccordionContent,
  ArrowIconStyles
};
