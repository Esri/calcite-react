import styled, { css } from 'styled-components';
import { transition } from '../utils/helpers';
import { StyledSideNav, StyledSideNavTitle } from '../SideNav/SideNav-styled';
import ChevronRightIcon from 'calcite-ui-icons-react/ChevronRightIcon';

const StyledAccordion = styled(StyledSideNav)`
  border-radius: ${props => props.theme.borderRadius};
`;

const StyledAccordionSection = styled.div``;

const StyledAccordionTitle = styled(StyledSideNavTitle)`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${StyledAccordionSection}:first-child & {
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-top-right-radius: ${props => props.theme.borderRadius};
  }

  ${StyledAccordionSection}:last-child & {
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
  }

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

const StyledChevronIcon = styled(ChevronRightIcon)`
  width: 20;
  height: 20;

  transition: transform ${transition()};

  ${props =>
    props.isActive &&
    css`
      transform: rotate(90deg);
    `};
`;

export {
  StyledAccordion,
  StyledAccordionTitle,
  StyledAccordionSection,
  StyledAccordionContent,
  StyledChevronIcon
};
